interface SourceItem {
  href: string
  title: string
  description?: string
}

interface SourceListProps {
  heading?: string
  sources: SourceItem[]
  className?: string
}

export function SourceList({ heading = "Sources", sources, className = "" }: SourceListProps) {
  const containerClassName = [
    "rounded-3xl",
    "border",
    "border-subtle",
    "bg-surface",
    "px-6",
    "py-6",
    "shadow-soft",
    "sm:px-8",
    "sm:py-8",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <section className={containerClassName}>
      <div className="flex flex-col gap-1">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">{heading}</p>
        <span className="text-sm text-soft">Every guide links to trusted veterinary and welfare references.</span>
      </div>
      <ul className="mt-5 space-y-3 text-sm text-primary">
        {sources.map((source) => (
          <li
            key={source.href}
            className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3 transition hover:border-strong hover:bg-surface"
          >
            <a
              href={source.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-semibold text-accent transition hover:text-heading"
            >
              {source.title}
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5 16 8m0 0h-6m6 0v6" />
              </svg>
            </a>
            {source.description ? <p className="mt-2 text-xs text-soft">{source.description}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
