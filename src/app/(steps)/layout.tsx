import { Header } from '@/components/header'
import { SidebarItem } from '@/components/sidebar-item'

export default function StepLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <div className="flex min-h-screen flex-col">
        <Header />

        <hr className="h-[1px] border-0 bg-blue-800" />

        <div className="m-auto flex w-full max-w-[1000px] flex-1">
          <div className="w-64 border-r border-solid border-blue-800">
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="user"
              path="/"
              active={true}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={false}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={false}
            />
          </div>

          <div className="flex-1 pl-10 pt-3">{children}</div>
        </div>
      </div>
    </div>
  )
}
