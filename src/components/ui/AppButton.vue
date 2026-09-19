<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  external: false,
  type: 'button',
})

const linkAttrs = computed(() =>
  props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {},
)
</script>

<template>
  <a v-if="href" :href="href" class="button" :class="`button--${variant}`" v-bind="linkAttrs">
    <slot />
  </a>
  <button v-else :type="type" class="button" :class="`button--${variant}`">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: var(--size-control);
  padding: 0 var(--space-6);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  line-height: 1;
  text-decoration: none;
  transition:
    background-color var(--duration-fast) ease,
    border-color var(--duration-fast) ease,
    transform var(--duration-fast) ease;
}

.button:active {
  transform: translateY(1px);
}

/* Los estados de color se repiten en :hover para ganar a la regla global de enlaces. */
.button--primary,
.button--primary:hover {
  color: var(--color-on-primary);
}

.button--primary {
  background-color: var(--color-primary);
}

.button--primary:hover {
  background-color: var(--color-primary-hover);
}

.button--secondary,
.button--secondary:hover {
  color: var(--color-on-secondary);
}

.button--secondary {
  border-color: var(--color-border-strong);
  background-color: var(--color-secondary);
}

.button--secondary:hover {
  background-color: var(--color-secondary-hover);
}
</style>
