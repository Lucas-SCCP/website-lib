import DOMPurify from 'dompurify'
import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { PropertiesType } from '../types/PropertiesType'

export function TextElement({ element }: { readonly element: ElementType }) {
  const properties: PropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles

  return (
    <ElementColWrapper element={element}>
      <div
        style={{
          display: style.display,
          color: style.color,
          height: style.height,
          alignItems: style.alignItems,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          marginTop: style.marginTop,
          marginLeft: style.marginLeft
        }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(properties.title) }}
      />
    </ElementColWrapper>
  )
}
