import type { Project } from '@/types/project'

export const projects: readonly Project[] = [
  {
    id: 'project-1',
    title: '[Proyecto 1]',
    description: '[Descripción: qué problema resuelve y cuál fue mi aporte]',
    technologies: ['[Tecnología]', '[Tecnología]'],
    status: 'public',
  },
  {
    id: 'project-2',
    title: '[Proyecto 2]',
    description: '[Descripción: qué problema resuelve y cuál fue mi aporte]',
    technologies: ['[Tecnología]', '[Tecnología]'],
    status: 'private',
  },
  {
    id: 'project-3',
    title: '[Proyecto 3]',
    description: '[Descripción: qué problema resuelve y cuál fue mi aporte]',
    technologies: ['[Tecnología]', '[Tecnología]'],
    status: 'private',
  },
]
