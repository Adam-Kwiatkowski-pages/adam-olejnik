import { Shovel, Wrench, Cog } from "lucide-react"

const buckets = [
  {
    icon: Shovel,
    title: "Łyżka skarpowa",
    description: "Do wyrównywania i profilowania terenu oraz skarp.",
  },
  {
    icon: Cog,
    title: "Łyżka z zębami",
    description: "Do kopania w twardym i zwięzłym gruncie.",
  },
  {
    icon: Wrench,
    title: "Wąska łyżka",
    description: "Idealna do fundamentów i przyłączy wod.-kan.",
  },
]

export function Equipment() {
  return (
    <section id="sprzet" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Sprzęt
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance text-foreground uppercase md:text-5xl">
            Koparka kołowa z 3 łyżkami
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Odpowiednie narzędzie do każdego zadania - od precyzyjnych wykopów
            po profilowanie terenu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {buckets.map((bucket) => (
            <div
              key={bucket.title}
              className="rounded border border-border bg-card p-6"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary text-primary-foreground">
                <bucket.icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-lg font-bold tracking-wide text-card-foreground uppercase">
                {bucket.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {bucket.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded border border-border bg-secondary p-6">
          <h3 className="font-heading text-lg font-bold tracking-wide text-foreground uppercase">
            Wynajem zagęszczarki 90 kg
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Solidne zagęszczanie gruntu i kostki brukowej - dostępne do
            wynajęcia razem z usługą lub osobno.
          </p>
        </div>
      </div>
    </section>
  )
}
