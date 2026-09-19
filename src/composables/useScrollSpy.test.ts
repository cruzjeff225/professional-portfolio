import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, nextTick } from 'vue'
import { useScrollSpy } from './useScrollSpy'

type ObserverCallback = (entries: { target: Element; isIntersecting: boolean }[]) => void

class FakeIntersectionObserver {
  static instance: FakeIntersectionObserver
  observed: Element[] = []
  disconnected = false
  private callback: ObserverCallback

  constructor(callback: ObserverCallback) {
    this.callback = callback
    FakeIntersectionObserver.instance = this
  }

  observe(element: Element) {
    this.observed.push(element)
  }

  disconnect() {
    this.disconnected = true
  }

  emit(target: Element, isIntersecting: boolean) {
    this.callback([{ target, isIntersecting }])
  }
}

function mountSpy(ids: string[]) {
  let activeId!: ReturnType<typeof useScrollSpy>['activeId']
  const app = createApp({
    setup() {
      activeId = useScrollSpy(ids).activeId
      return () => null
    },
  })
  app.mount(document.createElement('div'))
  return { activeId, unmount: () => app.unmount() }
}

function section(id: string): HTMLElement {
  const element = document.getElementById(id)
  if (!element) throw new Error(`Missing #${id} in test document`)
  return element
}

describe('useScrollSpy', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver)
    document.body.innerHTML = '<section id="about"></section><section id="projects"></section>'
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('observes only the ids that exist in the document', () => {
    mountSpy(['about', 'missing', 'projects'])

    expect(FakeIntersectionObserver.instance.observed.map((el) => el.id)).toEqual([
      'about',
      'projects',
    ])
  })

  it('exposes the id of the section that enters the active band', async () => {
    const { activeId } = mountSpy(['about', 'projects'])
    expect(activeId.value).toBeUndefined()

    FakeIntersectionObserver.instance.emit(section('projects'), true)
    await nextTick()

    expect(activeId.value).toBe('projects')
  })

  it('ignores sections leaving the band', () => {
    const { activeId } = mountSpy(['about'])

    FakeIntersectionObserver.instance.emit(section('about'), false)

    expect(activeId.value).toBeUndefined()
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = mountSpy(['about'])

    unmount()

    expect(FakeIntersectionObserver.instance.disconnected).toBe(true)
  })
})
