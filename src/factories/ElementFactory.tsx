import React from 'react'
import ElementType from '../constants/ElementType'
import TextElement from '../elements/TextElement'
import ImageElement from '../elements/ImageElement'
import InputElement from '../elements/InputElement'
import IconElement from '../elements/IconElement'
import ButtonElement from '../elements/ButtonElement'
import FileElement from '../elements/FileElement'
import AlertElement from '../elements/AlertElement'
import LinkElement from '../elements/LinkElement'

export interface BaseElementProps {
  id: string
  size: number
  content: string
  element_type_id: number
  properties: string
  component_id: string
  [key: string]: any
}

class ElementFactory {
  static create(element: BaseElementProps): React.ReactElement | null {
    switch (element.element_type_id) {
      case ElementType.Text:
        return <TextElement element={element} />
      case ElementType.Image:
        return <ImageElement element={element} />
      case ElementType.Input:
        return <InputElement element={element} />
      case ElementType.Icon:
        return <IconElement element={element} />
      case ElementType.Button:
        return <ButtonElement element={element} />
      case ElementType.File:
        return <FileElement element={element} />
      case ElementType.Alert:
        return <AlertElement element={element} />
      case ElementType.Link:
        return <LinkElement element={element} />
      default:
        throw new Error('Invalid element type: ' + element.element_type_id)
    }
  }
}

export default ElementFactory