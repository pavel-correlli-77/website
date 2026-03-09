import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Day Rate",
    price: "$300",
    label: "per day",
    popular: false,
    description: "For specific consulting or development tasks.",
    features: [
      "On-demand expertise",
      "Flexible scheduling",
      "Consulting or development",
      "Same-week availability",
    ],
    cta: "Get Started",
  },
  {
    name: "Automation Setup",
    price: "$900",
    label: "starting from",
    popular: true,
    description:
      "Building and launching specific custom automation solutions.",
    features: [
      "Scoped automation project",
      "Custom workflow development",
      "Testing & optimization",
      "Deployment & handoff",
    ],
    cta: "Get Started",
  },
  {
    name: "Automation Strategy and Setup",
    price: "$1,800",
    label: "starting from",
    popular: false,
    description:
      "Best for businesses seeking efficiency gains or unsure where to start.",
    features: [
      "Full operational audit",
      "AI strategy & roadmap",
      "Custom end-to-end automation",
      "Integration with existing tools",
      "30-day post-launch support",
    ],
    cta: "Get Started",
  },
  {
    name: "Strategic Alliance",
    price: "Shared Success",
    label: "win-win model",
    popular: false,
    description:
      "Long-term fractional automation leadership and continuous scaling.",
    features: [
      "Co-founding & AI Venture building",
      "Custom AI Agent R&D",
      "Experimental scaling & revenue share",
      "High-stakes process transformation",
    ],
    cta: "Explore Synergy",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Choose the pricing model that fits your needs.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${plan.popular
                  ? "border-white/20 bg-white/[0.04]"
                  : "border-white/10 bg-white/[0.02]"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}
              <h3 className="text-base font-semibold text-white">
                {plan.name}
              </h3>
              <div className="mt-4">
                {plan.label && (
                  <span className="text-xs text-neutral-500 uppercase">
                    {plan.label}
                  </span>
                )}
                <p className="text-3xl font-bold tracking-tight text-white">
                  {plan.price}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {plan.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-neutral-400"
                  >
                    <Check
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-neutral-600"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href="https://cal.com/correlli/n8n-ai-agents-discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${plan.popular
                      ? "bg-white text-black hover:opacity-90"
                      : "border border-white/15 text-neutral-300 hover:border-white/30 hover:text-white"
                    }`}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
