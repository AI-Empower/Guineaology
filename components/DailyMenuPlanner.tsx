"use client"

import { useMemo, useState } from "react"

const hayPerPigGrams = 120
const pelletPerPigCups = 0.125
const veggiePerPigCups = 1
const vitaminCPerPigMg = 25
const treatPerPigTablespoon = 1

const produceMatrix = [
  { category: "Leafy base", examples: "Romaine, green leaf, red leaf, butterhead" },
  { category: "Vitamin C star", examples: "Green bell pepper, yellow pepper, cilantro" },
  { category: "Crunch & variety", examples: "Cucumber, fennel, zucchini, cherry tomato (occasional)" },
  { category: "Herbal garnish", examples: "Parsley, basil, dill, mint (small sprigs)" },
]

export function DailyMenuPlanner() {
  const [pigCount, setPigCount] = useState(2)

  const totals = useMemo(() => {
    const hay = pigCount * hayPerPigGrams
    const pellets = pigCount * pelletPerPigCups
    const veggies = pigCount * veggiePerPigCups
    const treats = pigCount * treatPerPigTablespoon
    const vitaminC = pigCount * vitaminCPerPigMg

    return {
      hay,
      pellets,
      veggies,
      treats,
      vitaminC,
      pelletsTablespoons: pellets * 16,
    }
  }, [pigCount])

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-[2.5rem] border border-orange-200/70 bg-white/75 p-6 shadow-honey">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Meal planner</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[#2f1a0b]">Servings for {pigCount} guinea pig{pigCount > 1 ? "s" : ""}</h3>
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
        <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]" htmlFor="pig-slider">
          Adjust herd size
        </label>
        <input
          id="pig-slider"
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Hay estimate</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{totals.hay} g / day</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">Offer unlimited hay; expect roughly 100–120 g eaten per pig daily.</p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Pellets</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{totals.pellets.toFixed(2)} cup</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">That equals {Math.round(totals.pelletsTablespoons)} tbsp of plain, timothy-based pellets.</p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Veggies</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{totals.veggies} cup{totals.veggies === 1 ? "" : "s"}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">Split into at least two servings to protect tummies and ensure vitamin C absorption.</p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Treat fruits</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{totals.treats} tbsp / week</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">Offer no more than two small fruit servings per week to avoid excess sugar.</p>
          </div>
          <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/60">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Vitamin C goal</p>
            <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{totals.vitaminC} mg</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f472b]">Choose veg that deliver 20–30 mg per pig daily; supplement if intake is uncertain.</p>
          </div>
        </div>
      </div>

      <div className="rounded-[2.5rem] border border-orange-200/60 bg-white/70 p-6 shadow-honey">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Produce matrix</p>
        <h4 className="mt-2 font-display text-2xl font-semibold text-[#2f1a0b]">Mix one from each column for variety and balance.</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {produceMatrix.map((item) => (
            <div key={item.category} className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-inner shadow-white/50">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c4722d]">{item.category}</p>
              <p className="mt-3 text-base leading-relaxed text-[#5b3a20]">{item.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
