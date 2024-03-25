'use client'

import { useForm } from '@/hooks/use-form'
import { SidebarItem } from './sidebar-item'

export function Sidebar() {
  const { state } = useForm()

  return (
    <div className="w-64 border-r border-solid border-blue-800">
      <SidebarItem
        title="Pessoal"
        description="Se identifique"
        icon="user"
        active={state.currentStep === 1}
      />
      <SidebarItem
        title="Profissional"
        description="Seu nível"
        icon="book"
        active={state.currentStep === 2}
      />
      <SidebarItem
        title="Contatos"
        description="Como te achar"
        icon="mail"
        active={state.currentStep === 3}
      />
    </div>
  )
}
