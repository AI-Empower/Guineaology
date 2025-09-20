import Link from "next/link"

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2l1.6 4.8L18 8.4l-4.4 1.6L12 15l-1.6-5-4.4-1.6 4.4-1.6L12 2z" fill="currentColor"/>
    </svg>
  )
}

export default function NotFound() {
  return (
    <main
      className="
        relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden
        bg-gradient-to-br from-surface via-surface-muted to-surface/80
        px-6 py-16 text-center
      "
      aria-labelledby="notfound-title"
    >
      {/* Background FX (decorative) */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_100%)]">
        <span
          aria-hidden
          className="
            absolute -top-24 left-8 size-60 rounded-full bg-accent/25 blur-3xl
            motion-safe:animate-pulse motion-reduce:opacity-40
          "
        />
        <span
          aria-hidden
          className="
            absolute -bottom-20 right-8 size-72 rounded-full bg-[color:var(--color-accent-soft)]
            blur-3xl motion-safe:animate-[spin_18s_linear_infinite] motion-reduce:opacity-30
          "
        />
        <span
          aria-hidden
          className="
            absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full
            border border-dashed border-accent/30 motion-safe:animate-ping motion-reduce:hidden
          "
        />
        {/* subtle grid */}
        <div
          aria-hidden
          className="
            absolute inset-0 opacity-[0.25]
            [background-image:linear-gradient(var(--grid-color,rgba(255,255,255,.06))_1px,transparent_1px),linear-gradient(90deg,var(--grid-color,rgba(255,255,255,.06))_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />
        {/* film grain */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/></svg>')]"
        />
      </div>

      {/* Card */}
      <div
        className="
          relative mx-auto w-full max-w-xl space-y-6 rounded-3xl border border-subtle/80
          bg-surface/80 p-8 shadow-2xl backdrop-blur-md
        "
      >
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent">
          Whoops!
        </p>

        <h1
          id="notfound-title"
          className="font-display text-4xl font-semibold text-heading sm:text-5xl"
        >
          This burrow is empty.
        </h1>

        <p className="text-sm leading-relaxed text-primary sm:text-base">
          We couldn&apos;t find the page you tried to visit. While you&apos;re here,
          explore the care guides and daily routines that keep every guinea pig thriving.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2 rounded-full
              bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-soft
              transition will-change-transform hover:-translate-y-0.5 hover:shadow-lg
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2
            "
          >
            Return to home
            <span
              aria-hidden
              className="inline-flex size-5 items-center justify-center rounded-full bg-white/20"
            >
              <IconArrowRight className="size-4" />
            </span>
          </Link>

          <Link
            href="/habitat"
            className="
              inline-flex items-center justify-center gap-2 rounded-full border border-subtle
              bg-surface px-6 py-3 text-sm font-semibold text-heading transition
              hover:border-strong hover:bg-surface-muted
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2
            "
          >
            Explore guides
            <span
              aria-hidden
              className="inline-flex size-5 items-center justify-center rounded-full bg-accent-soft text-accent"
            >
              <IconSpark className="size-3.5" />
            </span>
          </Link>
        </div>

        {/* Optional tips */}
        <p className="sr-only">
          Error code: 404. Use the links above to navigate back to safety.
        </p>
      </div>
    </main>
  )
}
