const materials = [
  "Piasek 0/2",
  "Żwir 2/16",
  "Żwir 16-32",
  "Kruszywo",
  "Ziemia ogrodowa",
  "Gruz",
  "Beton suchy",
  "Kruszywo betonowe",
  "Mieszanka",
  "Kamień",
  "Piasek zasypowy",
  "Pospółka",
]

export function Transport() {
  return (
    <section
      id="transport"
      className="bg-foreground py-16 text-background md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded md:h-96">
            <img
              src="/images/dump-truck.png"
              alt="Wywrotka 3-osiowa 6x6 z hydroburtą rozładowująca materiał sypki"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-bold tracking-widest text-background/40 uppercase">
              Transport materiałów
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance uppercase md:text-5xl">
              Wywrotka 3-osiowa 6x6 z hydroburtą
            </h2>
            <p className="mt-4 leading-relaxed text-background/80">
              Kiprowanie na bok lub tył, przewóz ładunków sypkich z dowozem na
              miejsce. Dowóz materiałów oraz wywóz ziemi i gruzu z budowy.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {materials.map((material) => (
                <span
                  key={material}
                  className="rounded border border-background/20 bg-background/5 px-3 py-1.5 text-sm font-medium text-background/90"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
