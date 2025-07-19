import React from 'react'
import DOMPurify from 'dompurify'

import { ElementType } from '../types/ElementType'
import { PropertyType } from '../types/PropertyType'
import { StyleType } from '../types/StyleType'

import ElementColWrapper from './ElementColWrapper'

const TextElement: React.FC<{ element: ElementType }> = ({ element }) => {
  const properties: PropertyType = typeof element.properties === 'string'
    ? JSON.parse(element.properties)
    : element.properties
  const style = properties.style as StyleType

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
          marginLeft: style.marginLeft,
        }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(properties.text) }}
      />
    </ElementColWrapper>
  )
}

export default TextElement