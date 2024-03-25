'use client'

import { useForm } from '@/hooks/use-form'
import { FormActions } from '@/reducers/form-reducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect } from 'react'

export function FormStepThree() {
  const { state, dispatch } = useForm()
  const router = useRouter()

  useEffect(() => {
    if (state.name === '') {
      router.push('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      })
    }
  }, [dispatch, router, state.name])

  const handleInputGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    })
  }

  const handleInputEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    })
  }

  const handleFinishStep = () => {
    if (state.email !== '' && state.github !== '') {
      router.push('/')
      alert('Cadastro finalizado!')
      dispatch({
        type: FormActions.setName,
        payload: '',
      })
      dispatch({
        type: FormActions.setEmail,
        payload: '',
      })
      dispatch({
        type: FormActions.setGithub,
        payload: '',
      })
    } else {
      alert('Preencha os dados.')
    }
  }

  return (
    <>
      <label className="text-sm">
        Qual seu e-mail?
        <input
          type="email"
          value={state.email}
          onChange={handleInputEmailChange}
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <label className="mt-4 block text-sm">
        Qual seu GitHub?
        <input
          type="text"
          value={state.github}
          onChange={handleInputGithubChange}
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <div className="mt-6 flex gap-4">
        <Link
          href="/step-two"
          className="cursor-pointer rounded-lg border-0 bg-red-600 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-red-700"
        >
          Voltar
        </Link>

        <button
          onClick={handleFinishStep}
          className="cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600"
        >
          Finalizar
        </button>
      </div>
    </>
  )
}
