import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center md:p-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Start working smarter
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-neutral-400">
            Book a free discovery call. We will audit your operations, identify
            automation opportunities, and build a roadmap to save you time and
            money.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://cal.com/correlli/n8n-ai-agents-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-600">
            No commitment required. Let&apos;s talk about your business.
          </p>
        </div>
      </div>
    </section>
  )
}
