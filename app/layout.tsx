import type { Metadata } from 'next'
import { Inter, Homemade_Apple } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin']
})
const homemadeApple = Homemade_Apple({ 
  variable: '--font-display',
  subsets: ['latin'], 
  weight: ["400"] 
})

export const metadata: Metadata = {
  title: 'The Sydney Soloists',
  description: 'Playing masterpieces from the chamber music literature of the 18th, 19th and 20th century',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${homemadeApple.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}