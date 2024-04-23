'use client'

import { SelectOption } from '@/components/select-option'
import { useForm } from '@/hooks/use-form'
import { FormActions } from '@/reducers/form-reducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect } from 'react'

export function FormStepTwo() {
  const { state, dispatch } = useForm()
  const router = useRouter()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    })
  }, [dispatch])

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault()

    if (state.level !== null) {
      router.push('step-three')
    } else {
      alert('Preencha os dados.')
    }
  }

  const handleChangeLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    })
  }

  return (
    <form onSubmit={handleNextStep}>
      <SelectOption
        title="Sou iniciante"
        description="Comecei a programar há menos de 2 anos"
        icon="🥳"
        selected={state.level === 0}
        handleSelectOption={() => handleChangeLevel(0)}
      />

      <SelectOption
        title="Sou programador"
        description="Já programo há 2 anos ou mais"
        icon="😎"
        selected={state.level === 1}
        handleSelectOption={() => handleChangeLevel(1)}
      />

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="cursor-pointer rounded-lg border-0 bg-red-600 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-red-700"
        >
          Voltar
        </Link>

        <button
          type="submit"
          className="cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600"
        >
          Próximo
        </button>
      </div>
    </form>
  )
}
