import { ElementColWrapper } from './ElementColWrapper';
import type { ElementType } from '../types/ElementType';
import type { LinkPropertiesType } from '../types/LinkPropertiesType';

export function LinkElement({ element }: { element: ElementType }) {
  const properties: LinkPropertiesType = typeof element.properties === 'string'
      ? JSON.parse(element.properties)
      : element.properties
  const termoDeAdesao = ''

  return (
    <ElementColWrapper element={element}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={termoDeAdesao} target="_blank" rel="noopener noreferrer">
          {properties.path}
        </a>
      </div>
    </ElementColWrapper>
  )
}