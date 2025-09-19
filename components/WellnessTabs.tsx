"use client"

import { useMemo, useState } from "react"

type WellnessMetric = {
  label: string
  value: string
  percent: number
  accent: string
}

type WellnessTopic = {
  id: string
  label: string
  icon: string
  tagline: string
  description: string
  background: string
  essentials: string[]
  cues: string
  metrics: WellnessMetric[]
}

const topics: WellnessTopic[] = [
  {
    id: "daily",
    label: "Daily Monitoring",
    icon: "🔍",
    tagline: "Scan behaviour, breathing, and output in minutes a day",
    description:
      "Routine observation is the best early-warning system. Watch how they move, listen for new sounds, and track input versus output so your vet has reliable data if something shifts.",
    background: "from-[#fff5d7]/90 via-[#ffe4e1]/70 to-[#dff3ff]/70",
    essentials: [
      "Log weights at least weekly—more often for seniors or pigs recovering from illness.",
      "Check both water sources daily for flow, debris, and lip sores.",
      "Note pellet, hay, and veggie intake for each pig to catch subtle drops.",
      "Inspect droppings for size, moisture, and shape during spot cleaning.",
    ],
    cues: "Call your exotics vet promptly for noisy breathing, refusing food, crusty eyes, or any pig sitting puffed up for more than an hour.",
    metrics: [
      { label: "Weight stability", value: "±30 g weekly", percent: 90, accent: "from-[#f97316] via-[#fb7185] to-[#facc15]" },
      { label: "Hydration check", value: "Bottles & bowls clear", percent: 100, accent: "from-[#fb7185] via-[#f97316] to-[#fcd34d]" },
      { label: "Dropping quality", value: "Firm, even ovals", percent: 95, accent: "from-[#facc15] via-[#fb7185] to-[#f97316]" },
    ],
  },
  {
    id: "preventive",
    label: "Preventive Care",
    icon: "🩺",
    tagline: "Partner with an exotics vet for proactive wellness",
    description:
      "Annual exams, targeted diagnostics, and regular grooming keep small issues from snowballing. Establish a relationship with a cavy-savvy clinic before you ever face an emergency.",
    background: "from-[#fff0d6]/80 via-[#fde4ff]/70 to-[#d3f5ff]/60",
    essentials: [
      "Schedule a full physical once a year; twice yearly for pigs over 5 years.",
      "Request a dental check and molar trim if you notice weight loss or drooling.",
      "Clip nails every 3–4 weeks, supporting the quick with styptic powder on hand.",
      "Discuss parasite prevention when adopting from outdoor enclosures or rescues.",
    ],
    cues: "Keep a shared binder with vet reports, medication dosages, and weight charts so every caregiver can relay accurate history.",
    metrics: [
      { label: "Annual exam", value: "1 exotic vet visit", percent: 100, accent: "from-[#fb7185] via-[#f97316] to-[#facc15]" },
      { label: "Dental review", value: "Every 8–12 weeks", percent: 85, accent: "from-[#d8b4fe] via-[#fb7185] to-[#f97316]" },
      { label: "Parasite screen", value: "Quarterly check", percent: 80, accent: "from-[#f97316] via-[#fb7185] to-[#facc15]" },
    ],
  },
  {
    id: "emergency",
    label: "Emergency Prep",
    icon: "⚠️",
    tagline: "Build a plan long before you need to use it",
    description:
      "Know the nearest 24-hour exotics hospital, pack a go-bag, and stock critical care formula. Acting within hours can save a guinea pig experiencing gut stasis or respiratory distress.",
    background: "from-[#ffe9d6]/80 via-[#f8e1ff]/70 to-[#d7f6ff]/65",
    essentials: [
      "Keep contact details for primary and backup exotic vets on the fridge and in your phone.",
      "Maintain an emergency kit: syringes, critical care powder, probiotics, thermometer, and clean towels.",
      "Practice transferring pigs into a secure carrier so you stay calm during real emergencies.",
      "Monitor for red-flag symptoms: refusal to eat for 4 hours, no droppings, labored breathing, or a bloated abdomen.",
    ],
    cues: "If your pig stops eating or pooping, treats or home remedies are not enough—seek veterinary care immediately.",
    metrics: [
      { label: "Critical care stocked", value: "Fresh within 6 mo", percent: 100, accent: "from-[#facc15] via-[#fb7185] to-[#f97316]" },
      { label: "Carrier ready", value: "Lined & labelled", percent: 92, accent: "from-[#fb7185] via-[#f97316] to-[#fbcfe8]" },
      { label: "Response time", value: "< 1 hr to vet", percent: 75, accent: "from-[#f97316] via-[#fb7185] to-[#facc15]" },
    ],
  },
]

export function WellnessTabs() {
  const [activeTopicId, setActiveTopicId] = useState<string>(topics[0]?.id ?? "daily")

  const activeTopic = useMemo(
    () => topics.find((topic) => topic.id === activeTopicId) ?? topics[0],
    [activeTopicId],
  )

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {topics.map((topic) => {
          const isActive = topic.id === activeTopic.id

          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setActiveTopicId(topic.id)}
              className={`group inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5527] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${
                isActive ? "bg-gradient-to-r from-[#ffe7c2]/90 via-[#ffdfe4]/80 to-[#dff2ff]/80 text-[#3b2514] shadow-honey" : ""
              }`}
            >
              <span className="text-lg drop-shadow-sm">{topic.icon}</span>
              {topic.label}
            </button>
          )
        })}
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-orange-200/70 bg-white/80 p-8 shadow-honey backdrop-blur-2xl md:p-12">
        <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${activeTopic.background}`} />
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d] shadow-inner shadow-white/40">
              {activeTopic.icon} Wellness Script
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">{activeTopic.tagline}</h3>
            <p className="mt-4 text-lg leading-relaxed text-[#5c3b1f]">{activeTopic.description}</p>

            <ul className="mt-8 grid gap-4 text-base text-[#583518] sm:grid-cols-2">
              {activeTopic.essentials.map((essential) => (
                <li
                  key={essential}
                  className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-inner shadow-white/50 transition hover:border-orange-200/80"
                >
                  {essential}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl border border-orange-200/60 bg-white/80 p-6 text-[#53341c] shadow-inner shadow-white/70">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Vet cue</p>
              <p className="mt-3 text-lg leading-relaxed">{activeTopic.cues}</p>
            </div>
          </div>

          <div className="grid gap-5">
            {activeTopic.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-lg shadow-white/40 transition hover:-translate-y-1 hover:border-orange-200"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-[#2f1a0b]">{metric.value}</p>
                <div className="mt-4 h-2.5 w-full rounded-full bg-[#fff3da]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.accent} shadow-[0_0_15px_rgba(249,115,22,0.35)] transition-all duration-700`}
                    style={{ width: `${metric.percent}%` }}
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
