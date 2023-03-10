import { ReactNode } from 'react'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Codevize',
  description: 'We are a team of developers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className="bg-gradient-to-tl from-startgradient to-endgradient
      object-cover 
      "
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
