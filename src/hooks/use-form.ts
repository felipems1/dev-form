import { FormContext } from '@/contexts/form-context'
import { useContext } from 'react'

export function useForm() {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro de um FormProvider')
  }

  return context
}
