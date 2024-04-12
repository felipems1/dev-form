'use client'

import { useForm } from '@/hooks/use-form'
import { FormActions } from '@/reducers/form-reducer'

export function useFinishStep() {
  const { dispatch } = useForm()

  const finishStep = () => {
    dispatch({ type: FormActions.setName, payload: '' })
    dispatch({ type: FormActions.setEmail, payload: '' })
    dispatch({ type: FormActions.setGithub, payload: '' })
    dispatch({ type: FormActions.setLevel, payload: null })
  }

  return finishStep
}
