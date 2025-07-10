import type { Metadata } from "next"
import "./globals.css"
import { ReactNode } from "react"
import { SWRProvider } from "./providers/swr-provider"
import { Barlow } from 'next/font/google'
import NavLink from "../components/NavLink"
import { ToastProvider } from "lib/toast"

export const metadata: Metadata = {
  title: "Peliculas OMDB",
  description: "Buscador de peliculas y series",
}

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
})

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={barlow.variable}>
      <body className="min-h-screen bg-gray-50 font-barlow">
        <header className="shadow">
          <nav className="max-w-7xl mx-auto flex gap-6 p-4">
            <NavLink href="/">Buscar Peliculas o Series</NavLink>
            <NavLink href="/favoritos">Favoritos</NavLink>
          </nav>
        </header>
        <SWRProvider>
          {children}
          <ToastProvider />
        </SWRProvider>
      </body>
    </html>
  )
}