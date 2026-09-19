<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const colors = [
  'bg',
  'surface',
  'surface-muted',
  'text',
  'text-muted',
  'border',
  'border-strong',
  'primary',
  'primary-soft',
  'secondary',
  'success',
  'warning',
  'error',
]
const spacing = [1, 2, 3, 4, 6, 8, 12, 16]
const radii = ['sm', 'md', 'lg', 'full']
</script>

<template>
  <main class="preview">
    <header class="preview__header">
      <p class="preview__eyebrow">&lt; design system /&gt;</p>
      <button class="preview__toggle" type="button" :aria-pressed="isDark" @click="toggleTheme">
        Tema: {{ isDark ? 'oscuro' : 'claro' }}
      </button>
    </header>

    <h1>[Nombre]</h1>
    <h2>Título de sección</h2>
    <h3>Título de tarjeta</h3>
    <p>
      Cuerpo de texto de ejemplo para evaluar legibilidad, interlineado y contraste.
      <a href="#preview">Enlace de ejemplo</a>
    </p>
    <p class="preview__muted">Texto secundario en color atenuado.</p>

    <section aria-labelledby="colors">
      <h3 id="colors">Colores</h3>
      <ul class="preview__grid">
        <li v-for="name in colors" :key="name" class="preview__swatch">
          <span class="preview__chip" :style="{ background: `var(--color-${name})` }"></span>
          {{ name }}
        </li>
      </ul>
    </section>

    <section aria-labelledby="scales">
      <h3 id="scales">Espaciado, radios y sombras</h3>
      <div class="preview__row">
        <span
          v-for="step in spacing"
          :key="step"
          class="preview__space"
          :style="{ width: `var(--space-${step})` }"
          :title="`space-${step}`"
        ></span>
      </div>
      <div class="preview__row">
        <span
          v-for="radius in radii"
          :key="radius"
          class="preview__box"
          :style="{ borderRadius: `var(--radius-${radius})` }"
        >
          {{ radius }}
        </span>
        <span class="preview__box" style="box-shadow: var(--shadow-sm)">shadow-sm</span>
        <span class="preview__box" style="box-shadow: var(--shadow-md)">shadow-md</span>
      </div>
    </section>
  </main>
</template>

<style scoped>
.preview {
  display: grid;
  gap: var(--space-6);
  max-width: var(--container-max);
  margin-inline: auto;
  padding: var(--space-12) var(--container-padding);
}

.preview__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.preview__eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  color: var(--color-primary);
}

.preview__toggle {
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-full);
  background: var(--color-secondary);
  color: var(--color-on-secondary);
}

.preview__toggle:hover {
  background: var(--color-secondary-hover);
}

.preview__muted {
  color: var(--color-text-muted);
}

.preview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-3);
  padding: 0;
  list-style: none;
  font-size: var(--text-sm);
}

.preview__swatch {
  display: grid;
  gap: var(--space-2);
}

.preview__chip {
  height: 3rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.preview__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.preview__space {
  height: var(--space-4);
  background: var(--color-primary);
}

.preview__box {
  display: grid;
  place-items: center;
  width: 6rem;
  height: 4rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-size: var(--text-sm);
}
</style>
