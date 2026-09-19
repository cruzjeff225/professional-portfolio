<script setup lang="ts">
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <p>
        Construido con Vue 3 y TypeScript ·
        <a
          href="https://github.com/cruzjeff225/professional-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Código fuente
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding-block: var(--space-8);
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.app-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}
</style>
