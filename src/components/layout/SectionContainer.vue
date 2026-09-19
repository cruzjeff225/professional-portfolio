<script setup lang="ts">
defineProps<{
  id: string
  labelledBy?: string
}>()
</script>

<template>
  <section :id="id" class="section" :aria-labelledby="labelledBy">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-block: var(--space-16);
}

@media (min-width: 48rem) {
  .section {
    padding-block: var(--space-24);
  }
}
</style>
