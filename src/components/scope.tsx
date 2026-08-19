import { Check } from "lucide-react"

const scope = [
  "Wykopy pod fundamenty, budynki, szamba, przyłącza wod.-kan., baseny",
  "Kopanie stawów i oczek wodnych",
  "Wyrywanie karp",
  "Wyburzenia i rozbiórki",
  "Niwelacja i korytowanie terenu",
  "Załadunek materiałów sypkich",
  "Wywóz ziemi i gruzu z budowy",
  "Przygotowanie terenu pod kostkę brukową, drogi dojazdowe i place",
]

export function Scope() {
  return (
    <section id="zakres" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              Zakres usług
            </p>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground text-balance md:text-5xl">
              Kompleksowe prace ziemne
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Od precyzyjnych wykopów pod fundamenty po przygotowanie terenu pod inwestycję -
              wykonuję pełen zakres prac ziemnych dla firm i klientów indywidualnych.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-1">
            {scope.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded border border-border bg-card p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <span className="leading-relaxed text-card-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
