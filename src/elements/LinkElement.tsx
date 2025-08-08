import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { LinkPropertiesType } from '../types/LinkPropertiesType'
import type { StylesType } from '../types/StylesType'

export function LinkElement({ element }: { readonly element: ElementType }) {
  const properties: LinkPropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles as StylesType

  return (
    <ElementColWrapper element={element}>
      <div style={style}>
        <a href={properties.path} target="_blank" rel="noopener noreferrer">
          {properties.title}
        </a>
      </div>
    </ElementColWrapper>
  )
}
