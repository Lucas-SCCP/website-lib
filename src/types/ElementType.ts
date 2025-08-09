import type { PropertiesType } from './PropertiesType'
import type { StylesType } from './StylesType'

export interface ElementType {
  id: number
  componentId: number
  elementTypeId: number
  componentParent: number | null
  sort: number
  properties: PropertiesType
  styles: StylesType
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}
