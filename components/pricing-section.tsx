import { Check } from "lucide-react"

const pricingItems = [
  "Most systems are deployed in 2–7 days",
  "Implementation starts from $300/day",
  "Optional monthly support keeps systems stable and improving",
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Typical engagement
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
          <p className="text-base font-semibold text-white">Implementation starts from $300/day</p>
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
