<script setup lang="ts">
defineProps<{
  id?: string
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="section-heading">
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
