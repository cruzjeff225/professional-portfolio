import type { TimelineEntry } from '@/types/timeline'

export const timeline: readonly TimelineEntry[] = [
  {
    id: 'edu-1',
    type: 'education',
    title: 'Ingeniería en Desarrollo de Software',
    organization: '[Institución]',
    period: '[Año de inicio] — Actualidad',
    description: 'Cursando el 5.º y último año.',
  },
  {
    id: 'edu-2',
    type: 'education',
    title: '[Formación complementaria]',
    organization: '[Institución]',
    period: '[Periodo]',
    description: '[Descripción]',
  },
  {
    id: 'exp-1',
    type: 'experience',
    title: '[Cargo]',
    organization: '[Empresa]',
    period: '[Periodo]',
    description: '[Descripción de responsabilidades y logros]',
  },
]
