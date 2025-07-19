import type { StyleType } from "./StyleType"

export interface PropertyType {
  title: string,
  name: string,
  text: string,
  placeholder: string,
  type?: string,
  validateType?: string,
  loadingMessage?: string,
  action?: string,
  successMessageId?: number,
  successActionId?: number,
  href?: string,
  message?: string,
  variant?: string,
  visibilityAfter?: boolean,
  hideButtonAfter?: boolean,
  loadingTime?: number,
  mask: string,
  required?: boolean,
  style: StyleType
}