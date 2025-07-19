import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

import { ElementType } from '../types/ElementType';
import { PropertyType } from '../types/PropertyType';

import UseFormStore from '../stores/UseFormStore';

import ElementColWrapper from './ElementColWrapper';

const AlertElement: React.FC<{ element: ElementType }> = ({ element }) => {
  const properties: PropertyType = typeof element.properties === 'string'
    ? JSON.parse(element.properties)
    : element.properties
  const style = properties.style as React.CSSProperties;

  const hidden = UseFormStore(state => state.elements[element.id]?.hidden);

  const registerElement = UseFormStore(state => state.registerElement);

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      type: 'alert',
      hidden: properties.visibilityAfter
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.id, element.component_id, element.properties, registerElement]);

  if (hidden) return null;

  return (
    <ElementColWrapper element={element}>
      <Alert hidden={hidden} variant={properties.variant} className="text-center" style={style}>
        <Alert.Heading>{properties.title}</Alert.Heading>
        <p className="mb-0">
          {properties.message}
        </p>
      </Alert>
    </ElementColWrapper>
  );
};

export default AlertElement;