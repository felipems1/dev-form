'use client'

import { useForm } from '@/hooks/use-form'
import { FormActions } from '@/reducers/form-reducer'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect } from 'react'

export function FormStepOne() {
  const { state, dispatch } = useForm()
  const router = useRouter()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  }, [dispatch])

  const handleNextStep = () => {
    if (state.name !== '') {
      router.push('/step-two')
    } else {
      alert('Preencha os dados.')
    }
  }

  const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    })
  }

  return (
    <>
      <label className="text-sm">
        Seu nome completo
        <input
          type="text"
          value={state.name}
          onChange={handleInputNameChange}
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <button
        onClick={handleNextStep}
        className="mt-7 cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600"
      >
        Próximo
      </button>
    </>
  )
}
