import type { Profile } from '@/types/profile'

export const profile: Profile = {
  name: '[Nombre]',
  role: '[Rol profesional]',
  tagline: '[Descripción profesional breve: qué hago y qué valor aporto]',
  highlights: ['Ingeniería en Desarrollo de Software · 5.º año', 'Gestión de datos SQL'],
  summary: [
    '[Párrafo 1: quién soy y qué me motiva]',
    '[Párrafo 2: enfoque profesional y objetivos]',
  ],
  facts: [
    { label: 'Formación', value: 'Ingeniería en Desarrollo de Software (5.º año)' },
    { label: 'Área', value: 'Tecnologías de Gestión de Datos SQL' },
    { label: 'Ubicación', value: '[Ciudad, País]' },
  ],
  contactMessage: '[Mensaje de contacto: qué tipo de oportunidades me interesan]',
  email: 'correo@ejemplo.com',
  socials: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/cruzjeff225' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/usuario' },
  ],
}
