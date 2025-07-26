import type { PageType } from './PageType'
import type { PropertiesType } from './PropertiesType'
import type { StylesType } from './StylesType'

export interface WebsiteType {
  id: number
  name: string
  domain: string
  domain_stage: string
  logo: string
  properties: PropertiesType
  styles: StylesType
  enabled: boolean
  published_at: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  pages: PageType[]
}
