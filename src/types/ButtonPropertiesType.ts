import { PropertiesType } from './PropertiesType'

export interface ButtonPropertiesType extends PropertiesType {
  path: string
  loadingTime: number
  hideOnClick: boolean
  actionId: number
  successActionId: number
  errorActionId: number
  successMessageId: number
  errorMessageId: number
}
