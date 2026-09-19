import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick } from 'vue'
import MobileMenu from './MobileMenu.vue'

type QueryListener = (event: { matches: boolean }) => void

const items = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
]

let queryListener: QueryListener | undefined
let unmount: () => void

function mountMenu() {
  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp({ render: () => h(MobileMenu, { items }) })
  app.mount(host)
  unmount = () => app.unmount()

  const toggle = host.querySelector('button') as HTMLButtonElement
  const panel = host.querySelector('nav') as HTMLElement
  return {
    toggle,
    panel,
    isOpen: () => toggle.getAttribute('aria-expanded') === 'true',
    isPanelVisible: () => panel.style.display !== 'none',
  }
}

describe('MobileMenu', () => {
  beforeEach(() => {
    queryListener = undefined
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        addEventListener: (_: string, cb: QueryListener) => {
          queryListener = cb
        },
        removeEventListener: vi.fn(),
      })),
    )
  })

  afterEach(() => {
    unmount()
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
  })

  it('starts closed and toggles with the button', async () => {
    const menu = mountMenu()
    expect(menu.isOpen()).toBe(false)
    expect(menu.isPanelVisible()).toBe(false)

    menu.toggle.click()
    await nextTick()

    expect(menu.isOpen()).toBe(true)
    expect(menu.isPanelVisible()).toBe(true)
    expect(menu.toggle.getAttribute('aria-controls')).toBe(menu.panel.id)
  })

  it('closes on Escape and returns focus to the toggle', async () => {
    const menu = mountMenu()
    menu.toggle.click()
    await nextTick()

    const link = menu.panel.querySelector('a') as HTMLAnchorElement
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()

    expect(menu.isOpen()).toBe(false)
    expect(document.activeElement).toBe(menu.toggle)
  })

  it('closes when a link is chosen', async () => {
    const menu = mountMenu()
    menu.toggle.click()
    await nextTick()

    ;(menu.panel.querySelector('a') as HTMLAnchorElement).click()
    await nextTick()

    expect(menu.isOpen()).toBe(false)
  })

  it('closes on a pointer press outside the menu', async () => {
    const menu = mountMenu()
    menu.toggle.click()
    await nextTick()

    document.body.dispatchEvent(new Event('pointerdown', { bubbles: true }))
    await nextTick()

    expect(menu.isOpen()).toBe(false)
  })

  it('closes when focus moves outside the menu', async () => {
    const menu = mountMenu()
    menu.toggle.click()
    await nextTick()

    const outside = document.createElement('button')
    document.body.appendChild(outside)
    const link = menu.panel.querySelector('a') as HTMLAnchorElement
    link.dispatchEvent(new FocusEvent('focusout', { relatedTarget: outside, bubbles: true }))
    await nextTick()

    expect(menu.isOpen()).toBe(false)
  })

  it('stays open when focus moves within the menu', async () => {
    const menu = mountMenu()
    menu.toggle.click()
    await nextTick()

    const link = menu.panel.querySelector('a') as HTMLAnchorElement
    menu.toggle.dispatchEvent(new FocusEvent('focusout', { relatedTarget: link, bubbles: true }))
    await nextTick()

    expect(menu.isOpen()).toBe(true)
  })

  it('closes when the viewport reaches the desktop breakpoint', async () => {
    const menu = mountMenu()
    menu.toggle.click()
    await nextTick()

    queryListener?.({ matches: true })
    await nextTick()

    expect(menu.isOpen()).toBe(false)
  })
})
