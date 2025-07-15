import React, { Suspense } from 'react';
import ElementColWrapper from './ElementColWrapper';
import { IconType } from 'react-icons';

interface IconElementProps {
  id: string
  size: number
  properties: string;
  [key: string]: any;
}

interface IconProperties {
  name: string;
  style?: React.CSSProperties;
}

const IconElement: React.FC<{ element: IconElementProps }> = ({ element }) => {
  const properties: IconProperties = typeof element.properties === 'string'
    ? JSON.parse(element.properties)
    : element.properties
  const { name, style } = properties;

  const elementWithRequiredProps = {
    ...element,
    id: element.id ?? 'icon-element',
    size: element.size ?? 1,
  };

  // Dynamic lazy import for react-icons/fa
  const LazyIcon = React.lazy<React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>>(
    () =>
      import('react-icons/fa').then((module) => {
        const Icon = module[name as keyof typeof module] as IconType | undefined;
        if (!Icon) {
          throw new Error(`Icon '${name}' not found in pack`);
        }
        return { default: Icon };
      })
  );

  return (
    <ElementColWrapper element={elementWithRequiredProps}>
      <Suspense fallback={null}>
        <LazyIcon size={20} className="texto-primaria" style={{ marginRight: '8px', ...style }} />
      </Suspense>
    </ElementColWrapper>
  );
};

export default IconElement;