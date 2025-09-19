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
    tips: "Only kiln-dried shavings; mix with paper bedding to extend freshness and reduce odors.",
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
      <div className="rounded-[2.5rem] border border-orange-200/70 bg-white/75 p-6 shadow-honey">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Habitat planner</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[#2f1a0b]">Space for {pigCount} guinea pig{pigCount > 1 ? "s" : ""}</h3>
          </div>
          <div className="flex items-center gap-4 rounded-full border border-orange-200/70 bg-white/70 px-4 py-2 shadow-inner shadow-white/60">
            <button
              type="button"
              onClick={() => setPigCount((count) => Math.max(1, count - 1))}
              className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe7c2] to-[#ffdfe4] text-lg text-[#8b5527] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              aria-label="Decrease guinea pig count"
            >
              −
            </button>
            <div className="min-w-[3rem] text-center font-display text-xl font-semibold text-[#2f1a0b]">{pigCount}</div>
            <button
              type="button"
              onClick={() => setPigCount((count) => Math.min(6, count + 1))}
              className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#dff2ff] to-[#ffe7f8] text-lg text-[#8b5527] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              aria-label="Increase guinea pig count"
            >
              +
            </button>
          </div>
        </div>
        <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]" htmlFor="habitat-slider">
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
          className="mt-3 w-full accent-[#f97316]"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Minimum area</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{metrics.areaSqFt} sq ft</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">Aim bigger when you can—more roaming space reduces conflict and obesity.</p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Metric view</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{metrics.areaSqM} m²</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">Keep corridors at least 35 cm wide so pigs can pass each other without stress.</p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Suggested layout</p>
            <p className="mt-3 text-base leading-relaxed text-[#5b3a20]">{metrics.layout}</p>
          </div>
        </div>
      </div>

      <div className="rounded-[2.5rem] border border-orange-200/60 bg-white/70 p-6 shadow-honey">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Bedding toolkit</p>
        <h4 className="mt-2 font-display text-2xl font-semibold text-[#2f1a0b]">Layer textures to keep feet healthy and air fresh.</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {beddingOptions.map((option) => (
            <div key={option.title} className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-inner shadow-white/50">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c4722d]">{option.title}</p>
              <p className="mt-3 text-base leading-relaxed text-[#5b3a20]">{option.tips}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
