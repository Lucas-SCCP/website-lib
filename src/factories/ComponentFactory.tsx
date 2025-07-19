import React from 'react'
import { ComponentType } from '../types/ComponentType'
import { ComponentEnum } from '../constants/ComponentEnum'
import TextComponent from '../components/TextComponent'
import ListComponent from '../components/ListComponent'
import CarouselComponent from '../components/CarouselComponent'
import FormComponent from '../components/FormComponent'

class ComponentFactory {
  static create(component: ComponentType): React.ReactElement | null {
    switch (component.component_type_id) {
      case ComponentEnum.Text:
        return <TextComponent component={component} />
      case ComponentEnum.List:
        return <ListComponent component={component} />
      case ComponentEnum.Carousel:
        return <CarouselComponent component={component} />
      case ComponentEnum.Form:
        return <FormComponent component={component} />
      default:
        throw new Error('Invalid component type: ' + component.component_type_id)
    }
  }
}

export default ComponentFactory