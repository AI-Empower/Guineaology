"use client"

import { useMemo, useState } from "react"

const baseAreaForTwo = 7.5
const extraAreaPerPig = 3

const layoutSuggestions: Record<number, string> = {
  1: "2x4 C&C (minimum) — adopt a friend when possible",
  2: "2x4 C&C or 120×70 cm pen",
  3: "2x5 C&C or 150×80 cm pen",
  4: "2x6 C&C or 180×90 cm pen",
  5: "2x6 with loft or 200×90 cm pen",
  6: "2x7 C&C or 220×100 cm pen",
}

const beddingOptions = [
  {
    title: "Fleece over absorbent base",
    tips: "Layer washable fleece on top of two absorbent pads; sweep wet spots twice daily.",
  },
  {
    title: "Paper bedding",
    tips: "Use 5–8 cm depth of dust-free paper; replace fully every 5–7 days in large habitats.",
  },
  {
    title: "Kiln-dried pine",
    tips: "Only kiln-dried shavings; mix with paper bedding to extend freshness and reduce odours.",
  },
  {
    title: "Hay loft",
    tips: "Dedicated hay loft catches crumbs and keeps sleeping zones cleaner and drier.",
  },
]

export function HabitatFootprintPlanner() {
  const [pigCount, setPigCount] = useState(3)

  const metrics = useMemo(() => {
    const minimumArea = pigCount <= 1 ? baseAreaForTwo : baseAreaForTwo + (pigCount - 2) * extraAreaPerPig
    const areaSqFt = Math.max(minimumArea, baseAreaForTwo)
    const areaSqM = areaSqFt * 0.092903
    const layout = layoutSuggestions[pigCount] ?? "Expand beyond modular grids and add supervised floor time daily"

    return {
      areaSqFt: areaSqFt.toFixed(1),
      areaSqM: areaSqM.toFixed(2),
      layout,
    }
  }, [pigCount])

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-[2.5rem] border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Habitat planner</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-heading">
              Space for {pigCount} guinea pig{pigCount > 1 ? "s" : ""}
            </h3>
          </div>
          <div className="flex items-center gap-4 rounded-full border border-subtle bg-surface-muted px-4 py-2 shadow-soft">
            <button
              type="button"
              onClick={() => setPigCount((count) => Math.max(1, count - 1))}
              className="inline-flex size-8 items-center justify-center rounded-full bg-accent-soft text-accent transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
              aria-label="Decrease guinea pig count"
            >
              −
            </button>
            <div className="min-w-[3rem] text-center font-display text-xl font-semibold text-heading">{pigCount}</div>
            <button
              type="button"
              onClick={() => setPigCount((count) => Math.min(6, count + 1))}
              className="inline-flex size-8 items-center justify-center rounded-full bg-accent-soft text-accent transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
              aria-label="Increase guinea pig count"
            >
              +
            </button>
          </div>
        </div>
        <label className="mt-6 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft" htmlFor="habitat-slider">
          Adjust herd size
        </label>
        <input
          id="habitat-slider"
          type="range"
          min={1}
          max={6}
          step={1}
          value={pigCount}
          onChange={(event) => setPigCount(Number(event.target.value))}
          className="mt-3 w-full accent-[color:var(--color-accent)]"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Minimum area</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{metrics.areaSqFt} sq ft</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Aim bigger when you can—more roaming space reduces conflict and obesity.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Metric view</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{metrics.areaSqM} m²</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Keep corridors at least 35 cm wide so pigs can pass each other without stress.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Suggested layout</p>
            <p className="mt-3 text-base leading-relaxed text-primary">{metrics.layout}</p>
          </div>
        </div>
      </div>

      <div className="rounded-[2.5rem] border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Bedding toolkit</p>
        <h4 className="mt-2 font-display text-2xl font-semibold text-heading">Layer textures to keep feet healthy and air fresh.</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {beddingOptions.map((option) => (
            <div key={option.title} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-soft">{option.title}</p>
              <p className="mt-3 text-base leading-relaxed text-primary">{option.tips}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
