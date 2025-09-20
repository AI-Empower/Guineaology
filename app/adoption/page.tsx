import { Metadata } from "next"

import { AdoptionReadinessChecklist } from "components/AdoptionReadinessChecklist"
import { Button } from "components/Button/Button"
import { SourceList } from "components/SourceList"

const adoptionSteps = [
  {
    number: "1",
    title: "Connect",
    description: "Reach out to rescues that adopt in bonded pairs, share post-adoption counsel, and provide transparent medical records.",
  },
  {
    number: "2",
    title: "Collect intel",
    description: "Gather diet notes, personality insights, and previous treatments so you can prep the right environment.",
  },
  {
    number: "3",
    title: "Plan intros",
    description: "Set up a neutral bonding arena with duplicate hides and hay piles to separate curiosity from conflict.",
  },
  {
    number: "4",
    title: "Vet check",
    description: "Book an exotic vet exam within 7-10 days to establish baselines and discuss preventive care.",
  },
]

const supportResources = [
  "Find exotic vets through the Association of Exotic Mammal Veterinarians directory.",
  "Join reputable rescue communities for bonding help and emergency referrals.",
  "Pin a 24/7 exotic hospital number inside the habitat and in your phone favorites.",
]

const welcomeReminders = [
  {
    label: "Travel kit",
    detail: "Line carriers with fleece, pack hydration veggies, and bring a familiar hide to reduce stress.",
  },
  {
    label: "Quarantine",
    detail: "House newcomers separately for 2-3 weeks while your vet clears parasites or illness.",
  },
  {
    label: "Bonding",
    detail: "Use a neutral pen with mirrored resources to prevent guarding and speed positive associations.",
  },
]

const adoptionSources = [
  {
    href: "https://resources.bestfriends.org/article/guinea-pig-care-guide",
    title: "Best Friends Animal Society - Guinea Pig Care Guide",
    description: "Rescue-informed adoption prep, transport tips, and bonding guidance.",
  },
  {
    href: "https://www.aspca.org/pet-care/small-pet-care/guinea-pig-care",
    title: "ASPCA - Guinea Pig Care",
    description: "Supply checklists, socialisation foundations, and intake considerations for new guardians.",
  },
  {
    href: "https://www.aemv.org/for-pet-owners/find-a-vet/",
    title: "Association of Exotic Mammal Veterinarians - Find a Vet",
    description: "Locate exotic vets to handle pre-adoption wellness checks and emergencies.",
  },
]

export const metadata: Metadata = {
  title: "Guinea Pig Care Adoption - Preparation Guide",
  description:
    "Get ready for guinea pig adoption with checklists, transport tips, and bonding guidance reviewed by experienced rescues and guardians.",
}

export default function AdoptionPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.75rem] border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-10 sm:py-12 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">
            Adoption support hub
          </span>
          <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Welcome new guinea pigs with calm, organised steps.
          </h1>
          <p className="text-base leading-relaxed text-primary">
            Build a gentle intake plan, prepare supplies, and confirm your vet team so new arrivals feel secure from the first trip home.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#checklist">Check readiness</Button>
            <Button intent="secondary" href="/diet">
              Go to nutrition guide
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {welcomeReminders.map((item) => (
              <div key={item.label} className="rounded-3xl border border-subtle bg-surface-muted px-4 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-primary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">Why adopt?</p>
          <ul className="space-y-3 text-sm leading-relaxed text-primary">
            <li>Rescues match compatible pairs and flag medical needs up front.</li>
            <li>You receive ongoing support plus accurate history to customise care.</li>
            <li>Adoption fees fund other animals and education programs.</li>
          </ul>
        </div>
      </section>

      <section id="checklist" className="rounded-[2.75rem] border border-subtle bg-surface px-4 py-6 shadow-soft sm:px-6 sm:py-8">
        <AdoptionReadinessChecklist />
      </section>

      <section className="grid gap-8 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Adoption pathway</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Follow these milestones and stay in touch with your rescue partners. They remain allies long after gotcha day.
          </p>
          <div className="mt-6 grid gap-4">
            {adoptionSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-4 rounded-3xl border border-subtle bg-surface-muted px-5 py-5">
                <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-full bg-accent-soft font-display text-base font-semibold text-accent">
                  {step.number}
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-primary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-heading">Build your support circle</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary">
            Make these contacts easy to grab. In emergencies, rapid responses keep pigs safe.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-primary">
            {supportResources.map((resource) => (
              <li key={resource} className="flex items-start gap-3 rounded-2xl border border-subtle bg-surface-muted px-4 py-4">
                <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  ↣
                </span>
                <span>{resource}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SourceList heading="Adoption references" sources={adoptionSources} />
    </main>
  )
}
