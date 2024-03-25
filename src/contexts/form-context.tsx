'use client'

import { FormAction, FormState, formReducer } from '@/reducers/form-reducer'
import { ReactNode, createContext, useReducer } from 'react'

interface FormContextType {
  state: FormState
  dispatch: (action: FormAction) => void
}

interface FormProviderType {
  children: ReactNode
}

export const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: FormProviderType) {
  const initialState: FormState = {
    currentStep: 0,
    level: null,
    email: '',
    github: '',
    name: '',
  }

  const [state, dispatch] = useReducer(formReducer, initialState)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
