import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { WellnessTabs } from "components/WellnessTabs"

const weeklyChecks = [
  "Weigh each pig on the same scale and log changes",
  "Check teeth alignment and look for drooling or chin wetness",
  "Trim nails, supporting the foot and avoiding the quick",
  "Inspect ears, eyes, and nose for discharge or redness",
]

const redFlags = [
  "Refusing hay or pellets for four hours",
  "No droppings or very small, dry droppings",
  "Laboured breathing, wheezing, or blue-tinged gums",
  "Sitting puffed up, lethargic, or hiding continuously",
  "Bloated abdomen or painful vocalisations when touched",
]

export const metadata: Metadata = {
  title: "Guineaology Health — Monitor, Prevent, and Act Quickly",
  description:
    "Follow vet-developed health routines, learn emergency warning signs, and document everything your guinea pigs' medical team needs.",
}

export default function HealthPage() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-16 md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-soft-grid opacity-20" />
      </div>

      <section className="relative overflow-hidden rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-[#fff4eb] via-[#ffe3ef] to-[#e4f6ff] px-8 pb-16 pt-20 shadow-honey md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -left-14 top-10 size-48 animate-float-slow rounded-full bg-gradient-to-br from-[#f97316]/25 via-[#fb7185]/25 to-[#facc15]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-8 size-56 animate-float-medium rounded-full bg-gradient-to-br from-[#dff5ff]/30 via-[#ffe8d6]/30 to-[#ffd4f3]/30 blur-3xl" />
        <div className="grid gap-14 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b6662b] shadow-inner shadow-white/60">
              🩺 Health guardianship
            </span>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-[#2c190a] md:text-5xl">
              Know what normal looks like so you can act fast.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#583518] md:text-xl">
              Exotic veterinarians helped us build daily observation scripts, preventive care schedules, and emergency checklists. Share your logs at every appointment for better decisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#wellness">Open wellness scripts</Button>
              <Button href="/adoption" intent="secondary" className="bg-white/70 text-[#b6662b]">
                Prepare new arrivals
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/60 bg-white/75 p-6 shadow-inner shadow-white/60 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b6662b]">Clinic toolkit</p>
            <ul className="mt-4 space-y-3 text-[#5b3a20]">
              <li>Keep a printed weight chart and medication log in your carrier.</li>
              <li>Bring a video of concerning behaviours; vets can assess subtle breathing changes.</li>
              <li>Note current diet, bedding, and cage mates in case environmental adjustments are needed.</li>
              <li>Transport pigs in pairs when possible to reduce stress during appointments.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="wellness" className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#fff0db] via-[#ffe4f3] to-[#dff5ff] opacity-70 blur-3xl" />
        <WellnessTabs />
      </section>

      <section className="grid gap-8 rounded-[3rem] border border-orange-200/60 bg-white/75 p-10 shadow-honey md:grid-cols-2 md:gap-12 md:p-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Weekly hands-on checks</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Make every weigh-in positive with herbs or gentle cuddles. Logging consistently gives your vet diagnostic clues long before serious illness.
          </p>
          <ul className="mt-6 space-y-3 text-[#5b3a20]">
            {weeklyChecks.map((task) => (
              <li key={task} className="flex items-start gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">
                  ✓
                </span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#2f1a0b] md:text-4xl">Emergency red flags</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#583518]">
            Guinea pigs hide illness. If you see any of these signs, contact an exotic veterinarian immediately—hours matter for gut stasis and respiratory distress.
          </p>
          <ul className="mt-6 space-y-3 text-[#5b3a20]">
            {redFlags.map((flag) => (
              <li key={flag} className="flex items-start gap-3 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-inner shadow-white/60">
                <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316]/70 via-[#fb7185]/70 to-[#facc15]/60 text-xs font-semibold text-white">
                  !
                </span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
