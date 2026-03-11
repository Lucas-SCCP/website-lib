import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { ImagePropertiesType } from '../types/ImagePropertiesType'

export function ImageElement({ element }: { readonly element: ElementType }) {
  const properties: ImagePropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles
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
