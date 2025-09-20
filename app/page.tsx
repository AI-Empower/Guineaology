<<<<<<< Updated upstream
import { Metadata } from "next"
import { Button } from "components/Button/Button"

import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
=======
﻿import { Metadata } from "next"

import { Button } from "components/Button/Button"
import { CareRoutineShowcase } from "components/CareRoutineShowcase"
import { SourceList } from "components/SourceList"

const heroStats = [
  { value: "18", label: "Trusted references" },
  { value: "120+", label: "Step-by-step guides" },
  { value: "365", label: "Daily care reminders" },
]

const launchDeck = [
  {
    title: "Get the habitat ready",
    detail: "Follow the setup checklist to lay safe bedding, airflow paths, and hiding spots.",
  },
  {
    title: "Plan daily meals",
    detail: "Use the nutrition calculator to balance hay, pellets, and vegetables for each pig.",
  },
  {
    title: "Track the essentials",
    detail: "Record weight, droppings, and behaviour so you can act quickly if something changes.",
  },
]

const guardianGuide = [
  {
    step: "1",
    title: "Set up the habitat",
    detail: "Use the layout planner to check size, airflow, and cleaning supplies.",
    href: "/habitat",
    cta: "Open habitat guide",
  },
  {
    step: "2",
    title: "Plan every meal",
    detail: "Balance hay, pellets, herbs, and hydration treats with the nutrition planner.",
    href: "/diet",
    cta: "Plan today's menu",
  },
  {
    step: "3",
    title: "Monitor health",
    detail: "Download the observation scripts, emergency checklist, and emergency contacts sheet.",
    href: "/health",
    cta: "Prepare the health kit",
  },
]

const pagePreviews = [
  {
    title: "Nutrition",
    href: "/diet",
    description:
      "Sample menus, safe produce lists, and portion tips sourced from longstanding welfare guides.",
    cta: "View nutrition guide",
  },
  {
    title: "Habitat",
    href: "/habitat",
    description:
      "Layout planner, ventilation advice, and cleaning routines that keep cages safe and fresh.",
    cta: "Open habitat guide",
  },
  {
    title: "Health",
    href: "/health",
    description:
      "Observation scripts, emergency signs, and clinic-ready records compiled from rescues and welfare bodies.",
    cta: "Read health guide",
  },
  {
    title: "Enrichment",
    href: "/enrichment",
    description:
      "Floor-time plans, forage ideas, and sound cues that build trust without stress.",
    cta: "Explore enrichment",
  },
  {
    title: "Adoption",
    href: "/adoption",
    description:
      "Checklists, transport tips, and bonding steps to welcome new guinea pigs smoothly.",
    cta: "Prepare for adoption",
  },
]

const principles = [
  {
    title: "Transparent sourcing",
    details: "Every guide cites published welfare standards, rescue operating manuals, and open-access research.",
  },
  {
    title: "Welfare first",
    details: "Advice follows welfare standards for companionship, housing, diet, and enrichment.",
  },
  {
    title: "Evidence based",
    details: "Each recommendation links to trusted rescues, welfare bodies, or veterinary texts.",
  },
]

const communityBullets = [
  {
    step: "1",
    title: "Monthly Q&A calls with rescue mentors",
    detail: "Guardians submit questions in advance and get actionable feedback in live sessions.",
  },
  {
    step: "2",
    title: "Printable care logs and medication trackers",
    detail: "Templates keep every helper aligned on dosing, weight trends, and behaviour changes.",
  },
  {
    step: "3",
    title: "Rescue spotlights and onboarding tips",
    detail: "Partner rescues share real cases with set-up lessons new adopters can apply immediately.",
  },
]

const communityCards = [
  {
    heading: "Care streaks",
    value: "92%",
    detail: "Guardians who follow the weekend pulses report calmer pigs, cleaner habitats, and smoother health check-ins within two weeks.",
  },
  {
    heading: "Community spotlight",
    detail: "Share your habitat glow-up or wellness win in the Guardian Club and we will highlight it in the Friday overview digest.",
  },
]

const homepageSources = [
  {
    href: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
    title: "RSPCA - Guinea pig care overview",
    description: "Companionship, habitat sizing, and enrichment expectations from a national welfare charity.",
  },
  {
    href: "https://vcahospitals.com/know-your-pet/guinea-pigs-feeding",
    title: "VCA Animal Hospitals - Feeding Guinea Pigs",
    description: "Nutritional guardrails covering hay intake, pellet limits, and vitamin C requirements.",
  },
  {
    href: "https://www.aspca.org/pet-care/small-pet-care/guinea-pig-care",
    title: "ASPCA - Guinea Pig Care",
    description: "Daily handling, wellness observation, and enrichment foundations for guardians.",
  },
  {
    href: "https://resources.bestfriends.org/article/guinea-pig-care-guide",
    title: "Best Friends Animal Society - Guinea Pig Care Guide",
    description: "Rescue-backed onboarding steps, bonding guidance, and community support tactics.",
  },
]

export const metadata: Metadata = {
  title: "Guinea Pig Care",
  description:
    "Interactive, evidence-backed guides for guinea pig guardians covering nutrition, habitat, health, enrichment, and adoption.",
>>>>>>> Stashed changes
}

export default function Web() {
  return (
<<<<<<< Updated upstream
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
=======
    <main className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2.75rem] border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-10 sm:py-12 md:grid-cols-[1.15fr,0.85fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface-muted px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-soft">
            Evidence-backed care
          </span>
          <h1 className="font-display text-4xl font-semibold text-heading sm:text-5xl">
            Keep every guinea pig thriving with calm, daily routines.
          </h1>
          <p className="text-base leading-relaxed text-primary">
            Guineaology turns clinical guidance into friendly checklists, planners, and habit builders so new and seasoned guardians can work from the same trusted playbook.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#guardian-guide">Start the guardian guide</Button>
            <Button intent="secondary" href="/diet">
              Plan this week's menu
            </Button>
          </div>
          <dl className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-subtle bg-surface-muted px-4 py-4">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-soft">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-heading">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          <h2 className="font-display text-xl font-semibold text-heading">Launch checklist</h2>
          <p className="text-sm leading-relaxed text-primary">
            Work through these before adoption day so the habitat, nutrition, and record keeping are ready for new arrivals.
          </p>
          <ol className="space-y-4">
            {launchDeck.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-1 inline-flex size-8 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="font-display text-sm font-semibold text-heading">{step.title}</p>
                  <p className="text-sm leading-relaxed text-primary">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="guardian-guide" className="space-y-6">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Guardian guide</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-heading">Three steps to a confident start.</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary">
            Follow the sequence to set up housing, nutrition, and observation routines before you bring new pigs home.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {guardianGuide.map((card) => (
            <div key={card.title} className="flex h-full flex-col gap-3 rounded-3xl border border-subtle bg-surface px-5 py-6 shadow-soft">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                {card.step}
              </span>
              <p className="font-display text-xl font-semibold text-heading">{card.title}</p>
              <p className="text-sm leading-relaxed text-primary">{card.detail}</p>
              <Button intent="quiet" size="sm" href={card.href}>
                {card.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Explore the library</p>
            <h2 className="font-display text-3xl font-semibold text-heading">Guides for every part of their care.</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-primary">
            Each section combines day-to-day routines with emergency preparedness so every guardian can respond quickly and calmly.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pagePreviews.map((preview) => (
            <a
              key={preview.title}
              href={preview.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-subtle bg-surface px-5 py-6 transition hover:border-strong hover:bg-surface-muted"
            >
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-soft">
                  {preview.title}
                </span>
                <p className="text-sm leading-relaxed text-primary">{preview.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent transition group-hover:text-heading">
                {preview.cta}
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      <CareRoutineShowcase />

      <section className="space-y-6">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Principles</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-heading">What guides every recommendation.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-3xl border border-subtle bg-surface px-5 py-5 shadow-soft">
              <p className="font-display text-lg font-semibold text-heading">{principle.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-primary">{principle.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-subtle bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent">Community support</p>
          <h2 className="font-display text-3xl font-semibold text-heading">Built with rescues, behaviourists, and seasoned guardians.</h2>
          <p className="text-sm leading-relaxed text-primary">
            Guineaology is co-written with the people running rescues, handling chronic cases, and coaching adopters every day. Expect practical scenarios, not theory.
          </p>
          <ul className="space-y-3 text-sm text-primary">
            {communityBullets.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-7 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <p className="font-semibold text-heading">{item.title}</p>
                  <p className="leading-relaxed text-primary">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-subtle bg-surface-muted/80 p-6">
          {communityCards.map((card) => (
            <div key={card.heading} className="rounded-2xl border border-subtle bg-surface px-4 py-4 shadow-soft">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-accent">{card.heading}</p>
              {card.value ? <p className="mt-3 font-display text-3xl font-semibold text-heading">{card.value}</p> : null}
              <p className="mt-3 text-sm leading-relaxed text-primary">{card.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <SourceList heading="Trusted sources" sources={homepageSources} />
    </main>
>>>>>>> Stashed changes
  )
}

