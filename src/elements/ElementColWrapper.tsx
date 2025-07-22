import { ReactNode } from 'react'
import { Col } from 'react-bootstrap'
import type { ElementType } from '../types/ElementType'

export function ElementColWrapper({ element, children }: { element: ElementType, children: ReactNode }) {
  return (
    <Col key={element.id} xs={12} md={12} lg={element.size}>
      {children}
    </Col>
  )
}