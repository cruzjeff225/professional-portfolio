<script setup lang="ts">
import MobileMenu from '@/components/navigation/MobileMenu.vue'
import NavPill from '@/components/navigation/NavPill.vue'
import ThemeToggle from '@/components/navigation/ThemeToggle.vue'
import { navItems } from '@/data/nav'
import { profile } from '@/data/profile'

defineProps<{ activeId?: string }>()
</script>

<template>
  <header class="app-header">
    <a class="skip-link" href="#main">Saltar al contenido</a>

    <div class="container app-header__inner">
      <a class="app-header__brand" href="#top">{{ profile.name }}</a>

      <NavPill class="app-header__nav" :items="navItems" :active-id="activeId" />

      <div class="app-header__actions">
        <ThemeToggle />
        <MobileMenu class="app-header__menu" :items="navItems" :active-id="activeId" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-border);
  background-color: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(8px);
}

.app-header__inner {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 100%;
}

.app-header__brand {
  justify-self: start;
  color: var(--color-text);
  font-weight: var(--weight-semibold);
  text-decoration: none;
}

.app-header__brand:hover {
  color: var(--color-text);
}

.app-header__nav {
  display: none;
}

.app-header__actions {
  display: flex;
  gap: var(--space-2);
}

.skip-link {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  transform: translateY(-200%);
}

.skip-link:focus {
  transform: none;
}

.skip-link:hover {
  color: var(--color-on-primary);
}

@media (min-width: 64rem) {
  .app-header__inner {
    grid-template-columns: 1fr auto 1fr;
  }

  .app-header__nav {
    display: block;
  }

  .app-header__actions {
    justify-self: end;
  }

  .app-header__menu {
    display: none;
  }
}
</style>
