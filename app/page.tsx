import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { CareRoutineShowcase } from "components/CareRoutineShowcase"
import { WellnessTabs } from "components/WellnessTabs"

const highlightBadges = [
  "Vet-approved wellness rituals",
  "Plant-powered menus",
  "Sensory enrichment labs",
  "Mindful bonding scripts",
  "Habitat feng shui",
  "Real-time squeak decoder",
]

const heroStats = [
  { value: "12K+", label: "families guided" },
  { value: "98%", label: "happier wheeks" },
  { value: "24/7", label: "habitat hotline" },
]

const carePillars = [
  {
    title: "Wellness Blueprints",
    description:
      "Architect habitats with airy grids, plush textiles, and luminous cozy corners tuned to the heartbeat of prey species.",
    icon: "🛖",
    accent: "from-[#ffe7c5]/90 via-[#fff4d6]/80 to-[#fcd6ff]/60",
  },
  {
    title: "Nutrition Theatre",
    description:
      "Plate immersive, vitamin-rich banquets with seasonal palettes, hydration cascades, and mindful portion choreography.",
    icon: "🥕",
    accent: "from-[#fff0d6]/90 via-[#fde7f9]/70 to-[#dff4ff]/60",
  },
  {
    title: "Bonding Symphony",
    description:
      "Decode squeaks, purrs, and popcorn pirouettes with guided scripts that transform cuddle time into trust rituals.",
    icon: "🎶",
    accent: "from-[#ffe8d6]/90 via-[#ffe0f2]/70 to-[#d7f3ff]/60",
  },
  {
    title: "Sanctuary Science",
    description:
      "Blend vet-backed research, data dashboards, and intuitive design to keep every whisker vibrant and secure.",
    icon: "🧪",
    accent: "from-[#fff1d6]/90 via-[#ffdfe4]/70 to-[#e0f5ff]/60",
  },
]

const knowledgeTracks = [
  {
    name: "New Guardian Bootcamp",
    length: "4-week quest",
    description:
      "Launch with weekly missions covering habitat feng shui, temperament pairing, and reading micro-body language cues.",
    modules: ["Habitat flow mapping", "Vet-trusted menu planner", "Confidence rituals"],
    accent: "from-[#ffe7c2] via-[#ffd4f3] to-[#d7f0ff]",
  },
  {
    name: "Holistic Wellness Lab",
    length: "Ongoing membership",
    description:
      "Dive into monthly masterclasses, live Q&As with exotic vets, and downloadable trackers for weight, mood, and activity.",
    modules: ["Seasonal health labs", "Sound therapy playlists", "Emergency calm kits"],
    accent: "from-[#fff1d6] via-[#ffe0f0] to-[#dff5ff]",
  },
  {
    name: "Guineaology Studio",
    length: "Creative playground",
    description:
      "Experiment with enrichment builds, DIY forage boards, and photo-worthy interior styling for every habitat size.",
    modules: ["Sensory lane blueprints", "Hidey home couture", "Bonding story prompts"],
    accent: "from-[#ffe4c4] via-[#ffd9f5] to-[#d8f3ff]",
  },
]

const testimonials = [
  {
    quote:
      "Our piggies went from cautious to joyful meteorites. The routines, the ambiance, even the playlists—Guineaology made it effortless to keep them thriving.",
    name: "Mira & The Cinnamon Herd",
    title: "Design-loving guardians",
  },
  {
    quote:
      "The wellness lab finally taught me how to read every squeak. Vet visits are calmer, and our habitat glows like a boutique hotel.",
    name: "Jamal",
    title: "First-time guardian",
  },
  {
    quote:
      "I recommend Guineaology to every adopter—data-driven care wrapped in warmth, with daily rituals that make my herd feel adored.",
    name: "Dr. Elaine Soo",
    title: "Exotic vet partner",
  },
]

const quickFacts = [
  { title: "Ambient bliss", description: "Temperature, humidity, and light recipes tailored to each piggy's chronotype." },
  { title: "Flavour alchemy", description: "Menu matrix calculates 14 rotating salad archetypes with vitamin C sparkle." },
  { title: "Joyful analytics", description: "Mood tracker transforms squeaks into visuals you can share with your vet." },
]

export const metadata: Metadata = {
  title: "Guineaology — Mind-blowing Guinea Pig Care Universe",
  description:
    "Guineaology is the ultimate sanctuary for guinea pig lovers—experience immersive rituals, data-driven wellness, and enchanting habitats inspired by your brightest squeaks.",
  openGraph: {
    title: "Guineaology — Mind-blowing Guinea Pig Care Universe",
    description:
      "Immerse yourself in interactive care plans, enrichment labs, and sensory habitat design for every beloved guinea pig.",
    type: "website",
    url: "https://guineaology.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555685812-4b74347eedd0?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guineaology — Mind-blowing Guinea Pig Care Universe",
    description:
      "Interactive rituals, masterclasses, and design inspiration for the guinea pig guardians who want everything to feel magical.",
  },
}

export default function Web() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-24 pt-20 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-soft-grid opacity-30" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff9ec] via-[#ffe8d6] to-[#ffe0f4] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-16 top-12 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/20 via-[#fb7185]/20 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-6 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#c1e9ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr,0.95fr]">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              <span className="text-lg">🎓</span> Guinea pig academia, reimagined
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-6xl">
              Guineaology is the <span className="bg-gradient-to-r from-[#f97316] via-[#fb7185] to-[#facc15] bg-clip-text text-transparent">mind-blowing habitat universe</span> where guinea pigs glow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Discover cinematic routines, sensory-rich interiors, and science-backed guidance that make every squeak sparkle. Learn, play, and design alongside the most devoted guardians.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#journey" className="border-0 bg-gradient-to-r from-[#f97316] via-[#fb7185] to-[#facc15] text-[#2c190a] shadow-lg shadow-[#f97316]/40">
                Enter the universe
              </Button>
              <Button
                href="#curriculum"
                intent="secondary"
                className="border-orange-300/70 bg-white/60 text-[#b6662b] hover:bg-gradient-to-r hover:from-[#ffe7c2] hover:via-[#ffdfe4] hover:to-[#dff2ff] hover:text-[#2c190a]"
              >
                Browse rituals
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
                <p className="font-display text-xl font-semibold text-[#2f1a0b]">Evening Habitat Moodboard</p>
                <span className="rounded-full bg-[#fde68a]/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a5526]">
                  Live demo
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">Colour palette</p>
                  <div className="mt-3 flex gap-3">
                    <span className="size-10 rounded-2xl bg-[#fbe7c1] shadow-inner shadow-white/60" />
                    <span className="size-10 rounded-2xl bg-[#fcdada] shadow-inner shadow-white/60" />
                    <span className="size-10 rounded-2xl bg-[#d4ecff] shadow-inner shadow-white/60" />
                    <span className="size-10 rounded-2xl bg-[#facc15]/90 shadow-inner shadow-white/60" />
                  </div>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d]">Ambient mix</p>
                  <p className="mt-3 text-lg font-semibold text-[#2f1a0b]">Meadow whispers + harp lullaby</p>
                  <p className="mt-2 text-sm text-[#5a391d]">Syncs to your piggies' circadian rhythm.</p>
                </div>
                <div className="col-span-2 rounded-3xl border border-white/70 bg-gradient-to-r from-[#ffe8c2]/90 via-[#ffdff0]/80 to-[#dff2ff]/80 p-6 text-[#53341c] shadow-inner shadow-white/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Tonight's ritual</p>
                  <p className="mt-3 text-lg leading-relaxed">
                    Layer fleece waterfalls, scatter rose petal hay toppers, and guide your herd through a three-song cuddle meditation.
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-20 right-10 hidden size-32 animate-float-medium rounded-full bg-gradient-to-br from-[#facc15]/30 via-[#fb7185]/25 to-[#f97316]/25 blur-2xl sm:block" />
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-full border border-white/60 bg-white/70 py-4 shadow-inner shadow-white/70">
          <div className="flex min-w-max gap-12 animate-marquee whitespace-nowrap text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">
            {highlightBadges.concat(highlightBadges).map((badge, index) => (
              <span key={`${badge}-${index}`} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-[#f97316]" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative" id="journey">
        <div className="absolute inset-x-0 -top-16 -z-10 mx-auto h-72 max-w-4xl rounded-[4rem] bg-gradient-to-br from-[#ffe7c2]/60 via-[#ffd9f5]/50 to-[#d6f4ff]/50 blur-3xl" />
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">The pillars</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">Every squeak deserves a sanctuary of delight</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a391d]">
            Guineaology blends boutique design with evidence-based care. Explore the four pillars that transform cages into wonderlands.
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {carePillars.map((pillar) => (
            <article
              key={pillar.title}
              className="relative overflow-hidden rounded-[2.5rem] border border-orange-200/70 bg-white/80 p-8 text-[#53341c] shadow-honey transition hover:-translate-y-2 hover:shadow-[0_35px_120px_-50px_rgba(249,115,22,0.45)]"
            >
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${pillar.accent}`} />
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#c4722d] shadow-inner shadow-white/40">
                <span className="text-xl">{pillar.icon}</span>
                Signature pillar
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-[#2f1a0b]">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative" id="curriculum">
        <div className="absolute inset-x-0 -top-28 -z-10 mx-auto h-[28rem] max-w-5xl rounded-[4rem] bg-gradient-to-br from-[#ffe8c2]/60 via-[#ffe0f4]/55 to-[#d7f6ff]/55 blur-3xl" />
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Daily enchantments</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">Craft routines that feel like poetry in motion</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a391d]">
            Toggle through the day to watch how light, scent, and nourishment shape unshakeable confidence for your herd.
          </p>
        </header>
        <div className="mt-12">
          <CareRoutineShowcase />
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 mx-auto h-[24rem] max-w-4xl rounded-[4rem] bg-gradient-to-br from-[#fff1d6]/60 via-[#fde7ff]/50 to-[#d7f6ff]/50 blur-3xl" />
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Wellness lab</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">Switch tabs. Unlock a new dimension of harmony.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a391d]">
            Each tab is a living guide—tailored metrics, sensory cues, and practical steps to keep every whisker shining.
          </p>
        </header>
        <div className="mt-12">
          <WellnessTabs />
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-x-0 -top-20 -z-10 mx-auto h-[22rem] max-w-3xl rounded-[4rem] bg-gradient-to-br from-[#ffe8c2]/60 via-[#ffe0f4]/55 to-[#d8f3ff]/55 blur-3xl" />
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Immersive knowledge</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">Choose the learning galaxy that fits your herd</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a391d]">
            Step into cinematic quests that blend tutorials, live labs, and downloadable blueprints for irresistible habitats.
          </p>
        </header>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {knowledgeTracks.map((track) => (
            <article
              key={track.name}
              className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-orange-200/70 bg-white/85 p-8 text-[#53341c] shadow-honey transition hover:-translate-y-2 hover:shadow-[0_35px_120px_-50px_rgba(249,115,22,0.45)]"
            >
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${track.accent}`} />
              <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#c4722d] shadow-inner shadow-white/40">
                🌟 {track.length}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-[#2f1a0b]">{track.name}</h3>
              <p className="mt-4 flex-1 text-base leading-relaxed">{track.description}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {track.modules.map((module) => (
                  <li key={module} className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-[#f97316]" />
                    {module}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-x-0 -top-24 -z-10 mx-auto h-[26rem] max-w-4xl rounded-[4rem] bg-gradient-to-br from-[#fff1d6]/60 via-[#fde7ff]/50 to-[#d6f5ff]/50 blur-3xl" />
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Sensory snapshots</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">Three ways Guineaology upgrades every moment</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a391d]">
            These quick facts show the harmony between comfort, nutrition, and joy that keeps piggies gleaming.
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quickFacts.map((fact) => (
            <article
              key={fact.title}
              className="relative overflow-hidden rounded-[2.5rem] border border-orange-200/70 bg-white/85 p-8 text-[#53341c] shadow-honey transition hover:-translate-y-2 hover:shadow-[0_35px_120px_-50px_rgba(249,115,22,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/90 via-transparent to-transparent" />
              <h3 className="font-display text-2xl font-semibold text-[#2f1a0b]">{fact.title}</h3>
              <p className="mt-3 text-base leading-relaxed">{fact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-x-0 -top-20 -z-10 mx-auto h-[22rem] max-w-4xl rounded-[4rem] bg-gradient-to-br from-[#ffe8c2]/60 via-[#ffdff0]/55 to-[#d7f4ff]/55 blur-3xl" />
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Guardians in awe</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">Stories from the Guineaology constellation</h2>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-orange-200/70 bg-white/85 p-8 text-[#53341c] shadow-honey transition hover:-translate-y-2 hover:shadow-[0_35px_120px_-50px_rgba(249,115,22,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/85 via-transparent to-transparent" />
              <blockquote className="text-lg leading-relaxed">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-xl font-semibold text-[#2f1a0b]">{testimonial.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.3em] text-[#b6662b]">{testimonial.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff3d6] via-[#ffe4f4] to-[#d8f3ff] px-8 py-16 text-center shadow-honey md:px-14" id="join">
        <div className="pointer-events-none absolute -left-20 top-6 size-44 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/25 via-[#fb7185]/25 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#c1e9ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#b6662b]">Ready to glow?</p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-[#2c190a] md:text-5xl">
          Wrap your herd in the comfort, colour, and confidence they deserve.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[#5a391d]">
          Join Guineaology and unlock immersive routines, personalised dashboards, and a loving community cheering for every squeak.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#curriculum" className="border-0 bg-gradient-to-r from-[#f97316] via-[#fb7185] to-[#facc15] text-[#2c190a] shadow-lg shadow-[#f97316]/40">
            Start your free trial
          </Button>
          <Button
            href="#journey"
            intent="secondary"
            className="border-orange-300/70 bg-white/70 text-[#b6662b] hover:bg-gradient-to-r hover:from-[#ffe7c2] hover:via-[#ffdfe4] hover:to-[#dff2ff] hover:text-[#2c190a]"
          >
            Explore the pillars
          </Button>
        </div>
      </section>
    </main>
  )
}
