"use client"

import { useMemo, useState } from "react"

type ChecklistItem = {
  id: string
  title: string
  description: string
  category: string
}

const items: ChecklistItem[] = [
  {
    id: "vet",
    title: "Book an exotic vet intake",
    description: "Schedule an initial wellness exam within 7–10 days of adoption and confirm after-hours care options.",
    category: "Health",
  },
  {
    id: "habitat",
    title: "Prepare a 7.5+ sq ft habitat",
    description: "Assemble the enclosure, line bedding, and set up at least two hay and water stations before pigs arrive.",
    category: "Environment",
  },
  {
    id: "diet",
    title: "Stock staple foods",
    description: "Purchase unlimited grass hay, plain timothy pellets, and a variety of leafy greens for the first two weeks.",
    category: "Nutrition",
  },
  {
    id: "quarantine",
    title: "Plan a quarantine zone",
    description: "Keep new pigs separate from existing herds for 2–3 weeks to monitor health and prevent disease spread.",
    category: "Health",
  },
  {
    id: "rescue",
    title: "Choose a reputable rescue",
    description: "Work with organisations that provide vet checks, require paired adoptions, and offer return support.",
    category: "Community",
  },
  {
    id: "bonding",
    title: "Study bonding protocols",
    description: "Learn neutral-territory bonding steps and signs of escalating aggression before introductions.",
    category: "Behaviour",
  },
  {
    id: "transport",
    title: "Set up safe transport",
    description: "Line a hard-sided carrier with absorbent bedding and pre-pack hay, veggies, and a spare fleece.",
    category: "Logistics",
  },
  {
    id: "budget",
    title: "Create a care budget",
    description: "Plan for monthly bedding and food plus an emergency vet fund covering at least one urgent visit.",
    category: "Planning",
  },
]

export function AdoptionReadinessChecklist() {
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  const completion = useMemo(() => {
    const total = items.length
    const done = completed.size
    return {
      total,
      done,
      percent: Math.round((done / total) * 100),
    }
  }, [completed])

  const toggleItem = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-[2.5rem] border border-orange-200/70 bg-white/80 p-6 shadow-honey">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Readiness tracker</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[#2f1a0b]">{completion.percent}% ready for adoption day</h3>
          </div>
          <div className="rounded-full border border-orange-200/60 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5527] shadow-inner shadow-white/60">
            {completion.done} / {completion.total} tasks complete
          </div>
        </div>
        <div className="mt-6 h-3 w-full rounded-full bg-gradient-to-r from-[#fff1d6] via-[#ffe0f0] to-[#def5ff]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#f97316] via-[#fb7185] to-[#facc15] shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-all duration-500"
            style={{ width: `${completion.percent}%` }}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const isChecked = completed.has(item.id)

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`group flex flex-col gap-3 rounded-3xl border px-5 py-5 text-left transition hover:-translate-y-1 hover:shadow-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${
                isChecked
                  ? "border-orange-300/80 bg-gradient-to-br from-[#ffe7c2]/80 via-[#ffdfe4]/70 to-[#dff2ff]/70 text-[#2f1a0b]"
                  : "border-orange-200/50 bg-white/75 text-[#5b3a20]"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">{item.category}</p>
                <span
                  className={`inline-flex size-8 items-center justify-center rounded-full border text-lg font-semibold transition ${
                    isChecked
                      ? "border-[#f97316] bg-gradient-to-br from-[#f97316] via-[#fb7185] to-[#facc15] text-white"
                      : "border-orange-200/70 bg-white/70 text-[#b6662b]"
                  }`}
                  aria-hidden
                >
                  {isChecked ? "✓" : ""}
                </span>
              </div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
