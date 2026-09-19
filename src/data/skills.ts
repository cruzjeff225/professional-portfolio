import type { SkillGroup } from '@/types/skill'

export const skillGroups: readonly SkillGroup[] = [
  { id: 'data', title: 'Datos', items: ['SQL', '[Motor de base de datos]'], featured: true },
  { id: 'frontend', title: 'Frontend', items: ['Vue 3', 'TypeScript', 'HTML5', 'CSS3'] },
  { id: 'backend', title: 'Backend', items: ['[Tecnología]'] },
  { id: 'tools', title: 'Herramientas', items: ['Git', 'GitHub'] },
]
