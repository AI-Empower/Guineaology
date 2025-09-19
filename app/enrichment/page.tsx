import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { EnrichmentPlaylist } from "components/EnrichmentPlaylist"

const forageIdeas = [
  {
    title: "Snuffle mats",
    detail: "Hide bell pepper strips, cilantro, and hay strands for natural foraging behaviour.",
  },
  {
    title: "Forage boxes",
    detail: "Fill a low cardboard box with paper strips and scatter pellets to encourage digging.",
  },
  {
    title: "Tunnel highways",
    detail: "Link cardboard tunnels and fleece forests to create safe chase routes.",
  },
  {
    title: "Scent swaps",
    detail: "Rotate safe herbs or fleece squares between pigs to build positive associations before bonding.",
  },
]

const soundTips = [
  "Soft classical music or nature sounds at low volume can mask sudden household noises.",
  "Avoid ultrasonic devices and loud TV bass near the habitat—they can stress sensitive ears.",
  "Use a consistent verbal cue before lifting pigs so they anticipate handling.",
]

export const metadata: Metadata = {
  title: "Guineaology Enrichment — Build Confidence and Joy",
  description:
    "Design play sessions, floor-time quests, and sensory enrichment that meet guinea pigs' behavioural needs and strengthen your bond.",
}

export default function EnrichmentPage() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-soft-grid opacity-20" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff4e6] via-[#ffe1f2] to-[#e0f7ff] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-14 top-10 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/25 via-[#fb7185]/25 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#dff5ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />
        <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              🎠 Enrichment lab
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-5xl">
              Turn floor time into trust-building adventures.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Whether you're easing in a shy rescue or entertaining a zoomie herd, these playlists, forage stations, and soundscapes keep brains and bodies buzzing in safe ways.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#playlist">Pick a play style</Button>
              <Button href="/habitat" intent="secondary" className="bg-white/70 text-[#b6662b]">
                Refresh the habitat
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/60 bg-white/75 p-6 shadow-inner shadow-white/60 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Playtime safety</p>
            <ul className="mt-4 space-y-3 text-[#5b3a20]">
              <li>Use non-slip rugs or foam mats during floor time to protect knees and hocks.</li>
              <li>Always supervise interactions with children and other pets.</li>
              <li>Offer water and hay stations within arm's reach so pigs can refuel.</li>
              <li>End sessions on a calm note—snacks and gentle strokes build positive associations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="playlist" className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#fff0db] via-[#ffe4f3] to-[#dff5ff] opacity-70 blur-3xl" />
        <EnrichmentPlaylist />
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/60 bg-white/75 p-10 shadow-honey md:grid-cols-2 md:gap-12 md:p-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Forage setups to rotate weekly</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Variety keeps enrichment novel. Swap in different textures and heights each weekend to prevent boredom.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {forageIdeas.map((idea) => (
              <div key={idea.title} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/50">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c4722d]">{idea.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#5b3a20]">{idea.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Soundscapes & cues</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Sound is a big part of prey-species comfort. Use gentle audio cues to signal upcoming events and mask household noise.
          </p>
          <ul className="mt-6 space-y-3 text-[#5b3a20]">
            {soundTips.map((tip) => (
              <li key={tip} className="flex items-start gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">
                  ♪
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
