import React from 'react'
import { ElementEnum } from '../constants/ElementEnum'
import { TextElement } from '../elements/TextElement'
import { ImageElement } from '../elements/ImageElement'
import { InputElement } from '../elements/InputElement'
import { IconElement } from '../elements/IconElement'
import { ButtonElement } from '../elements/ButtonElement'
import { FileElement } from '../elements/FileElement'
import { AlertElement } from '../elements/AlertElement'
import { LinkElement } from '../elements/LinkElement'
import type { ElementType } from '../types/ElementType'

export class ElementFactory {
  build(element: ElementType): React.ReactElement | null {
    switch (element.element_type_id) {
      case ElementEnum.Text:
        return <TextElement element={element} />
      case ElementEnum.Image:
        return <ImageElement element={element} />
      case ElementEnum.Input:
        return <InputElement element={element} />
      case ElementEnum.Icon:
        return <IconElement element={element} />
      case ElementEnum.Button:
        return <ButtonElement element={element} />
      case ElementEnum.File:
        return <FileElement element={element} />
      case ElementEnum.Alert:
        return <AlertElement element={element} />
      case ElementEnum.Link:
        return <LinkElement element={element} />
      default:
        throw new Error('Invalid element type: ' + element.element_type_id)
    }
  }
}