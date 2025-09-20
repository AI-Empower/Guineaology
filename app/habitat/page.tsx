import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { HabitatFootprintPlanner } from "components/HabitatFootprintPlanner"
import { SourceList } from "components/SourceList"

const climateTips = [
  {
    title: "Temperature",
    detail: "Hold 18-24 °C (65-75 °F). Use fans indirectly and insulate from drafts to protect delicate respiratory systems.",
  },
  {
    title: "Humidity",
    detail: "Target 40-70%. Track with a hygrometer and adjust using a humidifier or dehumidifier.",
  },
  {
    title: "Air quality",
    detail: "Ventilate briefly with windows or air purifiers while shielding the habitat from direct gusts and aerosols.",
  },
]

const cleaningSteps = [
  {
    cadence: "Daily",
    tasks: ["Spot clean wet bedding", "Refill hay grids", "Wipe food crock and bottle spouts"],
  },
  {
    cadence: "Weekly",
    tasks: ["Wash fleece liners on hot", "Disinfect coroplast with vet-safe cleaner", "Rotate hides and tunnels"],
  },
  {
    cadence: "Monthly",
    tasks: ["Deep clean playpen panels", "Check for chewing wear", "Replace chewed tunnels or beds"],
  },
]

const layoutPlaybook = [
  {
    label: "Space",
    detail: "Start at 120 cm by 60 cm for a bonded pair and add 30 cm width for each additional pig.",
  },
  {
    label: "Zones",
    detail: "Divide for hay, lounge, zoomies, and litter to reduce guarding and keep traffic flowing.",
  },
  {
    label: "Layers",
    detail: "Stack absorbent pads, fleece, and rugs for quick swaps without throwing off airflow.",
  },
]

const habitatSources = [
  {
    href: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
    title: "RSPCA - Guinea pig care overview",
    description: "Housing size, companionship, and enrichment standards from a welfare authority.",
  },
  {
    href: "https://www.guinealynx.info/housing.html",
    title: "Guinea Lynx - Housing",
    description: "Experienced caregiver guidance on cage layouts, ventilation, and cleaning cadence.",
  },
  {
    href: "https://resources.bestfriends.org/article/guinea-pig-care-guide",
    title: "Best Friends Animal Society - Guinea Pig Care Guide",
    description: "Rescue-informed recommendations for safe, stimulating guinea pig habitats.",
  },
]

export const metadata: Metadata = {
  title: "Guinea Pig Care Habitat - Setup Guide",
  description:
    "Plan guinea pig housing that meets welfare standards with Guinea Pig Care's footprint planner, climate tips, and cleaning schedules.",
}

export default function HabitatPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.75rem] border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-10 sm:py-12 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">
            Habitat guide hub
          </span>
          <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Plan habitats that keep guinea pigs safe, social, and simple to clean.
          </h1>
          <p className="text-base leading-relaxed text-primary">
            Guineaology provides footprint calculators, climate guardrails, and cleaning schedules so every herd has a space that stays fresh.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#planner">Plan floor space</Button>
            <Button intent="secondary" href="/enrichment">
              Open enrichment guide
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {layoutPlaybook.map((item) => (
              <div key={item.label} className="rounded-3xl border border-subtle bg-surface-muted px-4 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">Key principles</p>
          <ul className="space-y-3 text-sm leading-relaxed text-primary">
            <li>Double the hideouts so timid pigs decompress without guarding.</li>
            <li>Keep ramps shallow with textured grip for safe loft access.</li>
            <li>Route cords, plants, and hazards outside the play zone.</li>
            <li>Schedule floor time even with roomy cages to maintain muscle tone.</li>
          </ul>
        </div>
      </section>

      <section id="planner" className="rounded-[2.75rem] border border-subtle bg-surface px-4 py-6 shadow-soft sm:px-6 sm:py-8">
        <HabitatFootprintPlanner />
      </section>

      <section className="grid gap-8 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Climate guardrails</p>
          <h2 className="font-display text-3xl font-semibold text-heading">Keep airflow gentle, humidity stable, and paws dry.</h2>
          <p className="text-sm leading-relaxed text-primary">
            Guinea pigs are built for cool, consistent climates. Use these guardrails to avoid respiratory flare-ups and keep bedding fresher for longer.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {climateTips.map((tip) => (
            <div key={tip.title} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{tip.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary">{tip.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10">
        <h2 className="font-display text-3xl font-semibold text-heading">Cleaning cadence that keeps paws healthy.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-primary">
          Break cleaning into daily, weekly, and monthly passes so habitats stay breathable without derailing your weekend. Keep a spare bedding set sealed and ready for quick swaps.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cleaningSteps.map((step) => (
            <div key={step.cadence} className="rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{step.cadence}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-primary">
                {step.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-accent-soft font-display text-[0.7rem] font-semibold text-accent">
                      •
                    </span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SourceList heading="Habitat references" sources={habitatSources} />
    </main>
  )
}
