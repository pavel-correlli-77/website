const painPoints = [
  {
    title: "Turnover and slow onboarding",
    description:
      "CRM discipline drops without daily leadership. New managers take too long to ramp.",
  },
  {
    title: "Leads receive identical follow-ups regardless of behavior",
    description:
      "High-intent prospects get the same messages as cold leads. Conversion suffers.",
  },
  {
    title: "Managers spend too much time on manual CRM work",
    description:
      "Notes, fields, invoices, follow-ups and pipeline updates take 10–15 minutes per call.",
  },
  {
    title: "Sales calls lose context",
    description:
      "Without structured summaries, teams forget objections, commitments, and next steps.",
  },
]

export function PainSection() {
  return (
    <section id="pain" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Typical problems in lead-driven businesses we solve
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
