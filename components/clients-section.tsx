import Image from "next/image"

const clients = [
  {
    name: "Algonova",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Algonova-XRfDpAN9HQHBC1hTsfAyNNIArKG05h.png",
    width: 140,
    height: 48,
    hasDarkBg: false,
    hasWhiteBg: false,
  },
  {
    name: "Jetlend",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jetlend-S9UIwnYoAaYBqx3tVtmImCXINFhQJy.png",
    width: 140,
    height: 48,
    hasDarkBg: false,
    hasWhiteBg: true,
  },
  {
    name: "OneForce",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oneforce-U68TUoa5EhLwQ3O25GIgTfTGjKTa5V.png",
    width: 140,
    height: 48,
    hasDarkBg: false,
    hasWhiteBg: true,
  },
  {
    name: "keyIT",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keyit.PNG-hAvJc6N8WdJ7coM5VV2D04T6dWd326.png",
    width: 120,
    height: 48,
    hasDarkBg: false,
    hasWhiteBg: true,
  },
  {
    name: "BR Group",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brgroup-KeqBsWAnexWdHryoyV8cWr9of4q5aH.png",
    width: 160,
    height: 48,
    hasDarkBg: true,
    hasWhiteBg: false,
  },
  {
    name: "Modifiers",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modifiers-E5LQyHy83mpvp1xQyTbATGZgsJcrzz.png",
    width: 140,
    height: 48,
    hasDarkBg: true,
    hasWhiteBg: false,
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-center text-xs tracking-widest text-neutral-500 uppercase">
          Trusted By
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-14 shrink-0 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
            >
              {client.hasWhiteBg ? (
                <div className="flex h-12 items-center justify-center rounded-lg bg-white/90 px-4">
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="h-8 w-auto object-contain"
                    style={{ maxWidth: `${client.width}px` }}
                  />
                </div>
              ) : (
                <div className="flex h-12 items-center justify-center overflow-hidden rounded-lg px-4">
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="h-10 w-auto rounded-lg object-contain"
                    style={{ maxWidth: `${client.width}px` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
