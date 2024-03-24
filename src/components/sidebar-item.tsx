import { Book, Mail, User } from 'lucide-react'
import Link from 'next/link'

interface SidebarItemProps {
  title: string
  description: string
  icon: 'user' | 'mail' | 'book'
  path: string
  active: boolean
}

export function SidebarItem({
  active,
  description,
  icon,
  path,
  title,
}: SidebarItemProps) {
  return (
    <div className="mx-0 my-7 cursor-pointer">
      <Link href={path} className="flex items-center">
        <div className="mr-5 flex-1">
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
          className={`ml-5 mr-4 h-2 w-2 rounded-[50%] border-2 border-solid border-zinc-400 ${active ? 'bg-cyan-500' : 'bg-transparent'}`}
        ></div>
      </Link>
    </div>
  )
}
