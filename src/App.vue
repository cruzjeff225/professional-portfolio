<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import PathSection from '@/components/sections/PathSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { navItems } from '@/data/nav'

const { activeId } = useScrollSpy(['hero', ...navItems.map((item) => item.id)])
</script>

<template>
  <div id="top">
    <AppHeader :active-id="activeId" />

    <main id="main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PathSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>
