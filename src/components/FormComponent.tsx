import { useEffect } from 'react';
import { Form, Row } from 'react-bootstrap';

import UseFormStore from '../stores/UseFormStore';

import { CreateElement } from '../services/ConstructorService';

interface ElementContent {
  // Extend this with more properties as needed for your form elements
  id: string | number;
  [key: string]: any;
}

interface FormComponentProps {
  component: {
    id: string;
    size: number;
    elements: {
      content: Record<string, any>;
    };
  };
}

const FormComponent: React.FC<FormComponentProps> = ({ component }) => {
  const registerForm = UseFormStore((state: any) => state.registerForm);

  useEffect(() => {
    registerForm(component.id);
  }, [registerForm, component.id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.log('SUBMIT');
      // You can add more submit logic here
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <Row className="form-contact">
        {Object.values(component.elements.content).map((content) =>
          CreateElement(content)
        )}
      </Row>
    </Form>
  );
};

export default FormComponent;