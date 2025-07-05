
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
})

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-mono',
})

export const heading = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-heading',
})
