import React, { ReactNode } from 'react'
import { Col } from 'react-bootstrap'

export interface ElementColWrapperProps {
  element: {
    id: number | string
    size: number
    [key: string]: any
  }
  children: ReactNode
}

const ElementColWrapper: React.FC<ElementColWrapperProps> = ({ element, children }) => (
  <Col key={element.id} xs={12} md={12} lg={element.size}>
    {children}
  </Col>
)

export default ElementColWrapper