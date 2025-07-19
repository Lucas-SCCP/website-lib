import React, { ReactNode } from 'react'
import { Col } from 'react-bootstrap'
import { ElementType } from '../types/ElementType'

const ElementColWrapper: React.FC<{ element: ElementType, children: ReactNode }> = ({ element, children }) => (
  <Col key={element.id} xs={12} md={12} lg={element.size}>
    {children}
  </Col>
)

export default ElementColWrapper