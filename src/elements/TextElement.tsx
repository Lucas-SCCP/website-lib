import DOMPurify from 'dompurify'
import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { PropertiesType } from '../types/PropertiesType'

export function TextElement({ element }: { readonly element: ElementType }) {
  const properties: PropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const styles = element.styles

  return (
    <ElementColWrapper element={element}>
      <div
        style={{
          display: styles.display,
          color: styles.color,
          height: styles.height,
          alignItems: styles.alignItems,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          marginTop: styles.marginTop,
          marginBottom: styles.marginBottom,
          marginLeft: styles.marginLeft,
          float: styles.float,
          textAlign: styles.textAlign,
        }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(properties.title) }}
      />
    </ElementColWrapper>
  )
}
