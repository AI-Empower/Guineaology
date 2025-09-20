import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { SourceList } from "components/SourceList"
import { WellnessTabs } from "components/WellnessTabs"

const weeklyChecks = [
  "Weigh each pig on the same scale and record deltas",
  "Check teeth alignment and look for drooling or chin dampness",
  "Trim nails with full foot support and avoid the quick",
  "Inspect ears, eyes, and nose for discharge or redness",
]

const redFlags = [
  "Skipping hay or pellets for four hours",
  "No droppings or very small, dry droppings",
  "Laboured breathing, wheezing, or blue-tinged gums",
  "Sitting puffed-up, lethargic, or hiding continuously",
  "Bloated abdomen or painful vocalisations when touched",
]

const clinicPrep = [
  {
    label: "Vitals",
    detail: "Pack weight charts, diet notes, and medication bottles with exact dosing.",
  },
  {
    label: "Behaviour",
    detail: "Record video of concerning sounds or breathing patterns for remote vet review.",
  },
  {
    label: "Environment",
    detail: "Log bedding, cage mates, temperature, and recent stressors to speed diagnostics.",
  },
]

const healthSources = [
  {
    href: "https://www.guinealynx.info/healthycavy.html",
    title: "Guinea Lynx - Healthy Cavy",
    description: "Baselines, observation tips, and early warning signs compiled by experienced guardians.",
  },
  {
    href: "https://www.guinealynx.info/emergency.html",
    title: "Guinea Lynx - Emergency",
    description: "Critical symptoms and triage guidance for when to contact an exotic veterinarian immediately.",
  },
  {
    href: "https://www.aemv.org/for-pet-owners/find-a-vet/",
    title: "Association of Exotic Mammal Veterinarians - Find a Vet",
    description: "Directory of qualified exotic veterinarians for routine and emergency care.",
  },
]

export const metadata: Metadata = {
  title: "Guinea Pig Care Health - Monitoring Guide",
  description:
    "Keep guinea pigs healthy with daily observation prompts, emergency red flags, and shareable care records.",
}

export default function HealthPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.75rem] border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-10 sm:py-12 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">
            Health overview
          </span>
          <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Know each baseline so you can act quickly when something changes.
          </h1>
          <p className="text-base leading-relaxed text-primary">
            Guineaology distils welfare guidance into daily prompts, emergency checklists, and visit-ready records so you are prepared before concerns escalate.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#wellness">Open wellness checklist</Button>
            <Button intent="secondary" href="/adoption">
              Go to adoption guide
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {clinicPrep.map((item) => (
              <div key={item.label} className="rounded-3xl border border-subtle bg-surface-muted px-4 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">Clinic toolkit</p>
          <ul className="space-y-3 text-sm leading-relaxed text-primary">
            <li>Keep weight trends and medication logs clipped to the carrier.</li>
            <li>Capture audio or video of abnormal breathing for clinician review.</li>
            <li>List diet, bedding, neighbours, and room climate in case adjustments are needed.</li>
            <li>Transport bonded pigs together when safe to reduce stress during appointments.</li>
          </ul>
        </div>
      </section>

      <section id="wellness" className="rounded-[2.75rem] border border-subtle bg-surface px-4 py-6 shadow-soft sm:px-6 sm:py-8">
        <WellnessTabs />
      </section>

      <section className="grid gap-8 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Weekly hands-on checks</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Turn weigh-ins into positive rituals. Regular logs give vets the context they need to spot illness before guinea pigs hide it.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary">
            {weeklyChecks.map((task) => (
              <li key={task} className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-muted px-4 py-4">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  ↣
                </span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Emergency red flags</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Guinea pigs mask pain until it is critical. Keep this decoder visible and contact an exotic veterinarian immediately if you spot any of these signs.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary">
            {redFlags.map((flag) => (
              <li key={flag} className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-muted px-4 py-4">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  !
                </span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SourceList heading="Health references" sources={healthSources} />
    </main>
  )
}
