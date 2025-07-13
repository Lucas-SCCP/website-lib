import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import ElementColWrapper from './ElementColWrapper';
import UseFormStore from '../stores/UseFormStore';

interface AlertElementProps {
  id: string;
  size: number;
  component_id: string;
  properties: string; // JSON string with properties
  [key: string]: any;
}

interface AlertProperties {
  style?: React.CSSProperties;
  variant?: string;
  title?: string;
  message?: string;
  visibilityAfter?: boolean;
  [key: string]: any;
}

const AlertElement: React.FC<{ element: AlertElementProps }> = ({ element }) => {
  const properties: AlertProperties = JSON.parse(element.properties);
  const style = properties.style;

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