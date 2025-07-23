import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { LinkPropertiesType } from '../types/LinkPropertiesType'

export function LinkElement({ element }: { readonly element: ElementType }) {
  const properties: LinkPropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties

  return (
    <ElementColWrapper element={element}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={properties.path} target="_blank" rel="noopener noreferrer">
          {properties.title}
        </a>
      </div>
    </ElementColWrapper>
  )
}
