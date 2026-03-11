import { Row, Col } from 'react-bootstrap'
import { useKeenSlider } from 'keen-slider/react'
import { ElementFactory } from '../factories/ElementFactory'
import type { ComponentType } from '../types/ComponentType'

import 'keen-slider/keen-slider.min.css'

export function SliderComponent({ component }: { readonly component: ComponentType }) {
  const elementFactory = new ElementFactory()
  
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 10,
    },
  })

  return (
    <Col
      id="component-col"
      key={component.id}
      xs={{ span: component.properties.size.xs.span, offset: component.properties.size.xs.offset }}
      sm={{ span: component.properties.size.sm.span, offset: component.properties.size.sm.offset }}
      md={{ span: component.properties.size.md.span, offset: component.properties.size.md.offset }}
      lg={{ span: component.properties.size.lg.span, offset: component.properties.size.lg.offset }}
    >
      <Row id="element-row">
        <Col>
          <div ref={ref} className="keen-slider">
            {Object.entries(component.elements.content).map(([id, element]) => (
              <div key={id} className="keen-slider__slide">
                {elementFactory.build(element)}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Col>
  )
}
