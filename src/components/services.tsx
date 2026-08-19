const services = [
  {
    title: "Usługi koparką",
    description:
      "Wszechstronne prace ziemne i załadunkowe - idealne na place budowy oraz prace porządkowe.",
    image: "/images/excavator.png",
  },
  {
    title: "Usługi transportowe",
    description: "Transport materiałów, wywóz ziemi i gruzu z budowy.",
    image: "/images/dump-truck.png",
  },
  {
    title: "Wynajem zagęszczarki",
    description:
      "Idealna do prac brukarskich, przygotowania pod kostkę, tarasy, podjazdy, ścieżki oraz zagęszczania gruntu i podsypki.",
    image: "/images/leveller.png",
  },
]

export function Services() {
  return (
    <section id="uslugi" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Specjalizacje
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance text-foreground uppercase md:text-5xl">
            Czym się zajmuję
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold tracking-wide text-card-foreground uppercase">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
