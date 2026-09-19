<script setup lang="ts">
import AppBadge from '@/components/ui/AppBadge.vue'
import AppCard from '@/components/ui/AppCard.vue'
import type { SkillGroup } from '@/types/skill'

defineProps<{ group: SkillGroup }>()
</script>

<template>
  <AppCard :class="{ 'skill-group--featured': group.featured }">
    <h3>{{ group.title }}</h3>
    <ul class="skill-group__list" role="list">
      <li v-for="item in group.items" :key="item">
        <AppBadge :variant="group.featured ? 'primary' : 'neutral'">{{ item }}</AppBadge>
      </li>
    </ul>
  </AppCard>
</template>

<style scoped>
.skill-group--featured {
  border-color: var(--color-primary);
}

.skill-group__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
</style>
