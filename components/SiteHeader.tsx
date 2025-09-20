"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { ThemeToggle } from "components/ThemeToggle"

// ----------------------------
// Inline SVG Icon Components
// ----------------------------
type IconProps = React.SVGProps<SVGSVGElement>

function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9v7a3 3 0 0 1-3 3h-3v-5a3 3 0 0 0-6 0v5H6a3 3 0 0 1-3-3v-7z" />
    </svg>
  )
}

function FoodIcon(props: IconProps) {
  // Bowl + leaf
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 14h16a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 10c3 0 4-2 4-4-2 0-4 1-4 4z" />
    </svg>
  )
}

function HabitatIcon(props: IconProps) {
  // Hut / enclosure
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-6 9 6" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 20v-6h6v6" />
    </svg>
  )
}

function HealthIcon(props: IconProps) {
  // Heart + pulse
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5a4.5 4.5 0 0 1 8-2 4.5 4.5 0 1 1 6.5 6.2L12 21 5.5 14.7" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 13h2l1.5-3 2 4 1-2h3" />
    </svg>
  )
}

function PlayIcon(props: IconProps) {
  // Toy/ball triangle play
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M10 8l6 4-6 4V8z" />
    </svg>
  )
}

function AdoptionIcon(props: IconProps) {
  // Hand + heart
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 7c1.5-2 5-1.5 5 1.5 0 2.2-2.2 3.7-5 6.5-2.8-2.8-5-4.3-5-6.5C7 5.5 10.5 5 12 7z" />
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 17c1.5 0 2.5-.5 4-.5 2 0 2.5 1.5 4.5 1.5 1.5 0 2.5-.5 3-1" />
    </svg>
  )
}

// ----------------------------

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/diet", label: "Nutrition", icon: FoodIcon },
  { href: "/habitat", label: "Habitat", icon: HabitatIcon },
  { href: "/health", label: "Health", icon: HealthIcon },
  { href: "/enrichment", label: "Enrichment", icon: PlayIcon },
  { href: "/adoption", label: "Adoption", icon: AdoptionIcon },
] as const

export function SiteHeader() {
  const pathname = usePathname() ?? "/"
  const [isOpen, setIsOpen] = React.useState(false)

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40 border-b border-subtle bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo + Title (small) */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full border border-subtle bg-surface px-2.5 py-1.5 transition hover:border-strong hover:bg-surface-muted"
        >
          <span className="flex size-8 items-center justify-center overflow-hidden rounded-full transition group-hover:scale-[1.04]">
            <img
              src="/logo.png"
              alt="Guinea Pig Care logo"
              width="32"
              height="32"
              className="h-full w-full object-cover"
            />
</span>
          <span className="font-display text-base font-semibold leading-none text-heading">
            Guinea Pig Care
          </span>
        </Link>

        {/* Desktop Nav (compact like the example) */}
        <nav className="hidden items-center gap-1 rounded-xl bg-surface p-1 shadow-sm md:flex">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 transition
                ${active ? "border border-subtle bg-surface-muted text-heading shadow-soft" : "text-soft hover:bg-surface-muted hover:text-heading"}
              `}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((p) => !p)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-surface text-heading transition hover:border-strong hover:bg-surface-muted md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-subtle bg-surface transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-2 p-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition 
                ${active ? "border border-subtle bg-surface-muted text-heading" : "text-soft hover:bg-surface-muted hover:text-heading"}
              `}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
