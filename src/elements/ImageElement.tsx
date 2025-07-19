import React from 'react';

import { ElementType } from '../types/ElementType';

import ElementColWrapper from './ElementColWrapper';

const ImageElement: React.FC<{element: ElementType}> = ({ element }) => {
  return (
    <ElementColWrapper element={element}>
      <img
        src={element.properties.href}
        alt={element.properties.title ?? ''}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
      />
    </ElementColWrapper>
  );
};

export default ImageElement;