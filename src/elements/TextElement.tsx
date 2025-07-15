import React from 'react'
import DOMPurify from 'dompurify'
import ElementColWrapper from './ElementColWrapper'

interface TextElementProps {
  id: string
  size: number
  properties: string
  [key: string]: any
}

interface TextProperties {
  text: string
  size: number
  style: {
    display?: string
    color?: string
    height?: string
    alignItems?: string
    textAlign?: string
    fontSize?: string
    fontWeight?: string
    marginTop?: string
    marginLeft?: string
    [key: string]: any
  }
  [key: string]: any
}

const TextElement: React.FC<{ element: TextElementProps }> = ({ element }) => {
  const properties: TextProperties = typeof element.properties === 'string'
    ? JSON.parse(element.properties)
    : element.properties
  const style = properties.style || {}

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