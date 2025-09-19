import { Metadata } from "next"

import { AdoptionReadinessChecklist } from "components/AdoptionReadinessChecklist"
import { Button } from "components/Button/Button"

const adoptionSteps = [
  {
    number: "1",
    title: "Connect with rescues",
    description: "Reach out to local guinea pig rescues or shelters; reputable groups insist on adopting in pairs and offer post-adoption support.",
  },
  {
    number: "2",
    title: "Gather background",
    description: "Ask for medical records, diet notes, and personality insights so you can prepare the right environment.",
  },
  {
    number: "3",
    title: "Plan introductions",
    description: "For existing herds, prepare a neutral bonding space and understand the difference between normal dominance behaviours and fights.",
  },
  {
    number: "4",
    title: "Schedule vet visit",
    description: "Book an exotic vet appointment within 7–10 days to establish baseline health and discuss future care.",
  },
]

const supportResources = [
  "Find exotic vets via the Association of Exotic Mammal Veterinarians (AEMV) directory.",
  "Join reputable rescue communities for bonding help and emergency referrals.",
  "Save a 24/7 emergency hospital number in your phone and on the habitat wall.",
]

export const metadata: Metadata = {
  title: "Guineaology Adoption — Prepare, Welcome, and Bond",
  description:
    "Get ready for guinea pig adoption with vet-reviewed checklists, transport tips, and bonding guidance so every new arrival feels safe.",
}

export default function AdoptionPage() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-soft-grid opacity-20" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff5e6] via-[#ffe7ee] to-[#e2f7ff] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-14 top-10 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/25 via-[#fb7185]/25 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#dff5ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />
        <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              🤝 Adoption support
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-5xl">
              Welcome new guinea pigs with calm confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Adopting from rescues saves lives. Use our vet-reviewed checklist and bonding plan to make every transition gentle and safe.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#checklist">Check your readiness</Button>
              <Button href="/diet" intent="secondary" className="bg-white/70 text-[#b6662b]">
                Stock the pantry
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/60 bg-white/75 p-6 shadow-inner shadow-white/60 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Why rescue?</p>
            <ul className="mt-4 space-y-3 text-[#5b3a20]">
              <li>Rescues ensure pigs are paired appropriately and often spay/neuter when medically indicated.</li>
              <li>You receive accurate medical history and ongoing guidance.</li>
              <li>Adoption fees support other animals' care and community education.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="checklist" className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#fff0db] via-[#ffe4f3] to-[#dff5ff] opacity-70 blur-3xl" />
        <AdoptionReadinessChecklist />
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/60 bg-white/75 p-10 shadow-honey md:grid-cols-2 md:gap-12 md:p-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Adoption pathway</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Follow these stages and stay in touch with your rescue—they're allies long after gotcha day.
          </p>
          <div className="mt-6 grid gap-4">
            {adoptionSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-inner shadow-white/50">
                <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-base font-semibold text-white">
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c4722d]">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b3a20]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Build your support circle</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Keep these resources visible. In emergencies, quick access to trusted help saves lives.
          </p>
          <ul className="mt-6 space-y-3 text-[#5b3a20]">
            {supportResources.map((resource) => (
              <li key={resource} className="flex items-start gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">
                  ★
                </span>
                <span>{resource}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
