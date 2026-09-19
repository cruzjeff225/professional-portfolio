<script setup lang="ts">
import AppBadge from '@/components/ui/AppBadge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import { icons, type IconName } from '@/components/ui/icons'

const iconNames = Object.keys(icons) as IconName[]
</script>

<template>
  <div id="top">
    <AppHeader active-id="projects" />

    <main id="main">
      <SectionContainer id="preview" labelled-by="preview-title">
        <SectionHeading
          id="preview-title"
          eyebrow="< components />"
          title="Componentes base"
          description="Vista previa temporal de los componentes reutilizables de la Fase 4."
        />

        <div class="preview">
          <h3>Botones</h3>
          <div class="preview__row">
            <AppButton>Ver proyectos <AppIcon name="arrow-right" /></AppButton>
            <AppButton variant="secondary" href="#contact">Contactar</AppButton>
            <AppButton variant="secondary" href="https://github.com" external>
              <AppIcon name="github" /> GitHub <AppIcon name="arrow-up-right" />
            </AppButton>
          </div>

          <h3>Badges</h3>
          <div class="preview__row">
            <AppBadge>SQL</AppBadge>
            <AppBadge>TypeScript</AppBadge>
            <AppBadge variant="primary">Vue 3</AppBadge>
          </div>

          <h3>Iconos</h3>
          <div class="preview__row preview__icons">
            <span v-for="name in iconNames" :key="name" :title="name">
              <AppIcon :name="name" />
            </span>
          </div>
        </div>
      </SectionContainer>
    </main>
  </div>
</template>

<style scoped>
.preview {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-12);
}

.preview__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
}

.preview__icons {
  font-size: var(--text-2xl);
}
</style>
