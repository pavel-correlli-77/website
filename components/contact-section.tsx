import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="cta" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center md:p-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Book a Workflow Review
          </h2>
          <div className="mx-auto mt-6 max-w-2xl text-sm text-neutral-300">
            <p>We’ll map your lead-to-client workflow and identify where automation can remove manual work and improve conversion.</p>
            <p className="mt-3">You’ll leave the call with a clear automation plan.</p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://cal.com/correlli/n8n-ai-agents-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#659680] px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Schedule Workflow Review
              <ArrowRight size={16} />
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-500">No commitment required.</p>
        </div>
      </div>
    </section>
  )
}
