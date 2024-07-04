import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | dev-form',
    default: 'dev-form',
  },
  description:
    'O formulário é projetado para coletar informações do usuário em várias etapas, facilitando o processo e tornando-o mais intuitivo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
