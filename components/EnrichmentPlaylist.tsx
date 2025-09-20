"use client"

import { useMemo, useState } from "react"

type Playlist = {
  id: string
  label: string
  icon: keyof typeof playlistIcons
  description: string
  environment: string
  duration: string
  activities: string[]
  cue: string
}

function IconCalm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0 1 12.9-6.2L20 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 0 1-12.9 6.2L4 20" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
    </svg>
  )
}

function IconCompass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx={12} cy={12} r={9} strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-2 6-6 2 2-6 6-2Z" />
    </svg>
  )
}

function IconSpark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.6 7l3.2 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.2 15l3.2 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.6 17l3.2-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.2 9l3.2-2" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  )
}

const playlistIcons = {
  calm: IconCalm,
  curious: IconCompass,
  energetic: IconSpark,
} as const

const playlists: Playlist[] = [
  {
    id: "calm",
    label: "Calming comfort",
    icon: "calm",
    description: "For shy pigs or post-op recovery. Focus on gentle textures, slow breathing, and predictable touch cues.",
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
    icon: "curious",
    description: "Great for young or newly bonded pairs learning to trust their humans.",
    environment: "Playpen with tunnels, step platforms, and two hay piles",
    duration: "20 minutes",
    activities: [
      "Scatter low-sugar veggies across a snuffle mat to encourage foraging.",
      "Add cardboard tunnels with two exits so pigs never feel trapped.",
      "Introduce a verbal cue before lifting pigs for lap time.",
    ],
    cue: "Confident pigs will popcorn, stretch, and share hay. Regress if you see teeth chattering or chasing.",
  },
  {
    id: "energetic",
    label: "Energetic adventurers",
    icon: "energetic",
    description: "For high-energy herds that need obstacles and mental puzzles to stay engaged.",
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
  const fallbackPlaylist = playlists[0]

  if (!fallbackPlaylist) {
    throw new Error("EnrichmentPlaylist requires at least one playlist")
  }

  const [activeId, setActiveId] = useState(fallbackPlaylist.id)

  const activePlaylist = useMemo<Playlist>(
    () => playlists.find((playlist) => playlist.id === activeId) ?? fallbackPlaylist,
    [activeId, fallbackPlaylist],
  )

  const ActiveIcon = playlistIcons[activePlaylist.icon]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-3">
        {playlists.map((playlist) => {
          const isActive = playlist.id === activePlaylist.id
          const Icon = playlistIcons[playlist.icon]
          const baseClasses =
            "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
          const activeClasses = " border-strong bg-surface text-heading shadow-soft"
          const inactiveClasses = " border-subtle bg-surface-muted text-primary hover:border-strong hover:bg-surface"

          return (
            <button
              key={playlist.id}
              type="button"
              onClick={() => setActiveId(playlist.id)}
              className={baseClasses + (isActive ? activeClasses : " " + inactiveClasses)}
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon className="size-4.5" />
              </span>
              {playlist.label}
            </button>
          )
        })}
      </div>

      <div className="rounded-3xl border border-subtle bg-surface px-6 py-6 shadow-soft sm:px-8 sm:py-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-subtle bg-surface-muted px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-soft">
              <ActiveIcon className="size-4" /> Session overview
            </div>
            <h3 className="font-display text-3xl font-semibold text-heading md:text-4xl">{activePlaylist.label}</h3>
            <p className="text-lg leading-relaxed text-primary">{activePlaylist.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Environment</p>
                <p className="mt-3 text-base leading-relaxed text-primary">{activePlaylist.environment}</p>
              </div>
              <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">Duration</p>
                <p className="mt-3 text-base leading-relaxed text-primary">{activePlaylist.duration}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {activePlaylist.activities.map((activity) => (
              <div key={activity} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5 shadow-soft">
                <p className="text-sm leading-relaxed text-primary">{activity}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5 text-primary">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Safety cue</p>
              <p className="mt-3 text-base leading-relaxed">{activePlaylist.cue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
