<script setup lang="ts">
import { vReveal } from '@/directives/reveal'

interface Column {
  name: string
  type: string
  key?: 'PK' | 'FK'
}

interface Table {
  id: string
  name: string
  columns: readonly Column[]
}

const tables: readonly Table[] = [
  {
    id: 'projects',
    name: 'projects',
    columns: [
      { name: 'id', type: 'uuid', key: 'PK' },
      { name: 'title', type: 'text' },
      { name: 'status', type: 'text' },
    ],
  },
  {
    id: 'links',
    name: 'project_technologies',
    columns: [
      { name: 'project_id', type: 'uuid', key: 'FK' },
      { name: 'technology_id', type: 'uuid', key: 'FK' },
    ],
  },
  {
    id: 'technologies',
    name: 'technologies',
    columns: [
      { name: 'id', type: 'uuid', key: 'PK' },
      { name: 'name', type: 'text' },
      { name: 'category', type: 'text' },
    ],
  },
]
</script>

<template>
  <div v-reveal.trigger class="schema" aria-hidden="true">
    <svg class="schema__lines" viewBox="0 0 100 102">
      <path pathLength="1" style="--i: 0" d="M29 29.6 C29 46.9, 34 46.9, 42 46.9" />
      <path pathLength="1" style="--i: 1" d="M29 72.4 C29 55.1, 34 55.1, 42 55.1" />
    </svg>

    <div
      v-for="(table, index) in tables"
      :key="table.id"
      class="schema__table"
      :class="`schema__table--${table.id}`"
      :style="{ '--i': index }"
    >
      <p class="schema__name">{{ table.name }}</p>
      <ul class="schema__columns">
        <li v-for="column in table.columns" :key="column.name" class="schema__column">
          <span class="schema__key">{{ column.key }}</span>
          <span>{{ column.name }}</span>
          <span class="schema__type">{{ column.type }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.schema {
  position: relative;
  container-type: inline-size;
  width: min(100%, 28rem);
  aspect-ratio: 1 / 1.02;
  user-select: none;
}

.schema__lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: var(--color-border-strong);
  stroke-width: 0.35;
}

.schema__lines path {
  stroke-dasharray: 1;
}

.schema__table {
  position: absolute;
  width: 58%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-mono);
  font-size: clamp(0.6875rem, 3.1cqi, 0.8125rem);
}

.schema__table--projects {
  top: 0;
  left: 0;
}

.schema__table--links {
  top: 39%;
  left: 42%;
}

.schema__table--technologies {
  top: 71%;
  left: 0;
}

.schema__name {
  padding: 0.5em 0.9em;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-primary-soft);
  color: var(--color-primary);
  font-weight: var(--weight-semibold);
}

.schema__columns {
  padding: 0.35em 0;
}

.schema__column {
  display: grid;
  grid-template-columns: 1.8em 1fr auto;
  gap: 0.4em;
  padding: 0.3em 0.9em;
  color: var(--color-text);
}

.schema__key {
  color: var(--color-primary);
  font-size: 0.85em;
  font-weight: var(--weight-semibold);
}

.schema__type {
  color: var(--color-text-muted);
}

@media (prefers-reduced-motion: no-preference) {
  .schema[data-reveal='pending'] .schema__table {
    opacity: 0;
  }

  .schema[data-reveal='pending'] .schema__lines path {
    stroke-dashoffset: 1;
  }

  .schema[data-reveal='visible'] .schema__table {
    animation: schema-rise var(--duration-slow) var(--ease-out) both;
    animation-delay: calc(var(--i) * 150ms);
  }

  .schema[data-reveal='visible'] .schema__lines path {
    animation: schema-draw 600ms var(--ease-out) both;
    animation-delay: calc(450ms + var(--i) * 150ms);
  }
}

@keyframes schema-rise {
  from {
    opacity: 0;
    transform: translateY(var(--space-3));
  }
}

@keyframes schema-draw {
  from {
    stroke-dashoffset: 1;
  }
}
</style>
