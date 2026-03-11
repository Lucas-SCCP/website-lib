import React, { useEffect } from 'react'
import { Form, Row } from 'react-bootstrap'
import { UseFormStore } from '../stores/UseFormStore'
import { ElementFactory } from '../factories/ElementFactory'
import type { ComponentType } from '../types/ComponentType'

export function FormComponent({ component }: { readonly component: ComponentType }) {
  const elementFactory = new ElementFactory()
  const registerForm = UseFormStore((state) => state.registerForm)

  useEffect(() => {
    registerForm(component.id)
  }, [registerForm, component.id])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      console.log('SUBMIT')
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
    }
  }

  return (
    <Form noValidate onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <Row style={{ padding: '50px' }}>
        {Object.values(component.elements.content).map((content) => {
          const element = elementFactory.build(content)
          return React.cloneElement(element, { key: content.id })
        })}
      </Row>
    </Form>
  )
}
