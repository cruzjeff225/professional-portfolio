<script setup lang="ts">
import Timeline from '@/components/cards/Timeline.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { timeline } from '@/data/timeline'
import { vReveal } from '@/directives/reveal'

const education = timeline.filter((entry) => entry.type === 'education')
const experience = timeline.filter((entry) => entry.type === 'experience')
</script>

<template>
  <SectionContainer id="path" labelled-by="path-title">
    <SectionHeading id="path-title" eyebrow="04 / Trayectoria" title="Formación y experiencia" />

    <div class="path">
      <div v-reveal>
        <h3 class="path__title">Formación</h3>
        <Timeline :entries="education" />
      </div>
      <div v-reveal="100">
        <h3 class="path__title">Experiencia</h3>
        <Timeline :entries="experience" />
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.path {
  display: grid;
  gap: var(--space-12);
  margin-top: var(--space-12);
}

.path__title {
  margin-bottom: var(--space-6);
}

@media (min-width: 64rem) {
  .path {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-16);
  }
}
</style>
