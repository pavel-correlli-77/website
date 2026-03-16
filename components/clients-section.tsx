import Image from "next/image"

const clients = [
  {
    name: "Algonova",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Algonova-XRfDpAN9HQHBC1hTsfAyNNIArKG05h.png",
    invert: false,
  },
  {
    name: "Jetlend",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jetlend-S9UIwnYoAaYBqx3tVtmImCXINFhQJy.png",
    invert: false,
  },
  {
    name: "OneForce",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oneforce-U68TUoa5EhLwQ3O25GIgTfTGjKTa5V.png",
    invert: false,
  },
  {
    name: "keyIT",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keyit.PNG-hAvJc6N8WdJ7coM5VV2D04T6dWd326.png",
    invert: false,
  },
  {
    name: "BR Group",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brgroup-KeqBsWAnexWdHryoyV8cWr9of4q5aH.png",
    invert: true,
  },
  {
    name: "Modifiers",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modifiers-E5LQyHy83mpvp1xQyTbATGZgsJcrzz.png",
    invert: true,
  },
]

export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-center text-xs tracking-[0.2em] text-neutral-500 uppercase">
          Clients & partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-14 shrink-0 items-center justify-center opacity-70 transition-opacity hover:opacity-100"
            >
              <div className="flex h-12 items-center justify-center rounded-lg bg-white/90 px-4">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={140}
                  height={48}
                  className={`h-8 w-auto object-contain ${client.invert ? "invert" : ""}`}
                  style={{ maxWidth: "140px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
