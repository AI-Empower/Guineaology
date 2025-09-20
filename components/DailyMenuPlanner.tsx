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
      <div className="rounded-[2.5rem] border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Meal planner</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-heading">
              Servings for {pigCount} guinea pig{pigCount > 1 ? "s" : ""}
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
        <label className="mt-6 block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft" htmlFor="pig-slider">
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
          className="mt-3 w-full accent-[color:var(--color-accent)]"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Hay estimate</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{totals.hay} g / day</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Offer unlimited hay; expect roughly 100–120 g eaten per pig daily.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Pellets</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{totals.pellets.toFixed(2)} cup</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              That equals {Math.round(totals.pelletsTablespoons)} tbsp of plain, timothy-based pellets.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Veggies</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{totals.veggies} cup{totals.veggies === 1 ? "" : "s"}</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Split into at least two servings to protect tummies and ensure vitamin C absorption.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Treat fruits</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{totals.treats} tbsp / week</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Offer no more than two small fruit servings per week to avoid excess sugar.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Vitamin C goal</p>
            <p className="mt-3 text-2xl font-semibold text-heading">{totals.vitaminC} mg</p>
            <p className="mt-2 text-sm leading-relaxed text-primary">
              Choose veg that deliver 20–30 mg per pig daily; supplement if intake is uncertain.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2.5rem] border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Produce matrix</p>
        <h4 className="mt-2 font-display text-2xl font-semibold text-heading">Mix one from each column for variety and balance.</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {produceMatrix.map((item) => (
            <div key={item.category} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-soft">{item.category}</p>
              <p className="mt-3 text-base leading-relaxed text-primary">{item.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
