import React, { Suspense } from 'react'
import { IconType } from 'react-icons'
import { ElementColWrapper } from './ElementColWrapper'
import type { ElementType } from '../types/ElementType'
import type { PropertiesType } from '../types/PropertiesType'

export function IconElement({ element }: { readonly element: ElementType }) {
  const properties: PropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const name = properties.name
  const style = element.styles as React.CSSProperties

  // Dynamic lazy import for react-icons/fa
  const LazyIcon = React.lazy<React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>>(() =>
    import('react-icons/fa').then((module) => {
      const Icon = module[name as keyof typeof module] as IconType | undefined
      if (!Icon) {
        throw new Error(`Icon '${name}' not found in pack`)
      }
      return { default: Icon }
    })
  )

  return (
    <ElementColWrapper element={element}>
      <Suspense fallback={null}>
        <LazyIcon size={20} className="texto-primaria" style={{ marginRight: '8px', ...style }} />
      </Suspense>
    </ElementColWrapper>
  )
}
