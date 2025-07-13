import { create } from 'zustand'
import InputValidateFactory from '../factories/InputValidateFactory'

export interface FormElement {
  id: string
  name: string | null
  type: string | null
  formId: string | null
  value: any
  loading: boolean
  hidden: boolean
  error: boolean
  errorMessage: string | null
  validationType: string | null
  // Add additional fields if needed for initialState merging
  [key: string]: any
}

export interface FormEntry {
  elements: string[]
  [key: string]: any
}

export interface FormStoreState {
  forms: Record<string, FormEntry>
  elements: Record<string, FormElement>

  registerForm: (formId: string) => void
  registerElement: (elementId: string, formId?: string | null, initialState?: Partial<FormElement>) => void
  validateFormData: (type: string, elementId: string, value: any) => void
  validateAllFields: (formId: string) => void
  setElementState: (elementId: string, newState: Partial<FormElement>) => void
  getElementsByForm: (formId: string) => FormElement[]
  showElement: (id: string) => void
  hideElement: (id: string) => void
  setLoading: (id: string, loading: boolean) => void
}

const UseFormStore = create<FormStoreState>((set, get) => ({
  forms: {},
  elements: {},

  registerForm: (formId: string) =>
    set(state => ({
      forms: {
        ...state.forms,
        [formId]: state.forms[formId] || { elements: [] }
      }
    })),

  registerElement: (elementId: string, formId: string | null = null, initialState: Partial<FormElement> = {}) =>
    set(state => {
      if (state.elements[elementId]) return {}

      const newElements = {
        ...state.elements,
        [elementId]: {
          id: elementId,
          name: null,
          type: null,
          formId,
          value: null,
          loading: false,
          hidden: false,
          error: false,
          errorMessage: null,
          validationType: null,
          ...initialState
        }
      }

      let newForms = { ...state.forms }

      if (formId) {
        const existingForm = state.forms[formId] || { elements: [] }

        const alreadyIncluded = existingForm.elements.includes(elementId)
        const updateElements = alreadyIncluded
          ? existingForm.elements
          : [...existingForm.elements, elementId]

        newForms[formId] = {
          ...existingForm,
          elements: updateElements
        }
      }

      return {
        elements: newElements,
        forms: newForms
      }
    }),

  validateFormData: (type: string, elementId: string, value: any) => {
    const validation = InputValidateFactory.factory(type, value)

    get().setElementState(elementId, {
      error: !validation.success,
      errorMessage: validation.message
    })
  },

  validateAllFields: (formId: string) => {
    const elements = get().getElementsByForm(formId)

    elements.forEach(element => {
      if (element.validationType) {
        get().validateFormData(element.validationType, element.id, element.value)
      }
    })
  },

  setElementState: (elementId: string, newState: Partial<FormElement>) =>
    set(state => ({
      elements: {
        ...state.elements,
        [elementId]: {
          ...state.elements[elementId],
          ...newState
        }
      }
    })),

  getElementsByForm: (formId: string): FormElement[] =>
    get().forms[formId]?.elements.map(id => get().elements[id]) || [],

  showElement: (id: string) => get().setElementState(id, { hidden: false }),
  hideElement: (id: string) => get().setElementState(id, { hidden: true }),
  setLoading: (id: string, loading: boolean) => get().setElementState(id, { loading })
}))

export default UseFormStore