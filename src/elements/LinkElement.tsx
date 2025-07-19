import React from 'react';

import { ElementType } from '../types/ElementType';

import ElementColWrapper from './ElementColWrapper';

const LinkElement: React.FC<{ element: ElementType }> = ({ element }) => {
  const termoDeAdesao = ''
  return (
    <ElementColWrapper element={element}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={termoDeAdesao} target="_blank" rel="noopener noreferrer">
          {element.properties.href}
        </a>
      </div>
    </ElementColWrapper>
  );
};

export default LinkElement;