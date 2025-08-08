import DOMPurify from 'dompurify'
import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { PropertiesType } from '../types/PropertiesType'
import type { StylesType } from '../types/StylesType'

export function TextElement({ element }: { readonly element: ElementType }) {
  const properties: PropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const styles = element.styles as StylesType

  return (
    <ElementColWrapper element={element}>
      <div
        style={styles}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(properties.title) }}
      />
    </ElementColWrapper>
  )
}
