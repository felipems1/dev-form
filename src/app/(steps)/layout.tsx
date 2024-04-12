import { Header } from '@/components/header'
import { Sidebar } from '@/components/siderbar'
import { FormProvider } from '@/contexts/form-context'

export default function StepLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <FormProvider>
      <div className="min-h-screen bg-blue-950 text-white">
        <div className="flex min-h-screen flex-col">
          <Header />

          <hr className="h-[1px] border-0 bg-blue-800" />

          <div className="m-auto flex w-full max-w-[1000px] flex-1 pb-2">
            <Sidebar />

            <div className="flex-1 pl-4 pt-3 md:pl-10">{children}</div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}
