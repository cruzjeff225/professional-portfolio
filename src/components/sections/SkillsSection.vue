<script setup lang="ts">
import SkillGroup from '@/components/cards/SkillGroup.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { skillGroups } from '@/data/skills'
import { vReveal } from '@/directives/reveal'
</script>

<template>
  <SectionContainer id="skills" labelled-by="skills-title">
    <SectionHeading
      id="skills-title"
      eyebrow="02 / Habilidades"
      title="Tecnologías con las que trabajo"
    />

    <div class="skills">
      <SkillGroup
        v-for="(group, index) in skillGroups"
        :key="group.id"
        v-reveal="index * 80"
        :group="group"
        :class="{ skills__featured: group.featured }"
      />
    </div>
  </SectionContainer>
</template>

<style scoped>
.skills {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-12);
}

@media (min-width: 48rem) {
  .skills {
    grid-template-columns: repeat(3, 1fr);
  }

  .skills__featured {
    grid-column: 1 / -1;
  }
}
</style>
