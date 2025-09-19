import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { CareRoutineShowcase } from "components/CareRoutineShowcase"

const heroStats = [
  { value: "18", label: "licensed vet reviewers" },
  { value: "120+", label: "evidence-based briefs" },
  { value: "365", label: "days of care routines" },
]

const pagePreviews = [
  {
    title: "Nutrition",
    href: "/diet",
    description:
      "Plan hay, pellets, and produce servings with vitamin C maths checked by exotic veterinary nutritionists.",
    accent: "from-[#ffe7c2]/80 via-[#ffdfe4]/70 to-[#dff2ff]/70",
    cta: "Explore balanced plates",
  },
  {
    title: "Habitat",
    href: "/habitat",
    description:
      "Build C&C layouts, bedding layers, and cleaning rhythms that meet welfare standards and smell fresh.",
    accent: "from-[#fff1d6]/75 via-[#fde7ff]/65 to-[#d7f4ff]/65",
    cta: "Design a sanctuary",
  },
  {
    title: "Health",
    href: "/health",
    description:
      "Use vet-authored checklists for daily observation, preventive appointments, and emergency readiness.",
    accent: "from-[#ffe9d6]/80 via-[#fce7f3]/70 to-[#dff6ff]/65",
    cta: "Protect their wellness",
  },
  {
    title: "Enrichment",
    href: "/enrichment",
    description:
      "Curate floor-time quests, foraging games, and calm bonding rituals tailored to different energy levels.",
    accent: "from-[#fff2d9]/75 via-[#ffe2f4]/70 to-[#dff7ff]/60",
    cta: "Spark daily joy",
  },
  {
    title: "Adoption",
    href: "/adoption",
    description:
      "Prepare your home, find reputable rescues, and create gentle introductions that keep new herd mates safe.",
    accent: "from-[#ffe8d0]/80 via-[#ffdfe9]/70 to-[#e0f5ff]/65",
    cta: "Start with confidence",
  },
]

const principles = [
  {
    title: "Vet approved",
    details: "All care frameworks are reviewed by small-mammal veterinarians with hands-on guinea pig caseloads.",
  },
  {
    title: "Welfare first",
    details: "We prioritise natural behaviours, ample space, fibre-rich diets, and stress prevention over gimmicks.",
  },
  {
    title: "Evidence led",
    details: "Guides cite current exotic medicine literature, rescue best practices, and the House Rabbit Society standards adapted for cavies.",
  },
]

export const metadata: Metadata = {
  title: "Guineaology — Vet-approved Guinea Pig Care Library",
  description:
    "Discover vet-reviewed guides for guinea pig nutrition, housing, health checks, and enrichment. Guineaology keeps guardians confident with accurate, friendly support.",
  openGraph: {
    title: "Guineaology — Vet-approved Guinea Pig Care Library",
    description:
      "From daily routines to emergency planning, explore playful yet precise guinea pig care resources reviewed by exotic vets.",
    type: "website",
    url: "https://guineaology.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guineaology — Vet-approved Guinea Pig Care Library",
    description:
      "Interactive tools and compassionate guidance make caring for guinea pigs joyful, accurate, and stress-free.",
  },
}

export default function HomePage() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-24 pt-16 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-soft-grid opacity-30" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff9ec] via-[#ffe8d6] to-[#ffe0f4] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-16 top-12 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/20 via-[#fb7185]/20 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-6 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#c1e9ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr,0.95fr]">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              <span className="text-lg">✅</span> Vet-reviewed for guardians
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-6xl">
              Compassionate, accurate care for guinea pigs lives here.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Guineaology distills exotic veterinary medicine into colourful, approachable guides. Follow interactive routines, build better habitats, and understand what every squeak is saying.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/diet" className="border-0 bg-gradient-to-r from-[#f97316] via-[#fb7185] to-[#facc15] text-[#2c190a] shadow-lg shadow-[#f97316]/40">
                Start with nutrition
              </Button>
              <Button
                href="/health"
                intent="secondary"
                className="border-orange-300/70 bg-white/60 text-[#b6662b] hover:bg-gradient-to-r hover:from-[#ffe7c2] hover:via-[#ffdfe4] hover:to-[#dff2ff] hover:text-[#2c190a]"
              >
                Review health signals
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/60 bg-white/80 px-6 py-5 text-[#563318] shadow-inner shadow-white/60"
                >
                  <p className="text-3xl font-semibold text-[#2c190a]">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#b6662b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative isolate -mx-4 rounded-[2.75rem] border border-white/50 bg-white/60 px-6 py-8 shadow-honey backdrop-blur-2xl md:mx-0 md:px-10">
            <div className="absolute inset-x-12 -top-16 h-32 rounded-full bg-gradient-to-r from-[#f97316]/25 via-[#fb7185]/20 to-[#facc15]/25 blur-3xl" />
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-xl font-semibold text-[#2f1a0b]">Quick habitat audit</p>
                <span className="rounded-full bg-[#fde68a]/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a5526]">
                  3 min checklist
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">Space</p>
                  <p className="mt-2 text-lg font-semibold text-[#2f1a0b]">≥ 7.5 sq ft for 2 pigs</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6f472b]">Scale up by 3 sq ft per additional pig to maintain smooth social flow.</p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">Temperature</p>
                  <p className="mt-2 text-lg font-semibold text-[#2f1a0b]">18–24 °C</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6f472b]">Avoid sudden shifts; add ceramic tiles or snuggle sacks for comfort.</p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">Hay access</p>
                  <p className="mt-2 text-lg font-semibold text-[#2f1a0b]">Unlimited timothy/orchard</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6f472b]">Two hay stations reduce guarding and support gut motility.</p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">Observation</p>
                  <p className="mt-2 text-lg font-semibold text-[#2f1a0b]">Log weights weekly</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6f472b]">Stable weights signal thriving pigs; changes over 30 g deserve a vet call.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50">
            Pathways
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Choose the guide that fits today's question.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Each section dives deep with printable checklists, calculators, and animations so you can absorb complex care in a gentle, friendly way.
          </p>
        </div>
        <div className="lg:col-span-3 grid gap-4">
          {pagePreviews.map((preview) => (
            <a
              key={preview.href}
              href={preview.href}
              className={`group relative flex flex-col gap-3 overflow-hidden rounded-3xl border border-orange-200/70 bg-white/70 p-6 shadow-lg shadow-white/40 transition hover:-translate-y-1 hover:shadow-honey`}
            >
              <div className={`pointer-events-none absolute inset-0 -z-10 opacity-60 bg-gradient-to-r ${preview.accent}`} />
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">{preview.title}</p>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </div>
              <p className="text-lg font-semibold text-[#2f1a0b]">{preview.description}</p>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5527]">{preview.cta}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-white/75 p-10 shadow-honey backdrop-blur-2xl md:p-16">
        <div className="pointer-events-none absolute -left-10 top-0 size-40 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/20 via-[#fb7185]/20 to-[#facc15]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 bottom-0 size-44 animate-float-medium rounded-full bg-gradient-to-br from-[#d9f5ff]/30 via-[#ffe7d6]/30 to-[#fcd6ff]/30 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50">
              Daily rhythm
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Follow the routine exotic vets rely on to spot trouble early.</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#583518]">
              Tap through each portion of the day to learn what to feed, what to clean, and which behaviours deserve a closer look.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-inner shadow-white/60">
            <CareRoutineShowcase />
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/60 bg-gradient-to-br from-[#fff2d9] via-[#ffe3f2] to-[#dff5ff] p-10 shadow-honey md:grid-cols-3 md:gap-10 md:p-14">
        {principles.map((principle) => (
          <div key={principle.title} className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/70 p-6 shadow-lg shadow-white/40">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">{principle.title}</p>
            <p className="text-lg leading-relaxed text-[#2f1a0b]">{principle.details}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/70 bg-white/75 p-10 shadow-honey backdrop-blur-2xl md:grid-cols-[1fr,1.2fr] md:gap-12 md:p-16">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50">
            Guardian community
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Built with rescues, behaviourists, and veterinary nurses.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Guineaology's knowledge base is co-written with rescuers and veterinary nurses so it reflects real-world cases: bonded pairs, chronic illnesses, and newly adopted pigs.
          </p>
          <ul className="mt-6 space-y-3 text-[#5b3a20]">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">1</span>
              <span>Monthly webinars with exotic vets answering guardian questions live.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">2</span>
              <span>Printable care logs and medication trackers to share during appointments.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">3</span>
              <span>Rescue partnerships that highlight pigs needing homes and educate adopters.</span>
            </li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/70 bg-gradient-to-br from-[#ffe8d0] via-[#ffdff2] to-[#dff4ff] p-6 text-[#2f1a0b] shadow-lg shadow-white/40">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold">{stat.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5b3a20]">Each figure reflects resources built in collaboration with qualified professionals.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
