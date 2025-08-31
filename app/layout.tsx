import type { Metadata } from 'next'
import './globals.css'
import ClientWrapper from './components/ClientWrapper'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
