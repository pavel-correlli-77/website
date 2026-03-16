const steps = [
  {
    title: "Workflow audit",
    description:
      "We review your lead-to-client process and the manual jobs your managers do every day.",
  },
  {
    title: "Automation design",
    description:
      "We design the automation architecture and align on the flow, tools, and success metrics.",
  },
  {
    title: "Implementation",
    description:
      "We set up self-hosted n8n on your VPS and connect CRM, messaging, calls, and payments.",
  },
  {
    title: "Optimization",
    description:
      "We monitor performance and improve the system monthly to keep it stable and effective.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs tracking-[0.2em] text-neutral-500 uppercase">
            How we work
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A clear path from audit to automation
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#659680]/40 bg-[#659680]/10 text-sm font-semibold text-[#659680]">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
