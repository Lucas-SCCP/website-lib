import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { ImagePropertiesType } from '../types/ImagePropertiesType'

export function ImageElement({ element }: { readonly element: ElementType }) {
  const properties: ImagePropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  return (
    <ElementColWrapper element={element}>
      <img
        src={properties.path}
        alt={properties.title ?? ''}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
      />
    </ElementColWrapper>
  )
}
