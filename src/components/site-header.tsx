"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#zakres", label: "Zakres prac" },
  { href: "#sprzet", label: "Sprzęt" },
  { href: "#transport", label: "Transport" },
  { href: "#kontakt", label: "Kontakt" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-wide text-foreground uppercase">
            Adam Olejnik
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          <a
            href="tel:502954335"
            className="hidden items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90 md:flex"
          >
            <Phone className="h-4 w-4" />
            502 954 335
          </a>

          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded text-foreground"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium tracking-wide text-foreground uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:502954335"
              className="mt-3 mb-2 flex items-center justify-center gap-2 rounded bg-primary px-4 py-3 text-sm font-bold tracking-wide text-primary-foreground uppercase"
            >
              <Phone className="h-4 w-4" />
              502 954 335
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
