export type ProjectStatus = 'public' | 'private'

export interface Project {
  id: string
  title: string
  description: string
  technologies: readonly string[]
  status: ProjectStatus
  githubUrl?: string
  demoUrl?: string
}
