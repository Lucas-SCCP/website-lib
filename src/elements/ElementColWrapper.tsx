import { ReactNode } from 'react'
import { Col } from 'react-bootstrap'
import type { ElementType } from '../types/ElementType'

export function ElementColWrapper({ element, children }: { readonly element: ElementType; readonly children: ReactNode }) {
  return (
    <Col
      id="elementCol"
      key={element.id}
      xs={{ span: element.properties.size.xs.span, offset: element.properties.size.xs.offset }}
      sm={{ span: element.properties.size.sm.span, offset: element.properties.size.sm.offset }}
      md={{ span: element.properties.size.md.span, offset: element.properties.size.md.offset }}
      lg={{ span: element.properties.size.lg.span, offset: element.properties.size.lg.offset }}
    >
      {children}
    </Col>
  )
}
