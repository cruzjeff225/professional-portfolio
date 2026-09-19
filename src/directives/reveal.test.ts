import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, withDirectives } from 'vue'

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = []
  observed = new Set<Element>()
  private callback: (entries: { target: Element; isIntersecting: boolean }[]) => void

  constructor(callback: FakeIntersectionObserver['callback']) {
    this.callback = callback
    FakeIntersectionObserver.instances.push(this)
  }

  observe(element: Element) {
    this.observed.add(element)
  }

  unobserve(element: Element) {
    this.observed.delete(element)
  }

  emit(target: Element, isIntersecting: boolean) {
    this.callback([{ target, isIntersecting }])
  }
}

async function mountWithReveal(value?: number, modifiers: Record<string, boolean> = {}) {
  const { vReveal } = await import('./reveal')
  const host = document.createElement('div')
  const app = createApp({
    render: () => withDirectives(h('p', 'hola'), [[vReveal, value, '', modifiers]]),
  })
  app.mount(host)
  return { el: host.querySelector('p') as HTMLElement, unmount: () => app.unmount() }
}

describe('v-reveal', () => {
  beforeEach(() => {
    vi.resetModules()
    FakeIntersectionObserver.instances = []
    vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('starts pending with the fade effect and observes the element', async () => {
    const { el } = await mountWithReveal()

    expect(el.dataset.reveal).toBe('pending')
    expect(el.dataset.revealEffect).toBe('fade')
    expect(FakeIntersectionObserver.instances[0].observed.has(el)).toBe(true)
  })

  it('becomes visible once and stops observing when it intersects', async () => {
    const { el } = await mountWithReveal()
    const observer = FakeIntersectionObserver.instances[0]

    observer.emit(el, false)
    expect(el.dataset.reveal).toBe('pending')

    observer.emit(el, true)
    expect(el.dataset.reveal).toBe('visible')
    expect(observer.observed.has(el)).toBe(false)
  })

  it('exposes the delay as a CSS variable', async () => {
    const { el } = await mountWithReveal(120)

    expect(el.style.getPropertyValue('--reveal-delay')).toBe('120ms')
  })

  it('does not add the default effect with the trigger modifier', async () => {
    const { el } = await mountWithReveal(undefined, { trigger: true })

    expect(el.dataset.reveal).toBe('pending')
    expect(el.dataset.revealEffect).toBeUndefined()
  })

  it('shares a single observer between elements', async () => {
    await mountWithReveal()
    await mountWithReveal()

    expect(FakeIntersectionObserver.instances).toHaveLength(1)
  })

  it('leaves the element untouched when IntersectionObserver is unavailable', async () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    const { el } = await mountWithReveal()

    expect(el.dataset.reveal).toBeUndefined()
  })

  it('stops observing on unmount', async () => {
    const { el, unmount } = await mountWithReveal()

    unmount()

    expect(FakeIntersectionObserver.instances[0].observed.has(el)).toBe(false)
  })
})
