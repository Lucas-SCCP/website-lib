import type { PropertiesType } from './PropertiesType'
import type { StylesType } from './StylesType'

export interface ElementType {
  id: number
  component_id: number
  element_type_id: number
  size: number
  component_parent: number | null
  sort: number
  properties: PropertiesType
  styles: StylesType
  created_at: string
  updated_at: string
  deleted_at: string | null
}
