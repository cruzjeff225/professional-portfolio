<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'neutral' | 'primary' }>(), { variant: 'neutral' })
</script>

<template>
  <span class="badge" :class="`badge--${variant}`"><slot /></span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
}

.badge--neutral {
  background-color: var(--color-surface-muted);
  color: var(--color-text-muted);
}

.badge--primary {
  border-color: transparent;
  background-color: var(--color-primary-soft);
  color: var(--color-primary);
}
</style>
