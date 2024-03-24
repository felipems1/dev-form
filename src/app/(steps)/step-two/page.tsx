import { SelectOption } from '@/components/select-option'

export default function StepTwo() {
  return (
    <div className="mr-5 mt-5">
      <p className="text-sm text-zinc-400">Passo 2/3</p>
      <h2 className="m-0 p-0 text-2xl">Felipe, o que melhor descreve você?</h2>
      <p className="text-sm text-zinc-400">
        Escolha a opção que melhor condiz com seu estado atual,
        profissionalmente.
      </p>

      <hr className="mx-0 my-7 h-[1px] border-0 bg-blue-800" />

      <SelectOption
        title="Sou iniciante"
        description="Comecei a programar há menos de 2 anos"
        icon="🥳"
        selected={false}
        handleSelectOption={() => alert('1')}
      />

      <SelectOption
        title="Sou programador"
        description="Já programo há 2 anos ou mais"
        icon="😎"
        selected={false}
        handleSelectOption={() => alert('2')}
      />

      <button className="mt-7 cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600">
        Próximo
      </button>
    </div>
  )
}
