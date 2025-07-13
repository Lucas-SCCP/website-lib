import React from 'react';
import ElementColWrapper from './ElementColWrapper';

interface LinkElementProps {
  id: string | number;
  size: number;
  content: string;
  [key: string]: any;
}

const LinkElement: React.FC<{ element: LinkElementProps }> = ({ element }) => {
  const termoDeAdesao = ''
  return (
    <ElementColWrapper element={element}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={termoDeAdesao} target="_blank" rel="noopener noreferrer">
          {element.content}
        </a>
      </div>
    </ElementColWrapper>
  );
};

export default LinkElement;