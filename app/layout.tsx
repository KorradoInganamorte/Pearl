import type { Metadata } from 'next'

import Header from '@/components/Header'

import './globals.css'

import { nunitoMedium } from '@/public/fonts'

export const metadata: Metadata = {
  title: 'Pearl',
  description: 'The best online cinema',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='phone-sm:text-[46.25%] verticalphone:text-[47%] horizontalphone:text-[48.5%] tablet:text-[50%] laptop-sm:text-[56.25%] laptop:text-[62.5%] monitor:text-[70.5%] screen:text-[87.5%] leading-none tracking-[0.05rem]'>
      <body className={`bg-black ${nunitoMedium}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
