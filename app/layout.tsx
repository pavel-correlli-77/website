import type { Metadata, Viewport } from 'next'
import { Sora, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const _ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Correlli Engineering | Sales Workflow Automation',
  description: 'Sales workflow automation for lead-driven businesses. We automate the journey from lead to call, trial, follow-up, and payment.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${_sora.variable} ${_ibmPlexMono.variable}`}>
      <body className="font-sans antialiased text-white correlli-bg">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
