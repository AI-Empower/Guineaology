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
  icon: keyof typeof segmentIcons
  summary: string
  headline: string
  description: string
  highlights: SegmentHighlight[]
  checklist: string[]
  affirmation: string
}

function IconSunrise(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14a6 6 0 0 1 12 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 9.5 7 11" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 9.5 17 11" />
    </svg>
  )
}

function IconMidday(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12c4-6 10-8 14-4-1 6-6 11-10 9-3-1-4-4-4-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 13l-3 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 9.5l1.5-1.5" />
    </svg>
  )
}

function IconTwilight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10c0 4 3 7 6 7s6-3 6-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7c1.5-2 4.5-2 6 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 7c0.9-1.2 2.4-1.2 3.5 0" />
    </svg>
  )
}

function IconMoonlight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 15.5A8.5 8.5 0 0 1 9 4.5 7 7 0 0 0 12 20a8.5 8.5 0 0 0 8-4.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18h3" />
    </svg>
  )
}

const segmentIcons = {
  sunrise: IconSunrise,
  midday: IconMidday,
  twilight: IconTwilight,
  moonlight: IconMoonlight,
} as const

const segments: CareSegment[] = [
  {
    id: "sunrise",
    label: "Sunrise health check",
    icon: "sunrise",
    summary: "A calm scan before breakfast keeps every herd member comfortable.",
    headline: "Start the day with a full-body once-over",
    description:
      "Catch subtle changes while your guinea pigs are most alert. Five unrushed minutes let you note weight trends, breathing, and appetite before the day gets busy.",
    highlights: [
      {
        title: "Ambient targets",
        value: "18-24 deg C | 40-70% RH",
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
        tip: "Record weights weekly - more than +/-30 g in a week warrants a vet call.",
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
    label: "Midday reset",
    icon: "midday",
    summary: "Ventilate the habitat, tidy high-traffic zones, and add low-stress enrichment.",
    headline: "Keep the environment clean and confidence high",
    description:
      "Short, predictable resets maintain good air quality and hygiene. Rotate hideys, brush debris from fleece, and encourage gentle movement to prevent boredom and pressure sores.",
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
        value: "10-15min",
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
    label: "Evening salad service",
    icon: "twilight",
    summary: "Serve vitamin C-rich salads and complete your daily health log before lights dim.",
    headline: "Anchor nutrition with a varied plate",
    description:
      "Aim for one packed cup of leafy greens per pig each day. Combine romaine, cilantro, bell pepper, and rotating herbs so their gut stays balanced and their immune system supported.",
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
        tip: "Watch for favouring one side or dropping food - both can signal dental pain.",
      },
    ],
    checklist: [
      "Rinse and dry produce to remove pesticide residue and avoid tummy upsets.",
      "Log each pig's appetite, droppings, and any unusual sounds or behaviours.",
      "Refresh hay piles so they have unlimited fibre overnight.",
    ],
    affirmation: "Balanced salads and attentive notes keep your care team in the loop between visits.",
  },
  {
    id: "moonlight",
    label: "Lights-out wind down",
    icon: "moonlight",
    summary: "Dim the room, secure play areas, and make sure every pig has a dry, cosy sleeping zone.",
    headline: "Settle the herd and prepare for the overnight stretch",
    description:
      "Quiet lighting and tidy burrows reduce startle responses. Check heating pads, remove tripping hazards, and offer a final handful of hay so the herd rests with full bellies.",
    highlights: [
      {
        title: "Lighting",
        value: "Soft, indirect",
        tip: "Use warm lamps or switch to a night setting to avoid harsh contrasts at bedtime.",
      },
      {
        title: "Security check",
        value: "Latches & pen edges",
        tip: "Confirm pens are clipped, cords are covered, and no hidey has collapsed.",
      },
      {
        title: "Night forage",
        value: "Small hay mound",
        tip: "Leave an extra hay pile near each pig so high-ranking herd mates do not guard resources.",
      },
    ],
    checklist: [
      "Shake out bedding inside hideys and replace any damp liners.",
      "Confirm water bottles are flowing and bowls are free from debris.",
      "Note energy levels and breathing patterns before the room goes quiet.",
    ],
    affirmation: "Predictable evenings signal safety and help prey animals sleep deeply.",
  },
]

export function CareRoutineShowcase() {
  const [activeSegmentId, setActiveSegmentId] = useState(segments[0]?.id ?? "")
  const activeIndex = useMemo(() => segments.findIndex((segment) => segment.id === activeSegmentId), [activeSegmentId])
  const safeIndex = activeIndex >= 0 ? activeIndex : 0
  const activeSegment = segments[safeIndex]

  if (!activeSegment) {
    throw new Error("CareRoutineShowcase requires at least one segment")
  }

  const ActiveIcon = segmentIcons[activeSegment.icon]

  return (
    <section className="rounded-3xl border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[0.9fr,1.1fr] lg:gap-8">
        <div className="space-y-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Daily routine</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-heading">Choose a moment in the care day.</h3>
            <p className="mt-3 text-sm leading-relaxed text-soft">
              Tap through the rhythm to see what to check, refresh, and record. It works as a quick primer for new helpers too.
            </p>
          </div>

          <div className="space-y-2">
            {segments.map((segment) => {
              const Icon = segmentIcons[segment.icon]
              const isActive = segment.id === activeSegment.id
              const baseClasses =
                "w-full rounded-2xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
              const activeClasses = " border-strong bg-surface text-heading shadow-soft"
              const inactiveClasses = " border-subtle bg-surface-muted text-primary hover:border-strong hover:bg-surface"

              return (
                <button
                  type="button"
                  key={segment.id}
                  onClick={() => setActiveSegmentId(segment.id)}
                  className={baseClasses + (isActive ? activeClasses : " " + inactiveClasses)}
                >
                  <span className="flex items-start gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Icon className="size-5" />
                    </span>
                    <span className="space-y-1">
                      <span className="block font-display text-base font-semibold">{segment.label}</span>
                      <span className="block text-sm leading-relaxed text-soft">{segment.summary}</span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-subtle bg-surface-muted/80 p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <ActiveIcon className="size-5" />
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Now viewing</span>
            </div>
            <h4 className="font-display text-2xl font-semibold text-heading">{activeSegment.headline}</h4>
            <p className="text-sm leading-relaxed text-primary">{activeSegment.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {activeSegment.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-subtle bg-surface px-4 py-4 transition hover:border-strong hover:bg-surface"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{highlight.title}</p>
                <p className="mt-2 text-base font-semibold text-heading">{highlight.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-soft">{highlight.tip}</p>
              </div>
            ))}
          </div>

          <ul className="space-y-2">
            {activeSegment.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface px-4 py-3 text-sm leading-relaxed text-primary"
              >
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent">↣</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-subtle bg-surface px-4 py-4 text-sm leading-relaxed text-primary">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent">Affirmation</p>
            <p className="mt-2 text-primary">{activeSegment.affirmation}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">
              <span className="size-2 rounded-full bg-[color:var(--color-accent)]" />
              Daily rhythm progress
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-[color:var(--color-accent)] transition-all"
                style={{ width: ((safeIndex + 1) / segments.length) * 100 + "%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
