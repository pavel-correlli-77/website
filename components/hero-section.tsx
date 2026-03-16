import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40 md:pb-32">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-[0.2em] text-neutral-400 uppercase">
              Sales Automation
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Automate Sales Workflows
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 lg:text-xl">
              We automate the full journey from <span className="text-white">lead -> call -> trial -> follow-up -> payment</span> for
              businesses that sell through consultations or phone calls.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
              Less manual work for sales teams, more transparency, faster onboarding.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#659680] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                Book Review
                <ArrowRight size={16} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors hover:border-white/30 hover:text-white"
              >
                See how we work
              </a>
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                For businesses where every client starts with a call
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-300">
                {[
                  "Online schools",
                  "Training programs",
                  "Coaching businesses",
                  "Kids academies",
                  "Education platforms",
                  "Service businesses selling through consultations",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="relative h-[360px] w-[300px] overflow-hidden rounded-2xl border border-white/10 md:h-[460px] md:w-[380px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Master%20Pavel%20Inchikov-ZjZdvcZuStUL0Azf0ilm5R6Uxj7P0R.jpg"
                alt="Pavel Inchikov, Founder of Correlli Engineering"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 px-5 py-4 backdrop-blur-sm md:left-6 md:right-6">
              <p className="text-sm font-semibold text-white">Pavel Inchikov</p>
              <p className="text-xs text-neutral-400">
                Former Sales Manager and CSO in lead-driven education businesses
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Go-to-Market engineer for consulting companies
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Automation specialist in a US-based startup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
