import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import ElementColWrapper from './ElementColWrapper';
import InputMask from 'react-input-mask';
import UseFormStore from '../stores/UseFormStore';

interface InputElementProps {
  id: string;
  size: number;
  component_id: string;
  properties: string;
  [key: string]: any;
}

interface InputProperties {
  name: string;
  title?: string;
  style?: React.CSSProperties;
  validateType?: string;
  mask?: string;
  required?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const InputElement: React.FC<{ element: InputElementProps }> = ({ element }) => {
  const properties: InputProperties = JSON.parse(element.properties);
  const style = properties.style;

  const hidden = UseFormStore(state => state.elements[element.id]?.hidden);
  const error = UseFormStore(state => state.elements[element.id]?.error);
  const errorMessage = UseFormStore(state => state.elements[element.id]?.errorMessage);

  const registerElement = UseFormStore(state => state.registerElement);
  const validateFormData = UseFormStore(state => state.validateFormData);

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      name: properties.name,
      type: 'input',
      validationType: properties.validateType,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.id, element.component_id, properties.name, properties.validateType, registerElement]);

  if (hidden) return null;

  return (
    <ElementColWrapper element={element}>
      <Form.Group className="mb-3" controlId={properties.name}>
        <Form.Label>{properties.title}</Form.Label>
        <Form.Control
          as={InputMask}
          mask={properties.mask}
          onChange={e => UseFormStore.getState().setElementState(element.id, { value: e.target.value })}
          onBlur={e => validateFormData(properties.validateType, element.id, e.target.value)}
          required={properties.required}
          name={properties.name}
          placeholder={properties.placeholder}
          isInvalid={!!error}
          style={style}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>
    </ElementColWrapper>
  );
};

export default InputElement;