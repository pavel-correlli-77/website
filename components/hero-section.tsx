import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40 md:pb-32">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-widest text-neutral-400 uppercase md:text-base">
              AI Automation Studio
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Stop chasing AI trends.
              <br />
              <span className="text-neutral-500">Start using them.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 lg:text-xl">
              We help small businesses become more productive and profitable by
              eliminating manual tasks and streamlining sales and marketing
              through custom, end-to-end automation.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://cal.com/correlli/n8n-ai-agents-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                Book a Discovery Call
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Founder photo */}
          <div className="relative flex-shrink-0">
            <div className="relative h-[360px] w-[300px] overflow-hidden rounded-2xl border border-white/10 md:h-[440px] md:w-[360px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Master%20Pavel%20Inchikov-ZjZdvcZuStUL0Azf0ilm5R6Uxj7P0R.jpg"
                alt="Pavel Inchikov, Founder of Correlli Engineering"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#0a0a0a]/90 px-5 py-3 backdrop-blur-sm md:left-6 md:right-6">
              <p className="text-sm font-semibold text-white">
                Pavel Inchikov
              </p>
              <p className="text-xs text-neutral-500">
                Founder & Systems Architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
