import type { ElementType } from './ElementType'
import type { PropertiesType } from './PropertiesType'
import type { StylesType } from './StylesType'

export interface ComponentType {
  id: number
  pageId: number
  componentTypeId: number
  name: string
  properties: PropertiesType
  style: StylesType
  sort: number
  enabled: boolean
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  elements: {
    line: number
    content: ElementType[]
  }
}
