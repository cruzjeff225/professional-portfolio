<script setup lang="ts">
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
  <div class="schema" aria-hidden="true">
    <svg class="schema__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M29 29 C29 46, 34 46, 42 46" />
      <path d="M29 71 C29 54, 34 54, 42 54" />
    </svg>

    <div
      v-for="table in tables"
      :key="table.id"
      class="schema__table"
      :class="`schema__table--${table.id}`"
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
  stroke-width: 1.5;
}

.schema__lines path {
  vector-effect: non-scaling-stroke;
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
  margin: 0;
  padding: 0.35em 0;
  list-style: none;
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
</style>
