<template>
  <button type="button" class="icon-button"><slot /></button>
</template>

<style scoped>
.icon-button {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: var(--size-control);
  height: var(--size-control);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background-color: var(--color-surface);
  color: var(--color-text);
  font-size: var(--text-lg);
  transition: background-color var(--duration-fast) ease;
}

.icon-button:hover {
  background-color: var(--color-surface-muted);
}
</style>
