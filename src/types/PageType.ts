import type { ComponentType } from './ComponentType'
import type { PropertiesType } from './PropertiesType'
import type { StylesType } from './StylesType'

export interface PageType {
  id: number
  websiteId: number
  title: string
  name: string
  path: string
  menu: number
  menuOrder: number
  enabled: boolean
  properties: PropertiesType
  styles: StylesType
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  components: ComponentType[]
}
