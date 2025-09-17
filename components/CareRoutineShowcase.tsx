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
    label: "Sunrise Snuggles",
    emoji: "🌅",
    preview: "Gentle wake-ups, fresh hydration, and the first joyful wheeks of the day.",
    headline: "Welcome the day with warmth and curiosity",
    description:
      "Open the habitat to a cascade of natural light and soft rustling. A slow morning rhythm calms sensitive hearts and sets a reliable tone for your herd.",
    backdrop: "from-[#fff4d6]/90 via-[#ffe4ca]/75 to-[#ffd9f2]/70",
    highlights: [
      {
        title: "Habitat vibe",
        value: "21°C • 45% humidity",
        tip: "Lift the fleece loft and air the tunnels while maintaining a draft-free glow.",
      },
      {
        title: "Breakfast curation",
        value: "Butterhead lettuce + pepper medallions",
        tip: "Scatter-feed along two grazing lanes to prevent scrum piling.",
      },
      {
        title: "Morning enrichment",
        value: "Tunnel dash & gentle floor time",
        tip: "Create a fleece forest with hanging herbs to inspire zoomies.",
      },
    ],
    checklist: [
      "Swap in lukewarm water with a vitamin C drop for the ceramic sipper.",
      "Smooth the nesting fleece and refresh cuddle cups with dried calendula.",
      "Place hay pillows in two corners so shy piggies graze without jostling.",
    ],
    affirmation: "Predictable rituals melt away prey-species nerves—your calm energy is their sunrise.",
  },
  {
    id: "midday",
    label: "Midday Discovery",
    emoji: "🌿",
    preview: "Sensory play, hydration checks, and mindful bonding in the golden hours.",
    headline: "Keep curiosity humming through the afternoon",
    description:
      "Layer textures, aromas, and low-key adventure. Midday is perfect for social grooming sessions and reinforcing trust with soft voice cues.",
    backdrop: "from-[#fef3c7]/90 via-[#fce7f3]/70 to-[#d9f6ff]/60",
    highlights: [
      {
        title: "Climate tune",
        value: "20°C • 50% humidity",
        tip: "Float a frozen ceramic tile under fleece for subtle cooling.",
      },
      {
        title: "Snack tasting",
        value: "Cucumber ribbons + orchard hay tacos",
        tip: "Hide portions inside willow balls for intuitive foraging.",
      },
      {
        title: "Social sparkle",
        value: "Brushing & lap time",
        tip: "Pulse a calm playlist around 432 Hz to match relaxed heartbeats.",
      },
    ],
    checklist: [
      "Inspect water-line bubbles and wipe the spout to keep sipping effortless.",
      "Rotate hideouts so bolder pigs share the spotlight while timid friends explore.",
      "Introduce an herb bundle (dill, basil) for mindful nibbling enrichment.",
    ],
    affirmation: "Curated micro-adventures cultivate bravery and deepen the human-piggie bond.",
  },
  {
    id: "twilight",
    label: "Twilight Feast",
    emoji: "🌇",
    preview: "Bountiful salads, chorus-like wheeks, and shared gratitude before nightfall.",
    headline: "Transform dinner into a multisensory celebration",
    description:
      "Balance vitamin-rich veggies with aromatic hay towers. Twilight is ideal for weight checks and listening to the gentle cadence of content squeaks.",
    backdrop: "from-[#fde68a]/90 via-[#fb7185]/60 to-[#fbcfe8]/60",
    highlights: [
      {
        title: "Ambient glow",
        value: "Dimmed lights + golden lamp",
        tip: "Keep brightness soft to respect their twilight instincts.",
      },
      {
        title: "Signature salad",
        value: "Romaine, cilantro, cherry pepper petals",
        tip: "Layer textures—crisp, leafy, juicy—to engage every sense.",
      },
      {
        title: "Health ritual",
        value: "Quick weigh-in & paw check",
        tip: "Offer a blueberry reward to pair scales with positive memories.",
      },
    ],
    checklist: [
      "Fluff hay lofts and top with alpine orchard hay for a fragrant supper.",
      "Spot-clean habitats and replace soiled pads before evening coziness.",
      "Log daily weights and note mood shifts in your Guineaology journal.",
    ],
    affirmation: "Shared meals teach trust—every rustle is a choir of gratitude.",
  },
  {
    id: "moonlight",
    label: "Moonlight Cocoon",
    emoji: "🌙",
    preview: "Serene settles, gentle massages, and harmonised breathing for deep rest.",
    headline: "Guide them into a dreamy, protected night",
    description:
      "Nighttime cues should whisper safety. Diffuse lavender (pig-safe) nearby, lower ambient sounds, and let soft white noise mask sudden household clatter.",
    backdrop: "from-[#e0f2fe]/90 via-[#ede9fe]/70 to-[#ffe4e6]/60",
    highlights: [
      {
        title: "Serenity shield",
        value: "19°C • night breeze off",
        tip: "Drape a breathable linen canopy to dim lights without trapping heat.",
      },
      {
        title: "Dream treats",
        value: "Chamomile hay twist",
        tip: "Tuck into snuggle sacks to invite cozy nesting.",
      },
      {
        title: "Evening affirmations",
        value: "Forehead strokes & soft hums",
        tip: "Match their slow breathing to reassure anxious herd members.",
      },
    ],
    checklist: [
      "Secure playpen gates and set night-mode lighting to a lunar glow.",
      "Refresh bedding in favorite hideaways with plush cotton layers.",
      "Queue the overnight playlist of meadow ambience at low volume.",
    ],
    affirmation: "Wrap the night in serenity—restored piggies greet tomorrow with bright-eyed sparkle.",
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
                  {isActive ? "Now playing" : "Preview"}
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
