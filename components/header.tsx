import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no-text-correlli-logo-gradient-fU9JZCHAGrHNJUJ9SmwNoMKhO6DjtB.png"
            alt="Correlli Engineering logo"
            width={80}
            height={80}
            className="h-16 w-16 rounded-xl object-contain md:h-20 md:w-20"
          />
          <span className="text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">
            Correlli Engineering
          </span>
        </a>
      </div>
    </header>
  )
}
