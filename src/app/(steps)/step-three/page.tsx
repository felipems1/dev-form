import { Metadata } from 'next'
import { FormStepThree } from './components/form-step-three'

export const metadata: Metadata = {
  title: 'step-three',
}

export default function StepThree() {
  return (
    <div className="mr-5 mt-5">
      <p className="text-sm text-zinc-400">Passo 3/3</p>
      <h2 className="m-0 p-0 text-2xl">Legal Felipe, onde te achamos?</h2>
      <p className="text-sm text-zinc-400">
        Preencha com seus contatos para conseguimos entrar em contato.
      </p>

      <hr className="mx-0 my-7 h-[1px] border-0 bg-blue-800" />

      <FormStepThree />
    </div>
  )
}
