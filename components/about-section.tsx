import { Zap, TrendingUp, Settings } from "lucide-react"

const highlights = [
  {
    icon: Zap,
    title: "Eliminate Manual Work",
    description:
      "Transform time-consuming tasks into automated workflows that run 24/7.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused",
    description:
      "Scale through algorithmic efficiency rather than increased headcount.",
  },
  {
    icon: Settings,
    title: "Systems Thinking",
    description:
      "Bridge Sales, Marketing, and Operations into one predictable ecosystem.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Engineering efficiency for small business
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            Correlli bridges the gap between Sales, Marketing, and Operations
            with end-to-end AI automation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <item.icon size={20} className="text-neutral-300" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
