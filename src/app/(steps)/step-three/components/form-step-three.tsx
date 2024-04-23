'use client'

import { useFinishStep } from '@/hooks/use-finish-step'
import { useForm } from '@/hooks/use-form'
import { FormActions } from '@/reducers/form-reducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'

export function FormStepThree() {
  const [formData, setFormData] = useState({ github: '', email: '' })
  const { dispatch } = useForm()
  const finishStep = useFinishStep()
  const router = useRouter()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    })
  }, [dispatch])

  const handleFinishStep = (e: FormEvent) => {
    e.preventDefault()

    const { email, github } = formData

    if (email !== '' && github !== '') {
      dispatch({
        type: FormActions.setGithub,
        payload: github,
      })
      dispatch({
        type: FormActions.setEmail,
        payload: email,
      })
      router.push('/')
      alert('Cadastro finalizado!')
      finishStep()
    } else {
      alert('Preencha os dados.')
    }
  }

  return (
    <form onSubmit={handleFinishStep}>
      <label className="text-sm">
        Qual seu e-mail?
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <label className="mt-4 block text-sm">
        Qual seu GitHub?
        <input
          type="text"
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
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
          type="submit"
          className="cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600"
        >
          Finalizar
        </button>
      </div>
    </form>
  )
}
