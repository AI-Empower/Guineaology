"use client"

import { useMemo, useState } from "react"

type WellnessMetric = {
  label: string
  value: string
  percent: number
}

type WellnessTopic = {
  id: string
  label: string
  icon: keyof typeof topicIcons
  tagline: string
  description: string
  essentials: string[]
  cues: string
  metrics: WellnessMetric[]
}

function IconDaily(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx={11} cy={11} r={6} strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 16l4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v3l2 1" />
    </svg>
  )
}

function IconPreventive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6m12-6v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6l3 4H6l3-4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6l3-4H6l3 4Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6" />
    </svg>
  )
}

function IconEmergency(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 3 19h18L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
    </svg>
  )
}

const topicIcons = {
  daily: IconDaily,
  preventive: IconPreventive,
  emergency: IconEmergency,
} as const

const topics: WellnessTopic[] = [
  {
    id: "daily",
    label: "Daily monitoring",
    icon: "daily",
    tagline: "Scan behaviour, breathing, and output in minutes a day",
    description:
      "Routine observation is the best early-warning system. Watch how they move, listen for new sounds, and track input versus output so your vet has reliable data if something shifts.",
    essentials: [
      "Log weights at least weekly—more often for seniors or pigs recovering from illness.",
      "Check both water sources daily for flow, debris, and lip sores.",
      "Note pellet, hay, and veggie intake for each pig to catch subtle drops.",
      "Inspect droppings for size, moisture, and shape during spot cleaning.",
    ],
    cues: "Call your exotics vet promptly for noisy breathing, refusing food, crusty eyes, or any pig sitting puffed up for more than an hour.",
    metrics: [
      { label: "Weight stability", value: "±30 g weekly", percent: 90 },
      { label: "Hydration check", value: "Bottles & bowls clear", percent: 100 },
      { label: "Dropping quality", value: "Firm, even ovals", percent: 95 },
    ],
  },
  {
    id: "preventive",
    label: "Preventive care",
    icon: "preventive",
    tagline: "Partner with an exotics vet for proactive wellness",
    description:
      "Annual exams, targeted diagnostics, and regular grooming keep small issues from snowballing. Establish a relationship with a cavy-savvy clinic before you ever face an emergency.",
    essentials: [
      "Schedule a full physical once a year; twice yearly for pigs over 5 years.",
      "Request a dental check and molar trim if you notice weight loss or drooling.",
      "Clip nails every 3–4 weeks, supporting the quick with styptic powder on hand.",
      "Discuss parasite prevention when adopting from outdoor enclosures or rescues.",
    ],
    cues: "Keep a shared binder with vet reports, medication dosages, and weight charts so every caregiver can relay accurate history.",
    metrics: [
      { label: "Annual exam", value: "1 exotic vet visit", percent: 100 },
      { label: "Dental review", value: "Every 8–12 weeks", percent: 85 },
      { label: "Parasite screen", value: "Quarterly check", percent: 80 },
    ],
  },
  {
    id: "emergency",
    label: "Emergency prep",
    icon: "emergency",
    tagline: "Build a plan long before you need to use it",
    description:
      "Know the nearest 24-hour exotics hospital, pack a go-bag, and stock critical care formula. Acting within hours can save a guinea pig experiencing gut stasis or respiratory distress.",
    essentials: [
      "Keep contact details for primary and backup exotic vets on the fridge and in your phone.",
      "Maintain an emergency kit: syringes, critical care powder, probiotics, thermometer, and clean towels.",
      "Practice transferring pigs into a secure carrier so you stay calm during real emergencies.",
      "Monitor for red-flag symptoms: refusal to eat for 4 hours, no droppings, laboured breathing, or a bloated abdomen.",
    ],
    cues: "If your pig stops eating or pooping, treats or home remedies are not enough—seek veterinary care immediately.",
    metrics: [
      { label: "Critical care stocked", value: "Fresh within 6 mo", percent: 100 },
      { label: "Carrier ready", value: "Lined & labelled", percent: 92 },
      { label: "Response time", value: "< 1 hr to vet", percent: 75 },
    ],
  },
]

export function WellnessTabs() {
  const fallbackTopic = topics[0]

  if (!fallbackTopic) {
    throw new Error("WellnessTabs requires at least one topic")
  }

  const [activeTopicId, setActiveTopicId] = useState<string>(fallbackTopic.id)

  const activeTopic = useMemo<WellnessTopic>(
    () => topics.find((topic) => topic.id === activeTopicId) ?? fallbackTopic,
    [activeTopicId, fallbackTopic],
  )

  const ActiveIcon = topicIcons[activeTopic.icon]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {topics.map((topic) => {
          const isActive = topic.id === activeTopic.id
          const Icon = topicIcons[topic.icon]
          const baseClasses =
            "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
          const activeClasses = " border-strong bg-surface text-heading shadow-soft"
          const inactiveClasses = " border-subtle bg-surface-muted text-primary hover:border-strong hover:bg-surface"

          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setActiveTopicId(topic.id)}
              className={baseClasses + (isActive ? activeClasses : " " + inactiveClasses)}
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon className="size-4.5" />
              </span>
              {topic.label}
            </button>
          )
        })}
      </div>

      <div className="rounded-3xl border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-subtle bg-surface-muted px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-soft">
              <ActiveIcon className="size-4" /> Wellness script
            </div>
            <h3 className="font-display text-3xl font-semibold text-heading md:text-4xl">{activeTopic.tagline}</h3>
            <p className="text-lg leading-relaxed text-primary">{activeTopic.description}</p>

            <ul className="grid gap-4 text-base text-primary sm:grid-cols-2">
              {activeTopic.essentials.map((essential) => (
                <li key={essential} className="rounded-3xl border border-subtle bg-surface-muted px-4 py-4">
                  {essential}
                </li>
              ))}
            </ul>

            <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5 text-primary">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Vet cue</p>
              <p className="mt-3 text-base leading-relaxed">{activeTopic.cues}</p>
            </div>
          </div>

          <div className="grid gap-5">
            {activeTopic.metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-soft">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-heading">{metric.value}</p>
                <div className="mt-4 h-2.5 w-full rounded-full bg-surface">
                  <div
                    className="h-full rounded-full bg-[color:var(--color-accent)] transition-all"
                    style={{ width: `${Math.min(100, Math.max(0, metric.percent))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
