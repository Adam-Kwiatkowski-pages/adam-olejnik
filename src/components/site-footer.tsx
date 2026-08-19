import { Truck } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-background/15 pb-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold uppercase tracking-wide">
              Adam Olejnik
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-background/60">
            Usługi koparką wywrotką piach żwir ziemia wynajem zagęszczarki roboty ziemne - Pułtusk, Maków Mazowiecki i okolice.
          </p>
        </div>
        <p className="mt-6 text-sm text-background/50">
          © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
