import { PropertiesType } from './PropertiesType'

export interface ButtonPropertiesType extends PropertiesType {
  path: string
  loadingTime: number
  hideOnClick: boolean
  successActionId: number
  errorActionId: number
  successMessageId: number
  errorMessageId: number
}
