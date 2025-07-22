import { useEffect, MouseEvent } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { ElementColWrapper } from './ElementColWrapper'
import { UseFormStore } from '../stores/UseFormStore'
import { ButtonActionFactory } from '../factories/ButtonActionFactory'
import type { ElementType } from '../types/ElementType'
import type { ButtonPropertiesType } from '../types/ButtonPropertiesType'

export function ButtonElement({ element }: { readonly element: ElementType }) {
  const properties: ButtonPropertiesType =
    typeof element.properties === 'string' ? JSON.parse(element.properties) : element.properties
  const style = element.styles as React.CSSProperties

  const hidden = UseFormStore((state) => state.elements[element.id]?.hidden)
  const loading = UseFormStore((state) => state.elements[element.id]?.loading)

  const showElement = UseFormStore((state) => state.showElement)
  const hideElement = UseFormStore((state) => state.hideElement)
  const registerElement = UseFormStore((state) => state.registerElement)

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      type: 'button'
      // hidden: properties.visibilityAfter
    })
  }, [element.id, element.component_id, element.properties, registerElement])

  async function handleClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    if (!properties.path) {
      event.preventDefault()

      UseFormStore.getState().validateAllFields(element.component_id)

      const formData = UseFormStore.getState().getElementsByForm(element.component_id)
      const hasErrors = formData.some((e) => e.error)

      if (hasErrors) {
        return false
      }

      UseFormStore.getState().setElementState(element.id, { loading: true })

      if (properties.successActionId) {
        const buttonActionFactory = new ButtonActionFactory()
        await buttonActionFactory.build(properties.successActionId, formData)
      }

      setTimeout(() => {
        // @TODO - criar funcao que verifica se o id do botao esta como successActionId ou errorActionId de outro para esconde-lo ao iniciar
        // if (properties.hideButtonAfter) {
        //   hideElement(element.id);
        // }

        if (properties.successMessageId) {
          showElement(properties.successMessageId)
        }

        if (properties.successActionId) {
          showElement(properties.successActionId)
        }

        UseFormStore.getState().setElementState(element.id, { loading: false })
      }, properties.loadingTime ?? 0)
    }
  }

  if (hidden) return null

  return (
    <ElementColWrapper element={element}>
      <Button
        as={properties.path ? 'a' : 'button'}
        type={
          properties.type === 'button' || properties.type === 'submit' || properties.type === 'reset'
            ? properties.type
            : undefined
        }
        variant={properties.type}
        href={properties.path}
        target={properties.path ? '_blank' : undefined}
        rel={properties.path ? 'noopener noreferrer' : undefined}
        disabled={loading}
        onClick={handleClick}
        className="cor-primaria"
        style={{ width: '100%', marginBottom: '10px', ...style }}
      >
        {loading ? (
          <>
            <output aria-busy="true">
              <Spinner as="span" animation="border" size="sm" aria-hidden="true" />
            </output>
            {' ' + (properties.message ?? '')}
          </>
        ) : (
          properties.title
        )}
      </Button>
    </ElementColWrapper>
  )
}
