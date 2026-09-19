<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue'
import type { SocialLink } from '@/types/profile'

defineProps<{ links: readonly SocialLink[] }>()
</script>

<template>
  <ul class="social-links" role="list">
    <li v-for="link in links" :key="link.id">
      <a
        class="social-links__link"
        :href="link.href"
        :aria-label="link.label"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppIcon :name="link.id" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: var(--space-2);
}

.social-links__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size-control);
  height: var(--size-control);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  font-size: var(--text-lg);
  transition:
    background-color var(--duration-fast) ease,
    color var(--duration-fast) ease;
}

.social-links__link:hover {
  background-color: var(--color-surface-muted);
  color: var(--color-text);
}
</style>
