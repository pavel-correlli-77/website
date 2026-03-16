import { RefreshCw, FileText, Route, Brain } from "lucide-react"

const services = [
  {
    icon: RefreshCw,
    title: "Behavior-based follow-ups for the right leads",
    description:
      "Reactivate only the leads that match the scenario, without spamming everyone.",
  },
  {
    icon: FileText,
    title: "CRM, invoicing, and documents after each call",
    description:
      "Operational updates happen automatically, without manual entry.",
  },
  {
    icon: Route,
    title: "Automated journeys after key events",
    description:
      "Trial booked, attended, missed, consultation completed.",
  },
  {
    icon: Brain,
    title: "Structured call summaries attached to CRM",
    description:
      "AI memory that preserves context for fast follow-ups.",
  },
]

export function ServicesSection() {
  return (
    <section id="solutions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Systems we deploy
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#659680]/15 text-[#659680]">
                <service.icon size={20} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
