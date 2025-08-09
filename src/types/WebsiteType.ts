import type { PageType } from './PageType'
import type { StylesType } from './StylesType'
import type { WebsitePropertiesType } from './WebsitePropertiesType'

export interface WebsiteType {
  id: number
  name: string
  domain: string
  domainStage: string
  logo: string
  properties: WebsitePropertiesType
  styles: StylesType
  enabled: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  pages: PageType[]
}
