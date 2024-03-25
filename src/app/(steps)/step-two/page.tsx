import { Metadata } from 'next'
import { FormStepTwo } from './components/form-step-two'

export const metadata: Metadata = {
  title: 'step-two',
}

export default function StepTwo() {
  return (
    <div className="mr-5 mt-5">
      <p className="text-sm text-zinc-400">Passo 2/3</p>
      <h2 className="m-0 p-0 text-2xl">O que melhor descreve você?</h2>
      <p className="text-sm text-zinc-400">
        Escolha a opção que melhor condiz com seu estado atual,
        profissionalmente.
      </p>

      <hr className="mx-0 my-7 h-[1px] border-0 bg-blue-800" />

      <FormStepTwo />
    </div>
  )
}
