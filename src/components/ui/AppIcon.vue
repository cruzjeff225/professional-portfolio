<script setup lang="ts">
import { computed } from 'vue'
import { icons, type IconName } from './icons'

const props = defineProps<{ name: IconName }>()

const icon = computed(() => icons[props.name])
</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    :fill="icon.variant === 'fill' ? 'currentColor' : 'none'"
    :stroke="icon.variant === 'stroke' ? 'currentColor' : 'none'"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="d in icon.paths" :key="d" :d="d" />
  </svg>
</template>

<style scoped>
.icon {
  flex: none;
  width: 1.25em;
  height: 1.25em;
}
</style>
