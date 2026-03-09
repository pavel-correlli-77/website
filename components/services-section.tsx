import {
  BrainCircuit,
  Workflow,
  Mail,
  Database,
  Users,
  BarChart3,
} from "lucide-react"

const services = [
  {
    icon: BrainCircuit,
    title: "AI Consulting for SMB",
    description:
      "Identifying the best AI models and tools to cut through the noise, build AI agents, and mitigate risks.",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description:
      "Building, testing, and optimizing custom workflows on n8n to connect apps and handle complex data transformations.",
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    description:
      "Designing end-to-end automated marketing workflows including outbound email drips, lead reactivation, and personalized campaigns.",
  },
  {
    icon: Database,
    title: "Systems & Data Integration",
    description:
      "Connecting isolated applications to ensure smooth data flow and improve CRM accuracy.",
  },
  {
    icon: Users,
    title: "CRM & Lead Management",
    description:
      "AI-powered lead qualification, automated scoring, and real-time alerts for high-intent leads.",
  },
  {
    icon: BarChart3,
    title: "Reporting Automation",
    description:
      "Creating dashboards with real-time analysis and automated insights for better decision-making.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            What we engineer
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            From strategy to execution, we build automation systems that
            deliver measurable ROI.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '1fr' }}>
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                <service.icon size={20} className="text-neutral-300" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
