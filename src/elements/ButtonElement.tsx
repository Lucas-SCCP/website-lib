import { useEffect, MouseEvent } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import ElementColWrapper from './ElementColWrapper';
import UseFormStore from '../stores/UseFormStore';

import ButtonActionFactory from '../factories/ButtonActionFactory';

interface ButtonElementProps {
  id: string;
  size: number;
  component_id: string;
  properties: string; // JSON string
  [key: string]: any;
}

interface ButtonProperties {
  style?: React.CSSProperties;
  type?: string;
  variant?: string;
  href?: string;
  loadingMessage?: string;
  loadingTime?: number; // ms
  title?: string;
  hideButtonAfter?: boolean;
  successMessageId?: string;
  successActionId?: string;
  visibilityAfter?: boolean;
  action?: string;
  [key: string]: any;
}

const ButtonElement: React.FC<{ element: ButtonElementProps }> = ({ element }) => {
  const properties: ButtonProperties = typeof element.properties === 'string'
    ? JSON.parse(element.properties)
    : element.properties
  const style = properties.style;

  const hidden = UseFormStore(state => state.elements[element.id]?.hidden);
  const loading = UseFormStore(state => state.elements[element.id]?.loading);

  const showElement = UseFormStore(state => state.showElement);
  const hideElement = UseFormStore(state => state.hideElement);
  const registerElement = UseFormStore(state => state.registerElement);

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      type: 'button',
      hidden: properties.visibilityAfter
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.id, element.component_id, element.properties, registerElement]);

  async function handleClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    if (!properties.href) {
      event.preventDefault();

      UseFormStore.getState().validateAllFields(element.component_id);

      const formData = UseFormStore.getState().getElementsByForm(element.component_id);
      const hasErrors = formData.some(e => e.error);

      if (hasErrors) {
        return false;
      }

      UseFormStore.getState().setElementState(element.id, { loading: true });

      if (properties.action) {
        await ButtonActionFactory.create(properties.action, formData);
      }

      setTimeout(() => {
        if (properties.hideButtonAfter) {
          hideElement(element.id);
        }

        if (properties.successMessageId) {
          showElement(properties.successMessageId);
        }

        if (properties.successActionId) {
          showElement(properties.successActionId);
        }

        UseFormStore.getState().setElementState(element.id, { loading: false });
      }, properties.loadingTime ?? 0);
    }
  }

  if (hidden) return null;

  return (
    <ElementColWrapper element={element}>
      <Button
        as={properties.href ? 'a' : 'button'}
        type={
          properties.type === "button" ||
          properties.type === "submit" ||
          properties.type === "reset"
            ? properties.type
            : undefined
        }
        variant={properties.variant}
        href={properties.href}
        target={properties.href ? '_blank' : undefined}
        rel={properties.href ? 'noopener noreferrer' : undefined}
        disabled={loading}
        onClick={handleClick}
        className="cor-primaria"
        style={{ width: '100%', marginBottom: '10px', ...style }}
      >
        {loading ? (
          <>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            {' ' + (properties.loadingMessage ?? '')}
          </>
        ) : (
          properties.title
        )}
      </Button>
    </ElementColWrapper>
  );
};

export default ButtonElement;