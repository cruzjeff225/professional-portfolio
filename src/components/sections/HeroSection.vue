<script setup lang="ts">
import SchemaDiagram from '@/components/visuals/SchemaDiagram.vue'
import AppBadge from '@/components/ui/AppBadge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { profile } from '@/data/profile'
import { vReveal } from '@/directives/reveal'
</script>

<template>
  <section id="hero" class="hero" aria-labelledby="hero-title">
    <div class="container hero__inner">
      <div class="hero__content">
        <p v-reveal="0" class="hero__greeting">Hola, soy</p>
        <h1 id="hero-title" v-reveal="70" class="hero__name">{{ profile.name }}</h1>
        <p v-reveal="140" class="hero__role">&lt; {{ profile.role }} /&gt;</p>
        <p v-reveal="210" class="hero__tagline">{{ profile.tagline }}</p>

        <ul v-reveal="280" class="hero__highlights" role="list">
          <li v-for="highlight in profile.highlights" :key="highlight">
            <AppBadge>{{ highlight }}</AppBadge>
          </li>
        </ul>

        <div v-reveal="350" class="hero__actions">
          <AppButton href="#projects">Ver proyectos <AppIcon name="arrow-right" /></AppButton>
          <AppButton variant="secondary" href="#contact">Contactar</AppButton>
        </div>
      </div>

      <SchemaDiagram class="hero__visual" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: min(calc(100svh - var(--header-height)), 52rem);
  padding-block: var(--space-12);
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-12);
  align-items: center;
}

.hero__content {
  display: grid;
  gap: var(--space-4);
  justify-items: start;
}

.hero__greeting {
  color: var(--color-text-muted);
  font-size: var(--text-xl);
  font-weight: var(--weight-medium);
}

.hero__name {
  color: var(--color-primary);
}

.hero__role {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
}

.hero__tagline {
  max-width: 34rem;
  color: var(--color-text-muted);
  font-size: var(--text-lg);
}

.hero__highlights {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.hero__visual {
  justify-self: center;
  width: min(100%, 22rem);
}

@media (min-width: 64rem) {
  .hero__inner {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: var(--space-16);
  }

  .hero__visual {
    justify-self: end;
    width: min(100%, 28rem);
  }
}
</style>
