import { Col } from 'react-bootstrap'
import { ElementFactory } from '../factories/ElementFactory'
import { ElementEnum } from '../constants/ElementEnum'
import type { ComponentType } from '../types/ComponentType'

export function ListComponent({ component }: { readonly component: ComponentType }) {
  const elementFactory = new ElementFactory()

  const contents = Object.values(component.elements.content).sort((a, b) => a.sort - b.sort)

  const items = []
  for (let i = 0; i < contents.length; i++) {
    const current = contents[i]
    if (current.elementTypeId === ElementEnum.Icon) {
      const next = contents[i + 1]
      if (next?.elementTypeId === ElementEnum.Text) {
        items.push({ icon: current, text: next, id: current.id })
        i++
      } else {
        items.push({ icon: current, text: '', id: current.id })
      }
    }
  }

  return (
    <Col
      key={component.id}
      xs={{ span: component.properties.size.xs.span, offset: component.properties.size.xs.offset }}
      sm={{ span: component.properties.size.sm.span, offset: component.properties.size.sm.offset }}
      md={{ span: component.properties.size.md.span, offset: component.properties.size.md.offset }}
      lg={{ span: component.properties.size.lg.span, offset: component.properties.size.lg.offset }}
      style={component.styles}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(({ icon, text, id }) => (
          <li
            key={id}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}
          >
            <span>{elementFactory.build(icon)}</span>
            <span style={{ fontSize: '22px' }}>{elementFactory.build(text)}</span>
          </li>
        ))}
      </ul>
    </Col>
  )
}
