import { PropertiesType } from './PropertiesType'

export interface InputPropertiesType extends PropertiesType {
  mask: string
  placeholder: string
  required: boolean
  validateTypeId: number
}
