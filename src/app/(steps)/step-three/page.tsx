export default function StepThree() {
  return (
    <div className="mr-5 mt-5">
      <p className="text-sm text-zinc-400">Passo 3/3</p>
      <h2 className="m-0 p-0 text-2xl">Legal Felipe, onde te achamos?</h2>
      <p className="text-sm text-zinc-400">
        Preencha com seus contatos para conseguimos entrar em contato.
      </p>

      <hr className="mx-0 my-7 h-[1px] border-0 bg-blue-800" />

      <label className="text-sm">
        Qual seu e-mail?
        <input
          type="email"
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <label className="mt-4 block text-sm">
        Qual seu GitHub?
        <input
          type="text"
          className="mt-2 block w-full rounded-lg border-2 border-solid border-cyan-500 bg-blue-950 px-2 py-4 text-sm text-white outline-none"
        />
      </label>

      <div className="mt-6 flex gap-4">
        <button className="cursor-pointer rounded-lg border-0 bg-red-600 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-red-700">
          Voltar
        </button>

        <button className="cursor-pointer rounded-lg border-0 bg-green-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-green-600">
          Próximo
        </button>
      </div>
    </div>
  )
}
