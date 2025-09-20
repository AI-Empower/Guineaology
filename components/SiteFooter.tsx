import Link from "next/link"

const footerLinks = [
  { href: "/diet", label: "Nutrition" },
  { href: "/habitat", label: "Habitat" },
  { href: "/health", label: "Health" },
  { href: "/enrichment", label: "Enrichment" },
  { href: "/adoption", label: "Adoption" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-subtle bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="space-y-3 text-start md:max-w-xl">
          <p className="font-display text-xl font-semibold text-heading md:text-2xl">
            Care guides shaped with rescue teams and long-time guardians.
          </p>
          <p className="text-sm leading-relaxed text-soft">
            Share the routines with family, sitters, and volunteers so every guinea pig stays on a steady, welfare-first plan.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">
            <span className="size-2 rounded-full bg-[color:var(--color-accent)]" />
            Trusted sources
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-soft md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-1.5 transition hover:border-subtle hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
