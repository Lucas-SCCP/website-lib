export type Float = 'left' | 'right' | 'none' | 'inline-start' | 'inline-end'
export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'

export interface StylesType {
  backgroundColor?: string
  color?: string
  fontSize?: string
  textAlign?: TextAlign
  fontWeight?: string
  display?: string
  height?: string
  alignItems?: string
  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  float?: Float
}
