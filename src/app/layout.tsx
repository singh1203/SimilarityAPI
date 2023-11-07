import '@/style/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/util'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn()}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
