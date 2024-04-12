import { Book, Mail, User } from 'lucide-react'

interface SidebarItemProps {
  title: string
  description: string
  icon: 'user' | 'mail' | 'book'
  active: boolean
}

export function SidebarItem({
  active,
  description,
  icon,
  title,
}: SidebarItemProps) {
  return (
    <div className="mx-0 my-7 cursor-pointer">
      <div className="flex items-center px-2">
        <div className="mr-5 hidden flex-1 lg:block">
          <h3 className="mb-1 text-right text-sm text-white">{title}</h3>
          <p className="text-right text-sm text-zinc-400">{description}</p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-[50%] bg-cyan-500">
          {icon === 'user' && (
            <User className="text-white" width={24} height={24} />
          )}

          {icon === 'mail' && (
            <Mail className="text-white" width={24} height={24} />
          )}

          {icon === 'book' && (
            <Book className="text-white" width={24} height={24} />
          )}
        </div>

        <div
          className={`mr:1 ml-3 h-2 w-2 rounded-[50%] border-2 border-solid border-zinc-400 md:ml-5 md:mr-4 ${active ? 'bg-cyan-500' : 'bg-transparent'}`}
        ></div>
      </div>
    </div>
  )
}
