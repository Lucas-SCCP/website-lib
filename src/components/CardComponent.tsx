import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { ElementFactory } from '../factories/ElementFactory'
import type { ComponentType } from '../types/ComponentType'
import type { ElementType } from '../types/ElementType'

export function CardComponent({ component }: { readonly component: ComponentType }) {
  const elementFactory = new ElementFactory()

  return (
    <Col
      id="component-col"
      key={component.id}
      xs={{ span: component.properties.size.xs.span, offset: component.properties.size.xs.offset }}
      sm={{ span: component.properties.size.sm.span, offset: component.properties.size.sm.offset }}
      md={{ span: component.properties.size.md.span, offset: component.properties.size.md.offset }}
      lg={{ span: component.properties.size.lg.span, offset: component.properties.size.lg.offset }}
    >
      <Container>
        <Row id="element-row">
          {Object.values(component.elements.content).map((element: ElementType) => {
            const e = elementFactory.build(element)
            return React.cloneElement(e, { key: element.id })
          })}
        </Row>
      </Container>
    </Col>
  )
}
