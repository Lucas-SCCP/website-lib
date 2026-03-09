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
  menuType: 'link' | 'dropdown' | 'sections'
  menuSections?: Array<{
    section: string
    name: string
    order: number
    styles: StylesType
  }>
  enabled: boolean
  properties: PropertiesType
  styles: StylesType
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  components: ComponentType[]
}
