<script setup lang="ts">
import ProjectCard from '@/components/cards/ProjectCard.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <SectionContainer id="projects" labelled-by="projects-title">
    <SectionHeading
      id="projects-title"
      eyebrow="03 / Proyectos"
      title="Lo que he construido"
      description="[Introducción breve a los proyectos destacados]"
    />

    <div class="projects">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </SectionContainer>
</template>

<style scoped>
.projects {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-12);
}

@media (min-width: 48rem) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
