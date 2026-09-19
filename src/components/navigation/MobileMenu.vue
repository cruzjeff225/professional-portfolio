<script setup lang="ts">
import { ref, useId } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import IconButton from '@/components/ui/IconButton.vue'
import type { NavItem } from '@/types/nav'

defineProps<{
  items: readonly NavItem[]
  activeId?: string
}>()

const isOpen = ref(false)
const panelId = useId()
const toggle = ref<InstanceType<typeof IconButton> | null>(null)

function close(): void {
  isOpen.value = false
}

function closeAndRestoreFocus(): void {
  if (!isOpen.value) return
  close()
  ;(toggle.value?.$el as HTMLElement | undefined)?.focus()
}
</script>

<template>
  <div class="mobile-menu" @keydown.esc="closeAndRestoreFocus">
    <IconButton
      ref="toggle"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
      @click="isOpen = !isOpen"
    >
      <AppIcon :name="isOpen ? 'x' : 'menu'" />
    </IconButton>

    <nav v-show="isOpen" :id="panelId" class="mobile-menu__panel" aria-label="Principal">
      <ul class="mobile-menu__list">
        <li v-for="item in items" :key="item.id">
          <a
            class="mobile-menu__link"
            :href="`#${item.id}`"
            :aria-current="item.id === activeId ? 'location' : undefined"
            @click="close"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
/* El panel se posiciona respecto al header (ancestro sticky), no respecto a este contenedor. */
.mobile-menu__panel {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  padding: var(--space-2) var(--container-padding) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg);
}

.mobile-menu__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-menu__link {
  display: block;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  text-decoration: none;
}

.mobile-menu__link:hover,
.mobile-menu__link[aria-current='location'] {
  color: var(--color-primary);
}
</style>
