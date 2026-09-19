export type SocialId = 'github' | 'linkedin'

export interface SocialLink {
  id: SocialId
  label: string
  href: string
}

export interface ProfileFact {
  label: string
  value: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  highlights: readonly string[]
  summary: readonly string[]
  facts: readonly ProfileFact[]
  contactMessage: string
  email: string
  socials: readonly SocialLink[]
}
