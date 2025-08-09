import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ConstructorService } from '../services/ConstructorService'
import type { ComponentType } from '../types/ComponentType'
import type { ElementType } from '../types/ElementType'

export function TextComponent({ component }: { readonly component: ComponentType }) {
  const constructorService = new ConstructorService()

  return (
    <Col
      id="componentCol"
      key={component.id}
      xs={{ span: component.properties.size.xs.span, offset: component.properties.size.xs.offset }}
      sm={{ span: component.properties.size.sm.span, offset: component.properties.size.sm.offset }}
      md={{ span: component.properties.size.md.span, offset: component.properties.size.md.offset }}
      lg={{ span: component.properties.size.lg.span, offset: component.properties.size.lg.offset }}
    >
      <Row id="elementRow">
        {Object.values(component.elements.content).map((element: ElementType) => {
          const e = constructorService.createElement(element)
          return React.cloneElement(e, { key: element.id })
        })}
      </Row>
    </Col>
  )
}
