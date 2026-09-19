<script setup lang="ts">
import type { NavItem } from '@/types/nav'

defineProps<{
  items: readonly NavItem[]
  activeId?: string
}>()
</script>

<template>
  <nav class="nav-pill" aria-label="Principal">
    <ul class="nav-pill__list">
      <li v-for="item in items" :key="item.id">
        <a
          class="nav-pill__link"
          :href="`#${item.id}`"
          :aria-current="item.id === activeId ? 'location' : undefined"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-pill {
  padding: var(--space-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background-color: var(--color-surface);
}

.nav-pill__list {
  display: flex;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-pill__link {
  display: block;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  text-decoration: none;
  transition:
    background-color var(--duration-fast) ease,
    color var(--duration-fast) ease;
}

.nav-pill__link:hover {
  background-color: var(--color-surface-muted);
  color: var(--color-text);
}

.nav-pill__link[aria-current='location'],
.nav-pill__link[aria-current='location']:hover {
  background-color: var(--color-primary-soft);
  color: var(--color-primary);
}
</style>
