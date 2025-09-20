import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { DailyMenuPlanner } from "components/DailyMenuPlanner"
import { SourceList } from "components/SourceList"

const feedingRhythms = [
  {
    title: "Morning",
    details: "Refill water, refresh hay, and serve half the vegetables for the day.",
  },
  {
    title: "Midday",
    details: "Spot clean bowls, add a light hydration snack, and rotate forage toys.",
  },
  {
    title: "Evening",
    details: "Serve the remaining vegetables, measure pellets, and note appetite or droppings.",
  },
]

const plateBasics = [
  {
    title: "Hay first",
    detail: "Unlimited timothy or meadow hay keeps teeth worn, digestion steady, and boredom low.",
  },
  {
    title: "Pellet limits",
    detail: "Offer 1/8 cup of plain timothy pellets per adult pig each day to prevent weight gain.",
  },
  {
    title: "Vitamin C focus",
    detail: "Rotate peppers, leafy greens, and herbs to deliver 25-50 mg of vitamin C without excess calcium.",
  },
]

const safeHerbs = ["Cilantro", "Coriander", "Basil", "Dill", "Mint", "Rosemary (tiny sprigs)"]
const cautionFoods = [
  "Iceberg lettuce (minimal nutrients, watery stools)",
  "Onion family plants",
  "Potatoes or potato foliage",
  "Seeds, nuts, and dairy",
  "High-sugar treats more than twice weekly",
  "Alfalfa pellets for adult pigs",
]

const nutritionSources = [
  {
    href: "https://vcahospitals.com/know-your-pet/guinea-pigs-feeding",
    title: "VCA Animal Hospitals - Feeding Guinea Pigs",
    description: "Nutritional guardrails covering hay intake, pellet limits, and vitamin C requirements.",
  },
  {
    href: "https://www.guinealynx.info/diet.html",
    title: "Guinea Lynx - Diet",
    description: "Serving charts, safe produce lists, and calcium tracking strategies used by experienced guardians.",
  },
  {
    href: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
    title: "RSPCA - Guinea pig care overview",
    description: "Daily fresh foods, hydration, and forage enrichment expectations from a welfare authority.",
  },
]

export const metadata: Metadata = {
  title: "Guinea Pig Care Nutrition - Meal Planner",
  description:
    "Plan hay, pellets, vegetables, and hydration with evidence-backed guidance from Guinea Pig Care.",
}

export default function DietPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.75rem] border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-10 sm:py-12 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">
            Nutrition guide hub
          </span>
          <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Build balanced guinea pig meals with clear portions.
          </h1>
          <p className="text-base leading-relaxed text-primary">
            Guineaology turns clinical feeding guidance into planners that balance hay, pellets, herbs, and hydration without guesswork.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#planner">Open the menu planner</Button>
            <Button intent="secondary" href="/health">
              Go to health guide
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {plateBasics.map((basic) => (
              <div key={basic.title} className="rounded-3xl border border-subtle bg-surface-muted px-4 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{basic.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary">{basic.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">Quick facts</p>
          <ul className="space-y-3 text-sm leading-relaxed text-primary">
            <li>Offer hay in at least two stations so timid pigs can snack without conflict.</li>
            <li>Log weights weekly and flag any 85 g change for exotic vet review.</li>
            <li>Serve veggies damp to support hydration and rinse off potential pesticides.</li>
            <li>Keep a backup hay bale sealed and dated to avoid emergency shortages.</li>
          </ul>
        </div>
      </section>

      <section id="planner" className="rounded-[2.75rem] border border-subtle bg-surface px-4 py-6 shadow-soft sm:px-6 sm:py-8">
        <DailyMenuPlanner />
      </section>

      <section className="grid gap-8 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Feeding routine</p>
          <h2 className="font-display text-3xl font-semibold text-heading">Keep meals consistent with a simple schedule.</h2>
          <p className="text-sm leading-relaxed text-primary">
            Guinea pigs rely on routine. Spread vitamin C, fibre, and hydration through the day for steady energy.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {feedingRhythms.map((moment) => (
            <div key={moment.title} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{moment.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary">{moment.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-3xl font-semibold text-heading">Herbs to rotate</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Rotate fresh herbs to add variety without adding too much calcium. Rinse and dry before serving.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-primary sm:grid-cols-2">
            {safeHerbs.map((herb) => (
              <li key={herb} className="rounded-2xl border border-subtle bg-surface-muted px-4 py-3">
                {herb}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-3xl font-semibold text-heading">Foods to limit or avoid</h3>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Guinea pig digestive systems are sensitive. Keep this watch list visible on the fridge so every helper knows what stays off the menu.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary">
            {cautionFoods.map((food) => (
              <li key={food} className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-muted px-4 py-4">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  !
                </span>
                <span>{food}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SourceList heading="Nutrition references" sources={nutritionSources} />
    </main>
  )
}
