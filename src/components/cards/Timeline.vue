<script setup lang="ts">
import type { TimelineEntry } from '@/types/timeline'

defineProps<{ entries: readonly TimelineEntry[] }>()
</script>

<template>
  <ol class="timeline" role="list">
    <li v-for="entry in entries" :key="entry.id" class="timeline__item">
      <p class="timeline__period">{{ entry.period }}</p>
      <h4 class="timeline__title">{{ entry.title }}</h4>
      <p class="timeline__organization">{{ entry.organization }}</p>
      <p class="timeline__description">{{ entry.description }}</p>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  display: grid;
  gap: var(--space-8);
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline__item {
  position: relative;
  padding-left: var(--space-6);
  border-left: 1px solid var(--color-border-strong);
}

.timeline__item::before {
  content: '';
  position: absolute;
  top: 0.4rem;
  left: calc(var(--space-1) * -1.5 - 0.5px);
  width: var(--space-3);
  height: var(--space-3);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
  background-color: var(--color-bg);
}

.timeline__period {
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
}

.timeline__title {
  margin-top: var(--space-1);
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
}

.timeline__organization {
  color: var(--color-text-muted);
}

.timeline__description {
  margin-top: var(--space-2);
}
</style>
