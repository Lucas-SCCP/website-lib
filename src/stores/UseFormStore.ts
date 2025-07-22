import { create } from 'zustand'
import { InputValidateFactory } from '../factories/InputValidateFactory'

export interface FormElement {
  id: number
  name: string | null
  type: string | null
  formId: number | null
  value: string
  loading: boolean
  hidden: boolean
  error: boolean
  errorMessage: string | null
  inputValidateId: number | null
  [key: string]: string | number | boolean | null
}

export interface FormEntry {
  elements: string[]
  [key: string]: string[] | null
}

export interface FormStoreState {
  forms: Record<string, FormEntry>
  elements: Record<string, FormElement>

  registerForm: (formId: number) => void
  registerElement: (elementId: number, formId?: number | null, initialState?: Partial<FormElement>) => void
  validateFormData: (inputValidateId: number, elementId: number, value: string) => void
  validateAllFields: (formId: number) => void
  setElementState: (elementId: number, newState: Partial<FormElement>) => void
  getElementsByForm: (formId: number) => FormElement[]
  showElement: (id: number) => void
  hideElement: (id: number) => void
  setLoading: (id: number, loading: boolean) => void
}

const UseFormStore = create<FormStoreState>((set, get) => ({
  forms: {},
  elements: {},

  registerForm: (formId: number) =>
    set((state) => ({
      forms: {
        ...state.forms,
        [formId]: state.forms[formId] || { elements: [] }
      }
    })),

  registerElement: (elementId: number, formId: number | null = null, initialState: Partial<FormElement> = {}) =>
    set((state) => {
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
          inputValidateId: null,
          ...initialState
        }
      }

      const newForms = { ...state.forms }

      if (formId) {
        const existingForm = state.forms[formId] || { elements: [] }

        const alreadyIncluded = existingForm.elements.includes(elementId.toString())
        const updateElements = alreadyIncluded
          ? existingForm.elements
          : [...existingForm.elements, elementId.toString()]

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

  validateFormData: (inputValidateId: number, elementId: number, value: string) => {
    const inputValidateFactory = new InputValidateFactory()
    const validation = inputValidateFactory.build(inputValidateId, value)

    get().setElementState(elementId, {
      error: !validation.success,
      errorMessage: validation.message
    })
  },

  validateAllFields: (formId: number) => {
    const elements = get().getElementsByForm(formId)

    elements.forEach((element) => {
      if (element.inputValidateId) {
        get().validateFormData(element.inputValidateId, element.id, element.value)
      }
    })
  },

  setElementState: (elementId: number, newState: Partial<FormElement>) =>
    set((state) => ({
      elements: {
        ...state.elements,
        [elementId]: {
          ...state.elements[elementId],
          ...newState
        }
      }
    })),

  getElementsByForm: (formId: number): FormElement[] =>
    get().forms[formId]?.elements.map((id) => get().elements[id]) || [],

  showElement: (id: number) => get().setElementState(id, { hidden: false }),
  hideElement: (id: number) => get().setElementState(id, { hidden: true }),
  setLoading: (id: number, loading: boolean) => get().setElementState(id, { loading })
}))

export { UseFormStore }
