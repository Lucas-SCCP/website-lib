import DOMPurify from 'dompurify'
import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'

export function FileElement({ element }: { element: ElementType }) {
  return (
    <ElementColWrapper element={element}>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(element.id.toString()) }} />
    </ElementColWrapper>
  )
}
