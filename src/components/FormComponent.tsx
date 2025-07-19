import React from 'react';
import { useEffect } from 'react';
import { Form, Row } from 'react-bootstrap';

import { ComponentType } from '../types/ComponentType';

import UseFormStore from '../stores/UseFormStore';

import { ConstructorService } from '../services/ConstructorService';

const FormComponent: React.FC<{ component: ComponentType}> = ({ component }) => {
  const constructorService = new ConstructorService();
  const registerForm = UseFormStore((state: any) => state.registerForm);

  useEffect(() => {
    registerForm(component.id);
  }, [registerForm, component.id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.log('SUBMIT');
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <Row className="form-contact">
        {Object.values(component.elements.content).map((content) => {
          const element = constructorService.createElement(content);
          return React.cloneElement(element, { key: content.id });
        })}
      </Row>
    </Form>
  );
};

export default FormComponent;