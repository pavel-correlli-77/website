import { RefreshCw, FileText, Route, Brain } from "lucide-react"

const services = [
  {
    icon: RefreshCw,
    title: "Automatic call summaries and context memory",
    description:
      "Every call is transcribed and summarized. Key objections, commitments and next steps are attached to the deal so the next conversation always starts with full context.",
  },
  {
    icon: FileText,
    title: "Behavior-based follow-ups and reactivation",
    description:
      "Communication adapts to stage, intent and previous actions. Leads receive the right follow-up instead of being pushed through the same sequence.",
  },
  {
    icon: Route,
    title: "Automatic CRM updates after every call",
    description:
      "Key fields, notes and next steps are extracted from conversations and written directly to CRM. Reps focus on selling instead of filling forms.",
  },
  {
    icon: Brain,
    title: "AI feedback and coaching for sales calls",
    description:
      "Calls are automatically analyzed against your sales framework. Reps receive structured feedback so new hires ramp faster and managers spend less time on manual reviews.",
  },
]

export function ServicesSection() {
  return (
    <section id="solutions" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Operational AI systems we deploy
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
