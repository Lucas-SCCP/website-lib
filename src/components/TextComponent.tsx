import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ComponentType } from '../types/ComponentType';

import { ConstructorService } from '../services/ConstructorService';

export const TextComponent: React.FC<{ component: ComponentType}> = ({ component }) => {
  const constructorService = new ConstructorService();

  return (
    <Col key={component.id} xs={12} md={12} lg={component.size}>
      <Row id="element">
        {Object.values(component.elements.content).map((content: any) => {
          const element = constructorService.createElement(content)
          return React.cloneElement(element, { key: content.id });
        })}
      </Row>
    </Col>
  )
};

export default TextComponent;