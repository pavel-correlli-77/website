const painPoints = [
  {
    title: "Managers lose lead context between calls",
    description:
      "After dozens of calls, reps forget what the lead asked, objected to or agreed on. The next conversation feels less personal and less effective.",
  },
  {
    title: "Lead follow-ups ignore buyer behavior",
    description:
      "Campaigns and reminders often stay the same regardless of stage, intent, source or past interactions. High-intent leads get under-served, while colder leads get over-messaged.",
  },
  {
    title: "CRM data entry takes time away from selling",
    description:
      "Reps are expected to capture dozens of fields, notes and next steps after every call. It slows them down, creates inconsistency and leaves CRM data incomplete.",
  },
  {
    title: "Sales onboarding depends too much on managers",
    description:
      "With frequent turnover, new reps need constant call reviews and feedback to reach acceptable performance. Sales leaders spend too much time coaching the basics manually.",
  },
]

export function PainSection() {
  return (
    <section id="pain" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Typical operational problems in businesses that sell through calls
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
