import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pavel is a systems architect who brings a true product mindset to automation. He helped us visualize our operational gaps and engineered an autonomous agentic pipeline to bridge them. If you need a robust, clockwork mechanism rather than a simple 'service sync' \u2014 Pavel is the right expert for this scale of challenge.",
    name: "Misha Ipatov",
    title: "CEO, Algonova by Algorithmics",
    location: "Czech Republic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/misha_ipatov_ai-xqm78WDFTR8QPO2DN3q4fvgF7JjXIb.jpg",
  },
  {
    quote:
      "Pavel was a part of my team and worked as a project manager. When it comes to solving complex and uncommon challenges, Pavel does an outstanding job combining marketing expertise with technical skills. His responsibility, pro-activity, and creativity easily place him in the top 10% of the market!",
    name: "Sergey Safonov",
    title: "COO, OneForce.com",
    location: "USA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sergey%20Safonov-QwBr6ADt4FZHuXQaP8IjWT6HYfGOQT.png",
  },
  {
    quote:
      "What stood out the most was Pavel\u2019s project management approach\u2014structured, methodical, and results-driven. He was always available for follow-up questions and provided detailed, example-driven answers that clarified even the most complex aspects. If you\u2019re looking for an expert to help you run end-to-end email automations or complex AI agentic marketing flows, Pavel is the person to go to.",
    name: "Elmira Gazizova",
    title: "AI Adoption Lead, keyIT",
    location: "Switzerland",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elmira%20Gazizova-kB5SlKpOZnVvJ6NfaDoR09qKwRyeKS.png",
  },
  {
    quote:
      "With Pavel, we finally automated our end-to-end marketing interactions with clients: reactivation, behaviour-based actions, invoicing and payments, all seamlessly integrated with our CRM. We also implemented AI scoring for sales calls and AI support for sales processes. Pavel has a deep understanding of product, systems, and marketing, and approaches problems with a truly strategic mindset.",
    name: "Inna Kianova",
    title: "CMO, Algonova by Algorithmics",
    location: "Czech Republic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inna%20Kianova-PQ3fi9RONR69hl6Ea0agntAMDVRozG.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            What our clients say
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div>
                <Quote size={24} className="mb-4 text-neutral-600" />
                <p className="text-sm leading-relaxed text-neutral-400">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">
                    {t.title} &middot; {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
