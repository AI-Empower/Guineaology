"use client"

import { useMemo, useState } from "react"

type Playlist = {
  id: string
  label: string
  emoji: string
  description: string
  backdrop: string
  environment: string
  duration: string
  activities: string[]
  cue: string
}

const playlists: Playlist[] = [
  {
    id: "calm",
    label: "Calming comfort",
    emoji: "🌙",
    description: "For shy pigs or post-op recovery. Focus on gentle textures, slow breathing, and predictable touch cues.",
    backdrop: "from-[#e0f2fe]/80 via-[#fce7f7]/70 to-[#fff7e6]/70",
    environment: "Dim lamp, fleece tunnel, warm lap pad",
    duration: "10–12 minutes",
    activities: [
      "Create a fleece forest with two hideys touching so pigs feel hidden.",
      "Offer hand-fed sprigs of dill or wheatgrass while speaking softly.",
      "Massage shoulders with one finger strokes; stop if breathing quickens.",
    ],
    cue: "Listen for quiet chutters and relaxed chewing. If a pig freezes, pause and try again later.",
  },
  {
    id: "curious",
    label: "Curious explorers",
    emoji: "🧭",
    description: "Great for young or newly bonded pairs learning to trust their humans.",
    backdrop: "from-[#ffe7d6]/80 via-[#f8e1ff]/70 to-[#d7f6ff]/70",
    environment: "Playpen with tunnels, step platforms, and two hay piles",
    duration: "20 minutes",
    activities: [
      "Scatter low-sugar veggies across a snuffle mat to encourage foraging.",
      "Add cardboard tunnels with two exits so pigs never feel trapped.",
      "Introduce a verbal cue like 'adventure' before lifting pigs for lap time.",
    ],
    cue: "Confident pigs will popcorn, stretch, and share hay. Regress if you see teeth chattering or chasing.",
  },
  {
    id: "energetic",
    label: "Energetic adventurers",
    emoji: "🎉",
    description: "For high-energy herds that need obstacles and mental puzzles to stay engaged.",
    backdrop: "from-[#fde68a]/85 via-[#fb7185]/70 to-[#fbcfe8]/70",
    environment: "Large floor time area with grids securing corners",
    duration: "30–40 minutes",
    activities: [
      "Build a veggie piñata by stuffing lettuce leaves with hay and hanging it low.",
      "Arrange a ramp-safe agility loop using folded fleece and low boxes.",
      "Hide pellets inside willow balls or paper bags for shredding enrichment.",
    ],
    cue: "End the session if pigs start squabbling, panting, or hiding for more than a minute.",
  },
]

export function EnrichmentPlaylist() {
  const [activeId, setActiveId] = useState(playlists[0]?.id ?? "calm")

  const activePlaylist = useMemo(
    () => playlists.find((playlist) => playlist.id === activeId) ?? playlists[0],
    [activeId],
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {playlists.map((playlist) => {
          const isActive = playlist.id === activePlaylist.id

          return (
            <button
              key={playlist.id}
              type="button"
              onClick={() => setActiveId(playlist.id)}
              className={`group inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/70 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5527] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-honey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 ${
                isActive ? "bg-gradient-to-r from-[#ffe7c2]/90 via-[#ffdfe4]/80 to-[#dff2ff]/80 text-[#3b2514] shadow-honey" : ""
              }`}
            >
              <span className="text-lg">{playlist.emoji}</span>
              {playlist.label}
            </button>
          )
        })}
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-orange-200/70 bg-white/80 p-8 shadow-honey backdrop-blur-2xl md:p-12">
        <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${activePlaylist.backdrop}`} />
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d] shadow-inner shadow-white/40">
              {activePlaylist.emoji} Session overview
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">{activePlaylist.label}</h3>
            <p className="mt-4 text-lg leading-relaxed text-[#5c3b1f]">{activePlaylist.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-inner shadow-white/50">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Environment</p>
                <p className="mt-3 text-base leading-relaxed text-[#5b3a20]">{activePlaylist.environment}</p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-inner shadow-white/50">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c4722d]">Duration</p>
                <p className="mt-3 text-base leading-relaxed text-[#5b3a20]">{activePlaylist.duration}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {activePlaylist.activities.map((activity) => (
              <div key={activity} className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-lg shadow-white/40 transition hover:-translate-y-1 hover:border-orange-200/80">
                <p className="text-sm leading-relaxed text-[#5b3a20]">{activity}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-orange-200/60 bg-white/80 p-6 shadow-inner shadow-white/70">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Safety cue</p>
              <p className="mt-3 text-base leading-relaxed text-[#5b3a20]">{activePlaylist.cue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
