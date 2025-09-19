import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { HabitatFootprintPlanner } from "components/HabitatFootprintPlanner"

const climateTips = [
  {
    title: "Temperature",
    detail: "Keep between 18–24 °C. Use fans indirectly; never blow air directly into the habitat.",
  },
  {
    title: "Humidity",
    detail: "Aim for 40–70%. Use a hygrometer and dehumidifier or humidifier as needed.",
  },
  {
    title: "Air quality",
    detail: "Open windows briefly for fresh air while keeping drafts off the habitat. Avoid aerosols and candles nearby.",
  },
]

const cleaningSteps = [
  {
    cadence: "Daily",
    tasks: ["Spot clean wet bedding", "Refill hay stations", "Wipe food dishes and bottle spouts"],
  },
  {
    cadence: "Weekly",
    tasks: ["Wash fleece liners on hot cycle", "Disinfect coroplast with veterinary-safe cleaner", "Rotate toys and hideys"],
  },
  {
    cadence: "Monthly",
    tasks: ["Deep clean playpen panels", "Inspect for chewing damage", "Replace chewed tunnels or beds"],
  },
]

export const metadata: Metadata = {
  title: "Guineaology Habitat — Design Safe, Enriching Spaces",
  description:
    "Plan guinea pig housing that meets welfare standards. Calculate floor space, choose bedding, and maintain clean, draft-free environments.",
}

export default function HabitatPage() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-soft-grid opacity-20" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff6e6] via-[#ffe7dc] to-[#e6f6ff] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-14 top-10 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/25 via-[#fb7185]/25 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#dff5ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />
        <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              🏡 Habitat science
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-5xl">
              Create a sanctuary that matches natural behaviour.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Spacious floor runs, breathable bedding, and gentle airflow keep guinea pigs confident and healthy. Calculate the space your herd needs and design layers they will actually use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#planner">Plan floor space</Button>
              <Button href="/enrichment" intent="secondary" className="bg-white/70 text-[#b6662b]">
                Add enrichment next
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/60 bg-white/75 p-6 shadow-inner shadow-white/60 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Key principles</p>
            <ul className="mt-4 space-y-3 text-[#5b3a20]">
              <li>Two accessible hideys per pig prevent guarding and let timid pigs decompress.</li>
              <li>Provide ramps no steeper than 20° with textured grip for safe loft access.</li>
              <li>Keep electrical cords, houseplants, and other hazards outside the habitat perimeter.</li>
              <li>Offer supervised floor time daily even in large cages to strengthen muscles.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="planner" className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#fff0db] via-[#eae7ff] to-[#dff5ff] opacity-70 blur-3xl" />
        <HabitatFootprintPlanner />
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/60 bg-white/75 p-10 shadow-honey md:grid-cols-2 md:gap-12 md:p-16">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50">
            Climate control
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Keep the air fresh without chilling sensitive bodies.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Guinea pigs cannot sweat or pant. Stable climates protect respiratory health and prevent fungal issues.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {climateTips.map((tip) => (
            <div key={tip.title} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/50">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c4722d]">{tip.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5b3a20]">{tip.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff2d9] via-[#ffe3f2] to-[#dff5ff] p-10 shadow-honey md:p-16">
        <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Cleaning cadence that keeps paws healthy.</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#583518]">
          Consistent cleaning prevents ammonia build-up and supports foot health. Always keep a spare set of bedding ready so pigs can return to a dry, comfortable habitat quickly.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cleaningSteps.map((step) => (
            <div key={step.cadence} className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-inner shadow-white/60">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c4722d]">{step.cadence}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#5b3a20]">
                {step.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-[0.65rem] font-semibold text-white">
                      ✓
                    </span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
