import { RefreshCw, FileText, Route, Brain } from "lucide-react"

const services = [
  {
    icon: RefreshCw,
    title: "Lead Reactivation Automation",
    description:
      "Instead of sending identical messages to everyone, the system reacts to real lead behavior.",
  },
  {
    icon: FileText,
    title: "Automated CRM and Invoicing Workflow",
    description:
      "Managers should not spend time on operational tasks. CRM updates, documents, and invoices happen automatically.",
  },
  {
    icon: Route,
    title: "Client Journey Automation",
    description:
      "Automated journeys after key events: trial booked, trial attended, trial missed, consultation completed.",
  },
  {
    icon: Brain,
    title: "AI Sales Call Memory",
    description:
      "AI automatically generates structured summaries of each call and attaches them to the CRM.",
  },
]

export function ServicesSection() {
  return (
    <section id="solutions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs tracking-[0.2em] text-neutral-500 uppercase">
            Typical systems we deploy
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Automation systems that keep revenue moving
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
