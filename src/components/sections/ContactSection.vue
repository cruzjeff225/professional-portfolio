<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import { profile } from '@/data/profile'
import { vReveal } from '@/directives/reveal'
</script>

<template>
  <SectionContainer id="contact" labelled-by="contact-title">
    <div class="contact">
      <SectionHeading
        id="contact-title"
        align="center"
        eyebrow="05 / Contacto"
        title="Trabajemos juntos"
        :description="profile.contactMessage"
      />

      <div v-reveal="80" class="contact__actions">
        <AppButton :href="`mailto:${profile.email}`">
          <AppIcon name="mail" /> {{ profile.email }}
        </AppButton>
        <SocialLinks :links="profile.socials" />
      </div>
    </div>
  </SectionContainer>
</template>

<style scoped>
.contact,
.contact__actions {
  display: grid;
  gap: var(--space-8);
  justify-items: center;
}
</style>
