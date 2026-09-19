<script setup lang="ts">
import { vReveal } from '@/directives/reveal'

withDefaults(
  defineProps<{
    id?: string
    eyebrow?: string
    title: string
    description?: string
    align?: 'start' | 'center'
  }>(),
  { align: 'start' },
)
</script>

<template>
  <header
    v-reveal
    class="section-heading"
    :class="{ 'section-heading--center': align === 'center' }"
  >
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2 :id="id">{{ title }}</h2>
    <p v-if="description" class="section-heading__description">{{ description }}</p>
  </header>
</template>

<style scoped>
.section-heading {
  display: grid;
  gap: var(--space-3);
  max-width: 40rem;
}

.section-heading--center {
  margin-inline: auto;
  text-align: center;
}

.section-heading__eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  color: var(--color-primary);
}

.section-heading__description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
}
</style>
