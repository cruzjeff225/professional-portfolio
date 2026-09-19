import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

type ChangeListener = (event: { matches: boolean }) => void

function mockSystemTheme(prefersDark: boolean) {
  let listener: ChangeListener | undefined
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches: prefersDark,
      addEventListener: (_: string, cb: ChangeListener) => {
        listener = cb
      },
    })),
  )
  return { emitChange: (matches: boolean) => listener?.({ matches }) }
}

async function loadUseTheme() {
  vi.resetModules()
  return (await import('./useTheme')).useTheme
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    delete document.documentElement.dataset.theme
    document.documentElement.className = ''
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('follows the system preference when nothing is stored', async () => {
    mockSystemTheme(true)
    const { theme } = (await loadUseTheme())()

    expect(theme.value).toBe('dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  it('prefers the stored theme over the system preference', async () => {
    mockSystemTheme(true)
    localStorage.setItem('portfolio-theme', 'light')
    const { theme } = (await loadUseTheme())()

    expect(theme.value).toBe('light')
  })

  it('ignores invalid stored values', async () => {
    mockSystemTheme(false)
    localStorage.setItem('portfolio-theme', 'purple')
    const { theme } = (await loadUseTheme())()

    expect(theme.value).toBe('light')
  })

  it('toggles, persists the choice and updates the document', async () => {
    mockSystemTheme(false)
    const { theme, isDark, toggleTheme } = (await loadUseTheme())()

    toggleTheme()

    expect(theme.value).toBe('dark')
    expect(isDark.value).toBe(true)
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
  })

  it('adds the switching class only while the transition runs', async () => {
    mockSystemTheme(false)
    const { toggleTheme } = (await loadUseTheme())()

    toggleTheme()
    expect(document.documentElement.classList.contains('theme-switching')).toBe(true)

    vi.advanceTimersByTime(300)
    expect(document.documentElement.classList.contains('theme-switching')).toBe(false)
  })

  it('reacts to system changes only while there is no stored choice', async () => {
    const system = mockSystemTheme(false)
    const { theme, toggleTheme } = (await loadUseTheme())()

    system.emitChange(true)
    expect(theme.value).toBe('dark')

    toggleTheme()
    system.emitChange(true)
    expect(theme.value).toBe('light')
  })
})
