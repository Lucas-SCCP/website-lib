import React from 'react';
import ElementColWrapper from './ElementColWrapper';

interface ImageElementProps {
  id: string | number;
  size: number;
  content: string;
  title?: string;
  [key: string]: any;
}

const ImageElement: React.FC<{element: ImageElementProps}> = ({ element }) => {
  return (
    <ElementColWrapper element={element}>
      <img
        src={element.content}
        alt={element.title ?? ''}
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