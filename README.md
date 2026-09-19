# Professional Portfolio

Portfolio profesional de Ingeniería en Desarrollo de Software, con enfoque en Tecnologías de
Gestión de Datos (SQL). Además de presentar perfil, formación, habilidades y proyectos, el propio
código busca demostrar cómo trabajo como ingeniero: arquitectura clara, tipado real, accesibilidad,
diseño responsive y control de versiones profesional.

## Estado del proyecto

En desarrollo. Se construye primero el sistema (arquitectura, design system, componentes y
secciones con contenido placeholder) y después se incorpora la información real.

| Fase | Descripción                              | Estado    |
| ---- | ---------------------------------------- | --------- |
| 1    | Análisis y planificación                 | Completa  |
| 2    | Configuración del proyecto               | Completa  |
| 3    | Design system (tokens, Light/Dark)       | Completa  |
| 4    | Componentes reutilizables                | Completa  |
| 5    | Estructura de secciones con placeholders | Completa  |
| 6    | Responsive, UX y accesibilidad           | Completa  |
| 7    | Animaciones                              | Completa  |
| 8    | Refinamiento                             | Pendiente |
| 9    | Contenido real                           | Pendiente |
| 10   | SEO y deployment                         | Pendiente |

## Tecnologías

- [Vue 3](https://vuejs.org/) con Composition API y `<script setup lang="ts">`
- TypeScript en modo estricto
- [Vite](https://vite.dev/) como bundler
- CSS con variables (design tokens), sin frameworks de estilos
- Inter y JetBrains Mono autoalojadas con Fontsource
- ESLint + Prettier para calidad y formato del código
- Vitest para pruebas unitarias de la lógica (composables)

## Requisitos

- Node.js 20.19 o superior (probado con 22)
- npm 10 o superior

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Scripts

| Script                 | Descripción                                 |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                      |
| `npm run build`        | Type-check y build de producción            |
| `npm run preview`      | Sirve el build de producción localmente     |
| `npm test`             | Ejecuta las pruebas unitarias con Vitest    |
| `npm run type-check`   | Verificación de tipos con `vue-tsc`         |
| `npm run lint`         | Análisis estático con ESLint                |
| `npm run lint:fix`     | ESLint con correcciones automáticas         |
| `npm run format`       | Formatea el código con Prettier             |
| `npm run format:check` | Comprueba el formato sin modificar archivos |

## Estructura

```text
src/
├── assets/          Fuentes e imágenes
├── components/
│   ├── ui/          Primitivas (AppButton, AppBadge, AppIcon, IconButton, SectionHeading)
│   ├── layout/      AppHeader, SectionContainer (y footer)
│   ├── navigation/  NavPill, MobileMenu y ThemeToggle
│   ├── cards/       Componentes de dominio (SkillGroup, ProjectCard, Timeline)
│   ├── sections/    Hero, Sobre mí, Habilidades, Proyectos, Trayectoria y Contacto
│   └── visuals/     Elementos gráficos propios (SchemaDiagram)
├── composables/     Lógica reutilizable (useTheme, useScrollSpy)
├── directives/      Directivas (v-reveal)
├── data/            Contenido desacoplado de los componentes
├── types/           Interfaces y tipos
├── styles/          Tokens, base y temas
├── App.vue
└── main.ts
```

## Git y convenciones

- Rama principal: `main`.
- Commits siguiendo [Conventional Commits](https://www.conventionalcommits.org/) en inglés
  (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`).
- Un commit por cambio lógico; el trabajo de cada fase se integra tras validar lint, type-check y
  build.

## Próximas fases

Refinamiento de código, UX/UI, rendimiento y accesibilidad (Fase 8).

## Contenido

Toda la información vive en `src/data/` con tipos en `src/types/`. Los textos entre corchetes
(`[Nombre]`, `[Proyecto 1]`...) son placeholders que se sustituyen en la Fase 9 sin tocar los
componentes.

## Design system

- **Tokens de escala** (tipografía, espaciado, radios, layout, movimiento): `src/styles/tokens.css`.
- **Tokens semánticos por tema** (colores y sombras): `src/styles/themes.css`. Light y Dark están
  diseñados por separado y todos los pares de texto cumplen WCAG AA.
- **Tema**: `useTheme` aplica `data-theme` en `<html>`, respeta `prefers-color-scheme` y persiste la
  elección en `localStorage`. Un script inline en `index.html` evita el parpadeo inicial.
- **Breakpoints** (mobile-first): 480, 768, 1024 y 1280 px (documentados en `tokens.css`).
- Soporte de `prefers-reduced-motion` desde la base de estilos.

## Animaciones

Solo hay movimiento donde aporta feedback o comprensión: aparición gradual de las secciones al hacer
scroll (`v-reveal`, un único `IntersectionObserver` compartido), entrada escalonada del hero y
dibujo del esquema de datos. Todo vive bajo `prefers-reduced-motion: no-preference`; con movimiento
reducido el contenido se muestra directamente, sin estados ocultos.

## Accesibilidad

- HTML semántico: landmarks, secciones etiquetadas, jerarquía de encabezados y enlace "Saltar al
  contenido".
- Navegación completa por teclado con foco visible; el menú móvil se cierra con Escape, al tabular
  fuera, al pulsar fuera y al llegar al breakpoint de escritorio.
- Auditoría con axe-core (WCAG 2.2 AA + buenas prácticas) sin violaciones en Light y Dark, a 320 px y
  con el menú abierto.
- Sin desbordamiento horizontal desde 320 px.
