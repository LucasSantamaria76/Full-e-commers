import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tienda online Por tu culpa Lola',
  description: 'Tienda online Por tu culpa Lola'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
