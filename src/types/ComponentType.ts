import type { ElementType } from './ElementType'

export interface ComponentType {
  id: number
  page_id: number
  component_type_id: number
  properties: JSON
  name: string
  size: number
  sort: number
  enabled: boolean
  created_at: string
  updated_at: string
  deleted_at: string | null
  elements: {
    line: number
    content: ElementType[]
  }
}
