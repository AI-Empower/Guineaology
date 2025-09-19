import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { DailyMenuPlanner } from "components/DailyMenuPlanner"

const feedingRhythms = [
  {
    title: "Morning",
    details: "Refresh water, top hay racks, and offer half the daily veggies to spread vitamin C intake.",
  },
  {
    title: "Midday",
    details: "Spot clean bowls, provide a hydration treat like cucumber slices, and encourage floor-time grazing.",
  },
  {
    title: "Evening",
    details: "Serve the second veggie portion, provide measured pellets, and log appetite and droppings.",
  },
]

const safeHerbs = ["Cilantro", "Coriander", "Basil", "Dill", "Mint", "Rosemary (tiny sprigs)"]
const cautionFoods = [
  "Iceberg lettuce (low nutrients)",
  "Onion family plants",
  "Potatoes or potato leaves",
  "Seeds, nuts, and dairy",
  "High-sugar treats more than twice weekly",
  "Any food with added calcium like alfalfa pellets (for adults)",
]

export const metadata: Metadata = {
  title: "Guineaology Nutrition — Vet-approved Guinea Pig Diets",
  description:
    "Balance hay, pellets, veggies, and supplements with guidance from exotic veterinary nutritionists. Build menus that keep guinea pigs thriving.",
}

export default function DietPage() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-soft-grid opacity-20" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff5e5] via-[#ffe4d8] to-[#ffe4f5] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-14 top-12 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/25 via-[#fb7185]/25 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-6 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#dff5ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />
        <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              🥗 Daily nutrition
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-5xl">
              Build balanced plates that exotic vets trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Guinea pigs thrive on constant fibre, measured pellets, and vitamin C–rich vegetables. Use our planner to portion each meal and keep health logs ready for your vet.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#planner">Open the planner</Button>
              <Button href="/health" intent="secondary" className="bg-white/70 text-[#b6662b]">
                Track nutrition in health logs
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/50 bg-white/70 p-6 shadow-inner shadow-white/60 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Quick facts</p>
            <ul className="mt-4 space-y-3 text-[#5b3a20]">
              <li>80% of the diet should be long-strand grass hay to keep teeth worn and guts moving.</li>
              <li>Limit adult pellets to 1/8 cup per pig; choose fortified timothy formulas without seeds or dried fruit.</li>
              <li>Rotate leafy greens and bell peppers for vitamin C—guinea pigs cannot make their own.</li>
              <li>Provide fresh, filtered water in both a heavy crock and a sipper bottle to suit different preferences.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="planner" className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#fff0db] via-[#ffe4f3] to-[#dff5ff] opacity-70 blur-3xl" />
        <DailyMenuPlanner />
      </section>

      <section className="grid gap-10 rounded-[3rem] border border-orange-200/60 bg-white/75 p-10 shadow-honey md:grid-cols-[1fr,1.1fr] md:p-16">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/50">
            Feeding rhythm
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Keep energy steady with predictable meal anchors.</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Guinea pigs feel safest when meals happen at similar times. Break veggie servings into at least two sessions to support vitamin C absorption and prevent gas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {feedingRhythms.map((moment) => (
            <div key={moment.title} className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/50">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c4722d]">{moment.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5b3a20]">{moment.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff2d9] via-[#ffe3f2] to-[#dff5ff] p-10 shadow-honey md:grid-cols-2 md:gap-12 md:p-16">
        <div>
          <h3 className="font-display text-3xl font-semibold text-[#2f1a0b]">Guardian-approved herb boosts</h3>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Offer small handfuls of fragrant herbs to encourage hydration and mental stimulation. Rinse thoroughly and rotate to avoid calcium build-up.
          </p>
          <ul className="mt-6 grid gap-3 text-[#5b3a20] sm:grid-cols-2">
            {safeHerbs.map((herb) => (
              <li key={herb} className="rounded-3xl border border-white/60 bg-white/80 px-4 py-3 text-sm shadow-inner shadow-white/50">
                {herb}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-3xl font-semibold text-[#2f1a0b]">Foods to limit or avoid</h3>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Some foods upset delicate digestive systems or introduce toxins. When in doubt, call an exotic vet before experimenting.
          </p>
          <ul className="mt-6 space-y-3 text-[#5b3a20]">
            {cautionFoods.map((food) => (
              <li key={food} className="flex items-start gap-3 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-inner shadow-white/60">
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">
                  !
                </span>
                <span>{food}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
