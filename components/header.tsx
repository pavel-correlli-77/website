"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Core", href: "#core" },
  { label: "Problems", href: "#pain" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

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

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden rounded-full bg-[#659680] px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 md:inline-block"
        >
          Book Sales Workflow Review
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-block rounded-full bg-[#659680] px-5 py-2 text-center text-sm font-semibold text-black"
            >
              Book Sales Workflow Review
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
