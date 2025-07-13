import React from 'react'
import ComponentType from '../constants/ComponentType'
import TextComponent from '../components/TextComponent'
import ListComponent from '../components/ListComponent'
import CarouselComponent from '../components/CarouselComponent'
import FormComponent from '../components/FormComponent'

export interface BaseComponentProps {
  id: string
  size: number
  elements: {
    content: Record<string, any>
  }
  component_type_id: number
  [key: string]: any
}

class ComponentFactory {
  static create(component: BaseComponentProps): React.ReactElement | null {
    switch (component.component_type_id) {
      case ComponentType.Text:
        return <TextComponent component={component} />
      case ComponentType.List:
        return <ListComponent component={component} />
      case ComponentType.Carousel:
        return <CarouselComponent component={component} />
      case ComponentType.Form:
        return <FormComponent component={component} />
      default:
        throw new Error('Invalid component type: ' + component.component_type_id)
    }
  }
}

export default ComponentFactory