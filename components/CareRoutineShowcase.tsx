"use client"

import { useMemo, useState } from "react"

type SegmentHighlight = {
  title: string
  value: string
  tip: string
}

type CareSegment = {
  id: string
  label: string
  emoji: string
  preview: string
  headline: string
  description: string
  backdrop: string
  highlights: SegmentHighlight[]
  checklist: string[]
  affirmation: string
}

const segments: CareSegment[] = [
  {
    id: "sunrise",
    label: "Sunrise Health Check",
    emoji: "🌅",
    preview: "A calm scan before breakfast ensures every herd member starts bright and comfortable.",
    headline: "Start the day with a full-body once-over",
    description:
      "Catch subtle changes while your guinea pigs are most alert. Five unrushed minutes let you note weight trends, breathing, and appetite before the day gets busy.",
    backdrop: "from-[#fff4d6]/90 via-[#ffe4ca]/75 to-[#ffd9f2]/70",
    highlights: [
      {
        title: "Ambient targets",
        value: "18–24 °C • 40–70% RH",
        tip: "Guinea pigs are sensitive to drafts; open windows only if temperatures stay within range.",
      },
      {
        title: "Hay refresh",
        value: "Timothy + orchard mix",
        tip: "Top up at least two hay stations to keep fibre intake constant and prevent guarding.",
      },
      {
        title: "Vitals glance",
        value: "Weight & droppings",
        tip: "Record weights weekly—more than ±30 g in a week warrants a vet call.",
      },
    ],
    checklist: [
      "Swap in fresh filtered water and confirm bottles release a steady drip.",
      "Offer 1/8 cup of fortified pellets per pig after you verify weights.",
      "Inspect eyes, nose, teeth, and coat for discharge or puffing.",
    ],
    affirmation: "Consistent morning touchpoints catch small changes before they become emergencies.",
  },
  {
    id: "midday",
    label: "Midday Reset",
    emoji: "🌿",
    preview: "Ventilate the habitat, tidy high-traffic zones, and add low-stress enrichment.",
    headline: "Keep the environment clean and confidence high",
    description:
      "Short, predictable resets maintain good air quality and hygiene. Rotate hideys, brush debris from fleece, and encourage gentle movement to prevent boredom and pressure sores.",
    backdrop: "from-[#fef3c7]/90 via-[#fce7f3]/70 to-[#d9f6ff]/60",
    highlights: [
      {
        title: "Spot clean",
        value: "5-minute sweep",
        tip: "Remove wet bedding and manure to keep ammonia low and paws healthy.",
      },
      {
        title: "Hydration",
        value: "> 10 ml/kg",
        tip: "Offer rinsed veggies or a second water source for sippers that prefer bowls.",
      },
      {
        title: "Floor time",
        value: "10–15 min",
        tip: "Set up a secure playpen with tunnels to stretch joints and encourage curiosity.",
      },
    ],
    checklist: [
      "Brush crumbs and hay fines into a handheld vacuum or dustpan.",
      "Rotate or add an extra hidey so lower-ranking pigs get quiet space.",
      "Offer a foraging mat with low-sugar herbs or bell pepper strips.",
    ],
    affirmation: "Clean, interesting spaces build trust and help prey animals relax in daylight hours.",
  },
  {
    id: "twilight",
    label: "Evening Salad Service",
    emoji: "🥗",
    preview: "Serve vitamin C-rich salads and complete your daily health log before lights dim.",
    headline: "Anchor nutrition with a varied plate",
    description:
      "Aim for one packed cup of leafy greens per pig each day. Combine romaine, cilantro, bell pepper, and rotating herbs so their gut stays balanced and their immune system supported.",
    backdrop: "from-[#fde68a]/90 via-[#fb7185]/60 to-[#fbcfe8]/60",
    highlights: [
      {
        title: "Vegetable matrix",
        value: "Leafy + vit C + crunch",
        tip: "Dark leafy greens form the base; add a high-vitamin C veg and a crunchy accent for dental wear.",
      },
      {
        title: "Pellet timing",
        value: "Evening or split",
        tip: "If you free-feed hay, dividing pellets into two servings prevents gorging.",
      },
      {
        title: "Observation",
        value: "Eating posture",
        tip: "Watch for favoring one side or dropping food—both can signal dental pain.",
      },
    ],
    checklist: [
      "Rinse and dry produce to remove pesticide residue and avoid tummy upsets.",
      "Log each pig's appetite, droppings, and any unusual sounds or behaviors.",
      "Refresh hay piles so they have unlimited fibre overnight.",
    ],
    affirmation: "Balanced salads and attentive notes keep your exotics vet in the loop between visits.",
  },
  {
    id: "moonlight",
    label: "Lights-Out Wind Down",
    emoji: "🌙",
    preview: "Dim the room, secure play areas, and make sure every pig has a dry, cozy sleeping zone.",
    headline: "Protect rest with calm routines",
    description:
      "Quiet evenings help prey species feel safe. Lower household noise, offer final hay, and ensure hideys stay dry so feet and lungs rest overnight.",
    backdrop: "from-[#e0f2fe]/90 via-[#ede9fe]/70 to-[#ffe4e6]/60",
    highlights: [
      {
        title: "Lighting",
        value: "Soft & indirect",
        tip: "Keep ambient light under 5 lux after dark to mirror dusk without total darkness.",
      },
      {
        title: "Bedding check",
        value: "Dry fleece pads",
        tip: "Lift corners of pads and replace damp spots to prevent bumblefoot and fungal growth.",
      },
      {
        title: "Safety sweep",
        value: "Doors & ramps",
        tip: "Confirm playpen latches and remove floor-time hazards like charging cables.",
      },
    ],
    checklist: [
      "Offer a final handful of hay and a small herb treat if weights are stable.",
      "Turn on a low, steady white-noise source to mask sudden clatter.",
      "Note anything to discuss with your exotics vet, such as sneezes or softer stools.",
    ],
    affirmation: "Predictable nights reassure sensitive animals that their world stays safe even while they sleep.",
  },
]

export function CareRoutineShowcase() {
  const [activeSegmentId, setActiveSegmentId] = useState<string>(segments[0]?.id ?? "sunrise")

  const activeSegment = useMemo(
    () => segments.find((segment) => segment.id === activeSegmentId) ?? segments[0],
    [activeSegmentId],
  )

  const activeIndex = useMemo(
    () => Math.max(0, segments.findIndex((segment) => segment.id === activeSegment.id)),
    [activeSegment.id],
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {segments.map((segment) => {
          const isActive = activeSegment.id === segment.id

          return (
            <button
              key={segment.id}
              type="button"
              onClick={() => setActiveSegmentId(segment.id)}
              className={`group relative overflow-hidden rounded-2xl border border-orange-200/70 bg-white/70 px-5 py-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${isActive ? "shadow-honey ring-2 ring-orange-300/70" : ""}`}
            >
              <span className="flex items-center justify-between text-xl">
                <span className="text-3xl drop-shadow-sm">{segment.emoji}</span>
                <span className="rounded-full bg-gradient-to-r from-[#ffe8cc] to-[#ffd4a8] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-[#8a5526] shadow-inner shadow-white/40">
                  {isActive ? "Now exploring" : "Preview"}
                </span>
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-[#3a2413]">{segment.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#6b4629] opacity-90">{segment.preview}</p>
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-60 ${isActive ? "opacity-70" : ""} bg-gradient-to-br ${segment.backdrop}`}
              />
            </button>
          )
        })}
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-orange-200/70 bg-white/75 p-8 shadow-honey backdrop-blur-2xl md:p-12">
        <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${activeSegment.backdrop}`} />
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50">
              {activeSegment.emoji} Daily Ritual
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">
              {activeSegment.headline}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#53341c]">{activeSegment.description}</p>

            <ul className="mt-8 grid gap-4 text-base text-[#5b3a20] md:grid-cols-2">
              {activeSegment.checklist.map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm shadow-white/40 transition hover:border-orange-200"
                >
                  <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-lg text-white shadow-inner">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {activeSegment.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-white/40 transition hover:-translate-y-1 hover:border-orange-200/80"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">{highlight.title}</p>
                  <p className="mt-2 text-lg font-semibold text-[#2f1a0b]">{highlight.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6f472b]">{highlight.tip}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-orange-200/60 bg-white/70 p-6 text-[#53341c] shadow-inner shadow-white/60">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Affirmation</p>
              <p className="mt-3 text-lg leading-relaxed">{activeSegment.affirmation}</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b]">
            <span className="size-2 rounded-full bg-[#f97316]" />
            Daily Rhythm Glow
            <div className="h-px flex-1 bg-gradient-to-r from-[#f97316]/40 via-[#fb7185]/40 to-transparent" />
          </div>
          <div className="mt-4 h-3 w-full rounded-full bg-gradient-to-r from-[#fff1d6] via-[#ffe0f0] to-[#def5ff]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#f97316] via-[#fb7185] to-[#facc15] shadow-[0_0_20px_rgba(249,115,22,0.45)] transition-all duration-700"
              style={{ width: `${((activeIndex + 1) / segments.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
