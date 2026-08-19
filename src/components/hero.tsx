import { Phone, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero text-hero-foreground"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-excavator.png"
          alt="Koparka kołowa podczas pracy na placu budowy"

    className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero via-hero/80 to-hero/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded bg-primary px-3 py-1 text-xs font-bold tracking-widest text-primary-foreground uppercase">
            <MapPin className="h-3.5 w-3.5" />
            <a href="https://maps.app.goo.gl/Dcn1R1evMLECPYns7">
              Pułtusk, Maków Mazowiecki i okolice
            </a>
          </div>
          <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance uppercase md:text-6xl lg:text-7xl">
            Usługi koparką i transport materiałów sypkich
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-hero-foreground/80">
            Profesjonalne usługi koparką kołową oraz transport wywrotką 3-osiową
            z hydroburtą. Realizuję zlecenia dla firm i osób prywatnych -
            szybko, solidnie i w konkurencyjnych cenach.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:502954335"
              className="inline-flex items-center justify-center gap-2 rounded bg-primary px-6 py-3.5 text-base font-bold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              <Phone className="h-5 w-5" />
              Zadzwoń po wycenę
            </a>
            <a
              href="https://www.olx.pl/oferty/uzytkownik/250Tj"
              target="_blank"
              className="inline-flex items-center justify-center rounded border border-hero-foreground/30 px-6 py-3.5 text-base font-bold tracking-wide text-hero-foreground uppercase transition-colors hover:bg-hero-foreground/10"
            >
              <img src={"/olx.ico"} width={24} height={24} className="mr-2" />
              Zobacz usługi na OLX
            </a>
          </div>

          <p className="mt-6 text-sm tracking-wide text-hero-foreground/60 uppercase">
            Szybkie terminy • Elastyczne godziny pracy
          </p>
        </div>
      </div>
    </section>
  )
}
