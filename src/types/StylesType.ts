export type Float = 'left' | 'right' | 'none' | 'inline-start' | 'inline-end'
export type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'
export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

export interface StylesType {
  alignItems?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: string
  backgroundPosition?: string
  borderColor?: string
  borderRadius?: string
  borderStyle?: string
  borderWidth?: string
  color?: string
  display?: string
  float?: Float
  fontSize?: string
  fontWeight?: FontWeight
  height?: string
  marginTop?: string
  marginLeft?: string
  marginRight?: string
  marginBottom?: string
  objectFit?: ObjectFit
  paddingTop?: string
  paddingLeft?: string
  paddingRight?: string
  paddingBottom?: string
  textAlign?: TextAlign
  width?: string
}
