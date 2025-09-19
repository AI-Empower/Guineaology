"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/diet", label: "Nutrition" },
  { href: "/habitat", label: "Habitat" },
  { href: "/health", label: "Health" },
  { href: "/enrichment", label: "Enrichment" },
  { href: "/adoption", label: "Adoption" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-orange-200/60 bg-[#fef8e6]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50"
        >
          <span className="text-2xl leading-none">🐹</span>
          Guineaology
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-orange-200/60 bg-white/70 p-3 text-[#8b5527] shadow-sm transition hover:shadow-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#ffe7c2]/80 via-[#ffdfe4]/70 to-[#dff2ff]/70 text-[#2f1a0b] shadow-honey"
                    : "text-[#8b5527] hover:border-orange-200/70 hover:bg-white/70 hover:text-[#2f1a0b]"
                }`}
              >
                <span className="text-base">•</span>
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-300`}
      >
        <div className="overflow-hidden border-t border-orange-200/60 bg-[#fff7ea]/95">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 pb-6 pt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.35em] transition ${
                    isActive
                      ? "border-orange-200/80 bg-white/80 text-[#2f1a0b] shadow-honey"
                      : "border-transparent bg-white/60 text-[#8b5527] hover:border-orange-200/70 hover:text-[#2f1a0b]"
                  }`}
                >
                  {item.label}
                  <span aria-hidden className="text-base">
                    →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
