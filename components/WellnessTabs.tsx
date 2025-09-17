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
    id: "habitat",
    label: "Habitat Atmosphere",
    icon: "🏡",
    tagline: "Design a sanctuary that breathes, sparkles, and soothes",
    description:
      "Curate layers of fleece, ventilated lofts, and hideouts that honour herd hierarchies. Guineaology pairs spatial feng shui with scientific airflow guidance for calm, confident pigs.",
    background: "from-[#fff5d7]/90 via-[#ffe4e1]/70 to-[#dff3ff]/70",
    essentials: [
      "120 cm minimum floor run with two observation decks",
      "Dual hay bars to reduce queuing and encourage roaming",
      "Airflow triangle: front vent, side window, rear diffuser",
      "Night glow lantern dimmed to <5 lux for prey-species comfort",
    ],
    cues: "Listen for relaxed micro-rumbles and see loose, happy popcorns—your habitat energy is working.",
    metrics: [
      { label: "Space to roam", value: "92% optimised", percent: 92, accent: "from-[#f97316] via-[#fb7185] to-[#facc15]" },
      { label: "Air quality", value: "Allergen low", percent: 86, accent: "from-[#fb7185] via-[#f97316] to-[#fcd34d]" },
      { label: "Hideout harmony", value: "4 cozy zones", percent: 100, accent: "from-[#facc15] via-[#fb7185] to-[#f97316]" },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition Rituals",
    icon: "🥗",
    tagline: "Serve radiant plates that balance fibre, hydration, and joy",
    description:
      "Every menu is art-directed with seasonal produce, vitamin C heroes, and unlimited hay architectures. Guineaology's plating templates make healthy indulgence intuitive.",
    background: "from-[#fff0d6]/80 via-[#fde4ff]/70 to-[#d3f5ff]/60",
    essentials: [
      "70% orchard + timothy hay stacked in sunburst towers",
      "Daily salad matrix: leafy base, bright vit-C, crunch garnish",
      "Portion-coded ramekins to keep pairs peacefully sharing",
      "Weekly treat rotation featuring edible blooms and foraging boards",
    ],
    cues: "Happy chatter, consistent droppings, and enthusiastic veggie zooms are the green lights.",
    metrics: [
      { label: "Vitamin C coverage", value: "Perfect score", percent: 100, accent: "from-[#fb7185] via-[#f97316] to-[#facc15]" },
      { label: "Hydration", value: "Sparkling", percent: 88, accent: "from-[#d8b4fe] via-[#fb7185] to-[#f97316]" },
      { label: "Menu variety", value: "14 seasonal stars", percent: 94, accent: "from-[#f97316] via-[#fb7185] to-[#facc15]" },
    ],
  },
  {
    id: "enrichment",
    label: "Enrichment & Bonding",
    icon: "🎠",
    tagline: "Ignite play, language, and trust through multisensory quests",
    description:
      "Structured play missions transform floor time into immersive storytelling. Guineaology scripts teach you how to read micro-expressions and respond with tailored enrichments.",
    background: "from-[#ffe9d6]/80 via-[#f8e1ff]/70 to-[#d7f6ff]/65",
    essentials: [
      "Weekly floor time storyboard with five mini quests",
      "Call-and-response vocabulary to decode chirps and purrs",
      "DIY sensory lanes: cork bark, velvet mats, herbal sachets",
      "Two-person cuddle protocol with grounding breaths",
    ],
    cues: "Popcorning arcs, gentle teeth chatters, and soft slow blinks signal joyful security.",
    metrics: [
      { label: "Confidence blooms", value: "+78%", percent: 78, accent: "from-[#facc15] via-[#fb7185] to-[#f97316]" },
      { label: "Human-animal sync", value: "Heartbeats aligned", percent: 84, accent: "from-[#fb7185] via-[#f97316] to-[#fbcfe8]" },
      { label: "Floor time magic", value: "33 min avg", percent: 90, accent: "from-[#f97316] via-[#fb7185] to-[#facc15]" },
    ],
  },
]

export function WellnessTabs() {
  const [activeTopicId, setActiveTopicId] = useState<string>(topics[0]?.id ?? "habitat")

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
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Sensory cue</p>
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
