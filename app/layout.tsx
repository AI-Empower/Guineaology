import "styles/tailwind.css"
import type { Metadata } from "next"
import { Nunito, Playfair_Display } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Guineaology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${playfair.variable}`}>
      <body className="bg-[#fef8e6] text-[#392410] antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-[-10rem] size-[28rem] animate-float-slow rounded-full bg-gradient-to-br from-[#ffe9bf] via-[#ffd4a3] to-[#fbcfe8] opacity-60 blur-3xl" />
          <div className="absolute -right-32 bottom-[-12rem] size-[30rem] animate-float-medium rounded-full bg-gradient-to-br from-[#c1e9ff] via-[#ffd9c0] to-[#ffedd5] opacity-70 blur-3xl" />
        </div>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}
