import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { ElementColWrapper } from './ElementColWrapper'
import { UseFormStore } from '../stores/UseFormStore'
import type { ElementType } from '../types/ElementType'
import type { InputPropertiesType } from '../types/InputPropertiesType'
import type { StylesType } from '../types/StylesType'

export function InputElement({ element }: { readonly element: ElementType }) {
  const properties: InputPropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles as StylesType

  const hidden = UseFormStore((state) => state.elements[element.id]?.hidden)
  const error = UseFormStore((state) => state.elements[element.id]?.error)
  const errorMessage = UseFormStore((state) => state.elements[element.id]?.errorMessage)

  const registerElement = UseFormStore((state) => state.registerElement)
  const validateFormData = UseFormStore((state) => state.validateFormData)

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      name: properties.name,
      type: 'input',
      inputValidateId: properties.inputValidateId
    })
  }, [element.id, element.component_id, properties.name, properties.inputValidateId, registerElement])

  if (hidden) return null

  return (
    <ElementColWrapper element={element}>
      <Form.Group className="mb-3" controlId={properties.name}>
        <Form.Label>{properties.title}</Form.Label>
        <Form.Control
          as={InputMask}
          mask={properties.mask}
          onChange={(e) => UseFormStore.getState().setElementState(element.id, { value: e.target.value })}
          onBlur={(e) => validateFormData(properties.inputValidateId, element.id, e.target.value)}
          required={properties.required}
          name={properties.name}
          placeholder={properties.placeholder}
          isInvalid={!!error}
          style={style}
        />
        <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
      </Form.Group>
    </ElementColWrapper>
  )
}
