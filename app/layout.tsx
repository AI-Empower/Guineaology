import "styles/tailwind.css"
import type { Metadata } from "next"
import { Nunito, Playfair_Display } from "next/font/google"

import { SiteFooter } from "components/SiteFooter"
import { SiteHeader } from "components/SiteHeader"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Guineaology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${playfair.variable}`}>
      <body className="bg-[#fef8e6] text-[#392410] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-[#2f1a0b] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.35em] focus:text-[#fef8e6]"
        >
          Skip to content
        </a>
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-[-10rem] size-[28rem] animate-float-slow rounded-full bg-gradient-to-br from-[#ffe9bf] via-[#ffd4a3] to-[#fbcfe8] opacity-60 blur-3xl" />
          <div className="absolute -right-32 bottom-[-12rem] size-[30rem] animate-float-medium rounded-full bg-gradient-to-br from-[#c1e9ff] via-[#ffd9c0] to-[#ffedd5] opacity-70 blur-3xl" />
        </div>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
