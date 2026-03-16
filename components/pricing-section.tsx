import { Check } from "lucide-react"

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
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Pricing
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
          <p className="text-sm text-neutral-400">From $300 per implementation day</p>
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
