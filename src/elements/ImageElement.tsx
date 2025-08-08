import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { ImagePropertiesType } from '../types/ImagePropertiesType'
import type { StylesType } from '../types/StylesType'

export function ImageElement({ element }: { readonly element: ElementType }) {
  const properties: ImagePropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles as StylesType
  return (
    <ElementColWrapper element={element}>
      <img
        src={properties.path}
        alt={properties.title ?? ''}
        style={style}
      />
    </ElementColWrapper>
  )
}
