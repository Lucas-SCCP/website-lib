import type { PageType } from './PageType'
import type { StylesType } from './StylesType'
import type { WebsitePropertiesType } from './WebsitePropertiesType'

export interface WebsiteType {
  id: number
  name: string
  domain: string
  domain_stage: string
  logo: string
  properties: WebsitePropertiesType
  styles: StylesType
  enabled: boolean
  published_at: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  pages: PageType[]
}
