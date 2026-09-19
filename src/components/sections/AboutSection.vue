<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <SectionContainer id="about" labelled-by="about-title">
    <SectionHeading id="about-title" eyebrow="01 / Sobre mí" title="Quién soy" />

    <div class="about">
      <div class="about__summary">
        <p v-for="paragraph in profile.summary" :key="paragraph">{{ paragraph }}</p>
      </div>

      <dl class="about__facts">
        <div v-for="fact in profile.facts" :key="fact.label" class="about__fact">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </div>
  </SectionContainer>
</template>

<style scoped>
.about {
  display: grid;
  gap: var(--space-8);
  margin-top: var(--space-12);
}

.about__summary {
  display: grid;
  gap: var(--space-4);
  font-size: var(--text-lg);
}

.about__facts {
  display: grid;
  gap: var(--space-4);
  align-content: start;
  margin: 0;
}

.about__fact {
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.about__fact dt {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.about__fact dd {
  margin: var(--space-1) 0 0;
  font-weight: var(--weight-medium);
}

@media (min-width: 48rem) {
  .about {
    grid-template-columns: 1.4fr 1fr;
    gap: var(--space-16);
  }
}
</style>
