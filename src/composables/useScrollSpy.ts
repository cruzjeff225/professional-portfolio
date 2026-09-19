import { onBeforeUnmount, onMounted, ref } from 'vue'

// Franja estrecha a ~40% del viewport: la sección que la cruza se considera activa.
const ACTIVE_BAND_MARGIN = '-40% 0px -55% 0px'

export function useScrollSpy(ids: readonly string[]) {
  const activeId = ref<string>()
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id
        }
      },
      { rootMargin: ACTIVE_BAND_MARGIN },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeId }
}
