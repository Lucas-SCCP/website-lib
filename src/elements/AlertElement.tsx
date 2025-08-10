import { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { UseFormStore } from '../stores/UseFormStore'
import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { PropertiesType } from '../types/PropertiesType'
import type { StylesType } from '../types/StylesType'

export function AlertElement({ element }: { readonly element: ElementType }) {
  const properties: PropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles as StylesType

  const hidden = UseFormStore((state) => state.elements[element.id]?.hidden)

  const registerElement = UseFormStore((state) => state.registerElement)

  useEffect(() => {
    registerElement(element.id, element.componentId, {
      type: 'alert',
      hidden: properties.startHidden
    })
  }, [element.id, element.componentId, element.properties, properties.startHidden, registerElement])

  if (hidden) return null

  return (
    <ElementColWrapper element={element}>
      <Alert hidden={hidden} variant={properties.type} style={style}>
        <Alert.Heading>{properties.title}</Alert.Heading>
        <p className="mb-0">{properties.message}</p>
      </Alert>
    </ElementColWrapper>
  )
}
