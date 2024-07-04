'use client'

import { useForm } from '@/hooks/use-form'
import { FormActions } from '@/reducers/form-reducer'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'

export function FormStepOne() {
  const [name, setName] = useState('')
  const { dispatch } = useForm()
  const router = useRouter()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  }, [dispatch])

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault()

    if (name !== '') {
      dispatch({
        type: FormActions.setName,
        payload: name,
      })
      router.push('/step-two')
    } else {
      toast.info('Preencha os dados.', {
        position: 'top-right',
        duration: 1500,
      })
    }
  }

  return (
    <form onSubmit={handleNextStep}>
      <label className="text-sm">
        Seu nome completo
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-7 cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600"
      >
        Próximo
      </button>
    </form>
  )
}
