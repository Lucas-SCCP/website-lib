import type { PageType } from './PageType'
import type { StylesType } from './StylesType'
import type { HeaderType } from './HeaderType'
import type { FooterType } from './FooterType'
import type { WebsitePropertiesType } from './WebsitePropertiesType'

export interface WebsiteType {
  id: number
  name: string
  domain: string
  domainStage: string
  logo: string
  header: HeaderType
  footer: FooterType
  properties: WebsitePropertiesType
  styles: StylesType
  enabled: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  pages: PageType[]
}
