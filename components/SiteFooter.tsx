import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-orange-200/60 bg-[#fff3da]/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <div>
          <p className="font-display text-2xl font-semibold text-[#2f1a0b]">Vet-reviewed knowledge for every guardian.</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5f3b1f]">
            Guineaology partners with licensed exotic veterinarians to validate every guideline. Share insights with your own vet
            and adapt them to each pig's medical history.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm uppercase tracking-[0.35em] text-[#8b5527] md:text-right">
          <Link href="/diet" className="transition hover:text-[#2f1a0b]">
            Nutrition library
          </Link>
          <Link href="/health" className="transition hover:text-[#2f1a0b]">
            Health checklists
          </Link>
          <Link href="/adoption" className="transition hover:text-[#2f1a0b]">
            Adoption support
          </Link>
        </div>
      </div>
    </footer>
  )
}
