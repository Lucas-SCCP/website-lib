import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ConstructorService } from '../services/ConstructorService'
import type { ComponentType } from '../types/ComponentType'
import type { ElementType } from '../types/ElementType'

export function TextComponent({ component }: { component: ComponentType }) {
  const constructorService = new ConstructorService()

  return (
    <Col key={component.id} xs={12} md={12} lg={component.size}>
      <Row id="element">
        {Object.values(component.elements.content).map((element: ElementType) => {
          const e = constructorService.createElement(element)
          return React.cloneElement(e, { key: element.id })
        })}
      </Row>
    </Col>
  )
}
