interface SelectOptionProps {
  title: string
  description: string
  icon: string
  selected: boolean
  handleSelectOption: () => void
}

export function SelectOption({
  description,
  handleSelectOption,
  icon,
  selected,
  title,
}: SelectOptionProps) {
  return (
    <div
      onClick={handleSelectOption}
      id="select-option"
      className={`mb-4 flex cursor-pointer items-center rounded-lg border-2 border-solid ${selected ? 'border-cyan-500' : 'border-zinc-400'} p-5`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-cyan-500 text-2xl md:h-14 md:w-14">
        {icon}
      </div>
      <div className="ml-5 flex-1">
        <h3 className="mb-2 text-base">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  )
}
