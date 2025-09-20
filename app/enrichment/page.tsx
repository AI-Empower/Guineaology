import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { EnrichmentPlaylist } from "components/EnrichmentPlaylist"
import { SourceList } from "components/SourceList"

const forageIdeas = [
  {
    title: "Snuffle mats",
    detail: "Hide pepper ribbons, herbs, and hay strands to trigger natural foraging scans.",
  },
  {
    title: "Forage boxes",
    detail: "Fill shallow boxes with shredded paper and scatter pellets so pigs dig and toss.",
  },
  {
    title: "Tunnel highways",
    detail: "Connect fleece forests and cardboard tunnels to create safe chase loops.",
  },
  {
    title: "Scent swaps",
    detail: "Rotate herbs or fleece squares between pigs to build positive association ahead of bonding.",
  },
]

const soundTips = [
  "Layer low-volume nature playlists to soften sudden household sounds.",
  "Avoid ultrasonic devices and heavy bass near the habitat to protect sensitive ears.",
  "Use a consistent verbal cue before handling so pigs anticipate gentle lifts.",
]

const playstyleHighlights = [
  {
    label: "Explorer",
    detail: "Scatter low hides, ramps, and snuffle zones for confident pigs who map every edge.",
  },
  {
    label: "Detective",
    detail: "Lay scent trails, paper bags, and peek windows for shy pigs to investigate at their tempo.",
  },
  {
    label: "Sprinter",
    detail: "Set foam runways with curved tunnels for zoomies, then finish with a calm forage pile.",
  },
]

const enrichmentSources = [
  {
    href: "https://resources.bestfriends.org/article/guinea-pig-care-guide",
    title: "Best Friends Animal Society - Guinea Pig Care Guide",
    description: "Rescue-tested enrichment rotations, floor-time safety advice, and bonding support.",
  },
  {
    href: "https://www.aspca.org/pet-care/small-pet-care/guinea-pig-care",
    title: "ASPCA - Guinea Pig Care",
    description: "Daily socialisation, enrichment, and handling tips to reduce stress.",
  },
  {
    href: "https://www.guinealynx.info/behavior.html",
    title: "Guinea Lynx - Behavior",
    description: "Behaviour cues, popcorning signals, and fear indicators to tailor play.",
  },
]

export const metadata: Metadata = {
  title: "Guinea Pig Care Enrichment - Play Guide",
  description:
    "Plan guinea pig play sessions, floor-time circuits, and sensory enrichment backed by welfare experts and seasoned guardians.",
}

export default function EnrichmentPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.75rem] border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-10 sm:py-12 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">
            Enrichment play guide
          </span>
          <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Turn floor time into relaxed, trust-building sessions your pigs look forward to.
          </h1>
          <p className="text-base leading-relaxed text-primary">
            Blend play, gentle scent work, and calm cooldowns so guinea pigs burn energy, strengthen bonds, and feel safe exploring.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#playlist">Open play planner</Button>
            <Button intent="secondary" href="/habitat">
              Go to habitat guide
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {playstyleHighlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-subtle bg-surface-muted px-4 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">Playtime safety</p>
          <ul className="space-y-3 text-sm leading-relaxed text-primary">
            <li>Lay non-slip carpets or foam mats to protect knees and hocks.</li>
            <li>Supervise every interaction with children or other pets.</li>
            <li>Stage water and hay within reach so pigs can refuel mid-quest.</li>
            <li>Close with calm strokes and snacks to cement positive associations.</li>
          </ul>
        </div>
      </section>

      <section id="playlist" className="rounded-[2.75rem] border border-subtle bg-surface px-4 py-6 shadow-soft sm:px-6 sm:py-8">
        <EnrichmentPlaylist />
      </section>

      <section className="grid gap-8 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Forage setups to rotate weekly</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Variety keeps enrichment fresh. Cycle these four setups to challenge minds and muscles while staying budget friendly.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {forageIdeas.map((idea) => (
              <div key={idea.title} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{idea.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-primary">{idea.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Soundscapes and cues</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Sound is a powerful safety signal for prey species. Craft a predictable audio environment so pigs anticipate fun instead of bracing for surprises.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary">
            {soundTips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-muted px-4 py-4">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  ↣
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SourceList heading="Enrichment references" sources={enrichmentSources} />
    </main>
  )
}
