<script setup lang="ts">
import AppBadge from '@/components/ui/AppBadge.vue'
import AppCard from '@/components/ui/AppCard.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import type { Project } from '@/types/project'

defineProps<{ project: Project }>()
</script>

<template>
  <AppCard as="article">
    <header class="project-card__header">
      <h3>{{ project.title }}</h3>
      <span class="project-card__status">
        <AppIcon v-if="project.status === 'private'" name="lock" />
        {{ project.status === 'private' ? 'Privado' : 'Público' }}
      </span>
    </header>

    <p class="project-card__description">{{ project.description }}</p>

    <ul class="project-card__stack" role="list">
      <li v-for="(tech, index) in project.technologies" :key="`${tech}-${index}`">
        <AppBadge>{{ tech }}</AppBadge>
      </li>
    </ul>

    <div v-if="project.githubUrl || project.demoUrl" class="project-card__links">
      <a
        v-if="project.githubUrl"
        class="project-card__link"
        :href="project.githubUrl"
        :aria-label="`Ver código de ${project.title}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver código <AppIcon name="arrow-up-right" />
      </a>
      <a
        v-if="project.demoUrl"
        class="project-card__link"
        :href="project.demoUrl"
        :aria-label="`Ver demo de ${project.title}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver demo <AppIcon name="arrow-up-right" />
      </a>
    </div>
  </AppCard>
</template>

<style scoped>
.project-card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-4);
}

.project-card__status {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.project-card__description {
  flex: 1;
  color: var(--color-text-muted);
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-card__links {
  display: flex;
  gap: var(--space-6);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
}
</style>
