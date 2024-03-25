import { Metadata } from 'next'
import { FormStepOne } from './components/form-step-one'

export const metadata: Metadata = {
  title: 'step-one',
}

export default function StepOne() {
  return (
    <div className="mr-5 mt-5">
      <p className="text-sm text-zinc-400">Passo 1/3</p>
      <h2 className="m-0 p-0 text-2xl">Vamos começar com seu nome</h2>
      <p className="text-sm text-zinc-400">
        Preencha o campo abaixo com seu nome completo.
      </p>

      <hr className="mx-0 my-7 h-[1px] border-0 bg-blue-800" />

      <FormStepOne />
    </div>
  )
}
