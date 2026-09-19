export type TimelineEntryType = 'education' | 'experience'

export interface TimelineEntry {
  id: string
  type: TimelineEntryType
  title: string
  organization: string
  period: string
  description: string
}
