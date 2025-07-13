import React from 'react';
import ElementColWrapper from './ElementColWrapper';
import DOMPurify from 'dompurify';

interface FileElementProps {
  id: string;
  content: string;
  size: number;
  [key: string]: any;
}

const FileElement: React.FC<{ element: FileElementProps }> = ({ element }) => {
  return (
    <ElementColWrapper element={element}>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(element.content) }}
      />
    </ElementColWrapper>
  );
};

export default FileElement;