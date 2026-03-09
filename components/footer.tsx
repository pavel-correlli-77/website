import Image from "next/image"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no-text-correlli-logo-gradient-fU9JZCHAGrHNJUJ9SmwNoMKhO6DjtB.png"
            alt="Correlli Engineering logo"
            width={56}
            height={56}
            className="h-14 w-14 rounded-xl object-contain"
          />
          <span className="text-lg font-semibold text-white">
            Correlli Engineering
          </span>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Correlli Engineering. All rights
            reserved.
          </p>
          <a
            href="https://www.linkedin.com/in/pavel-inchikov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
