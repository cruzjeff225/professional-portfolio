import type { Directive } from 'vue'

const REVEAL_THRESHOLD = 0.1
const REVEAL_ROOT_MARGIN = '0px 0px -8% 0px'

let observer: IntersectionObserver | undefined

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        ;(entry.target as HTMLElement).dataset.reveal = 'visible'
        observer?.unobserve(entry.target)
      }
    },
    { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN },
  )
  return observer
}

/**
 * Marca el elemento como `data-reveal="pending"` y lo cambia a `"visible"` al entrar en el viewport.
 * El efecto visual vive en motion.css y solo se aplica si el usuario no pidió reducir el movimiento.
 *
 * - `v-reveal="120"`: aparición con fundido y desplazamiento, retrasada 120 ms (escalonado).
 * - `v-reveal.trigger`: solo expone el estado; el propio componente define su animación.
 */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, { value, modifiers }) {
    if (typeof IntersectionObserver === 'undefined') return

    if (!modifiers.trigger) el.dataset.revealEffect = 'fade'
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)

    el.dataset.reveal = 'pending'
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
