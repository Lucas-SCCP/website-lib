import React from 'react';
import DOMPurify from 'dompurify';

import { ElementType } from '../types/ElementType';

import ElementColWrapper from './ElementColWrapper';

const FileElement: React.FC<{ element: ElementType }> = ({ element }) => {
  return (
    <ElementColWrapper element={element}>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(element.id.toString()) }}
      />
    </ElementColWrapper>
  );
};

export default FileElement;