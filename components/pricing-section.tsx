import { ArrowRight, Check } from "lucide-react"

const pricingItems = [
  "Automation projects start from $300 per implementation day",
  "Typical systems take 2–7 days to deploy",
  "Monthly support keeps systems stable and evolving",
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs tracking-[0.2em] text-neutral-500 uppercase">
            Pricing
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-neutral-400">Implementation day rate</p>
              <p className="mt-2 text-4xl font-semibold text-white">$300</p>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#659680] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Schedule a Call
              <ArrowRight size={16} />
            </a>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-neutral-300 md:grid-cols-3">
            {pricingItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={14} className="mt-0.5 text-[#659680]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
