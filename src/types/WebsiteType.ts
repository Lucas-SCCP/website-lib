import type { PageType } from './PageType'

export interface WebsiteType {
  id: number
  name: string
  domain: string
  domain_stage: string
  logo: string
  enabled: boolean
  published_at: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  pages: PageType[]
}
