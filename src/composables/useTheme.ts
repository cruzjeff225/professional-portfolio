import { computed, ref } from 'vue'
import type { Theme } from '@/types/theme'

// La clave se duplica en el script inline de index.html, que aplica el tema antes del primer render.
const STORAGE_KEY = 'portfolio-theme'
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'
const SWITCHING_CLASS = 'theme-switching'
const SWITCHING_DURATION_MS = 300

const theme = ref<Theme>('light')
let initialized = false

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return isTheme(stored) ? stored : null
  } catch {
    return null
  }
}

function storeTheme(value: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Almacenamiento no disponible (modo privado o bloqueado): el tema sigue funcionando en sesión.
  }
}

function applyTheme(value: Theme): void {
  theme.value = value
  document.documentElement.dataset.theme = value
}

function initTheme(): void {
  if (initialized) return
  initialized = true

  const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY)
  applyTheme(readStoredTheme() ?? (mediaQuery.matches ? 'dark' : 'light'))

  mediaQuery.addEventListener('change', (event) => {
    if (readStoredTheme() === null) applyTheme(event.matches ? 'dark' : 'light')
  })
}

function animateSwitch(): void {
  const root = document.documentElement
  root.classList.add(SWITCHING_CLASS)
  window.setTimeout(() => root.classList.remove(SWITCHING_CLASS), SWITCHING_DURATION_MS)
}

export function useTheme() {
  initTheme()

  const isDark = computed(() => theme.value === 'dark')

  function toggleTheme(): void {
    const next: Theme = isDark.value ? 'light' : 'dark'
    animateSwitch()
    applyTheme(next)
    storeTheme(next)
  }

  return { theme, isDark, toggleTheme }
}
