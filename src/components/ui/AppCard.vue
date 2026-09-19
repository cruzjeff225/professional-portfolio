<script setup lang="ts">
withDefaults(defineProps<{ as?: 'article' | 'div' }>(), { as: 'div' })
</script>

<template>
  <component :is="as" class="card"><slot /></component>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
}
</style>
