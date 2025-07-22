import React from 'react'
import { useEffect } from 'react'
import { Form, Row } from 'react-bootstrap'
import { UseFormStore } from '../stores/UseFormStore'
import { ConstructorService } from '../services/ConstructorService'
import type { ComponentType } from '../types/ComponentType'

export function FormComponent({ component }: { component: ComponentType }) {
  const constructorService = new ConstructorService()
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
      <Row className="form-contact">
        {Object.values(component.elements.content).map((content) => {
          const element = constructorService.createElement(content)
          return React.cloneElement(element, { key: content.id })
        })}
      </Row>
    </Form>
  )
}
