export default function StepOne() {
  return (
    <div className="mr-5 mt-5">
      <p className="text-sm text-zinc-400">Passo 1/3</p>
      <h2 className="m-0 p-0 text-2xl">Vamos começar com seu nome</h2>
      <p className="text-sm text-zinc-400">
        Preencha o campo abaixo com seu nome completo.
      </p>

      <hr className="mx-0 my-7 h-[1px] border-0 bg-blue-800" />

      <label className="text-sm">
        Seu nome completo
        <input
          type="text"
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <button className="mt-7 cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600">
        Próximo
      </button>
    </div>
  )
}
