import { Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="kontakt" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance md:text-5xl">
              Zadzwoń i zapytaj o wycenę
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-primary-foreground/80">
              Szybkie terminy i elastyczne godziny pracy. Realizuję zlecenia dla firm i osób
              prywatnych.
            </p>
            <a
              href="tel:502954335"
              className="mt-8 inline-flex items-center gap-3 rounded bg-foreground px-7 py-4 text-xl font-bold tracking-wide text-background transition-opacity hover:opacity-90"
            >
              <Phone className="h-6 w-6" />
              502 954 335
            </a>
          </div>

          <div className="grid gap-4">
            <div className="flex items-start gap-4 rounded bg-primary-foreground/10 p-5">
              <MapPin className="mt-1 h-6 w-6 flex-none" />
              <div className="w-full" style={{ width: "100%" }}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
                  Obszar działania
                </h3>
                <p className="mt-1 text-primary-foreground/80">Pułtusk, Maków Mazowiecki i okolice</p>
                <div className="flex flex-col gap-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9668.464874703177!2d21.0814079!3d52.7120475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e934bd2da53a5%3A0x24bb463b418b5553!2sUs%C5%82ugi%20kopark%C4%85%20wywrotk%C4%85%20piach%20%C5%BCwir%20ziemia%20wynajem%20zag%C4%99szczarki%20roboty%20ziemne%20Adam%20Olejnik!5e0!3m2!1spl!2spl!4v1781295494015!5m2!1spl!2spl" width="100%" height="250" style={{ border: 0 }} loading="lazy" ></iframe>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27307.63610417074!2d21.05285133182075!3d52.774098808377765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e8f5eabf71dff%3A0xcb7ce9faf53d79d4!2sUs%C5%82ugi%20koparka%20wywrotka%20piach%20%C5%BCwir%20kruszywo%20wynajem%20zag%C4%99szczarki%20ziemia%20roboty%20ziemne%20Adam%20Olejnik!5e0!3m2!1spl!2spl!4v1782071625402!5m2!1spl!2spl" width="100%" height="250" style={{ border: 0 }} loading="lazy"></iframe>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded bg-primary-foreground/10 p-5">
              <Clock className="mt-1 h-6 w-6 flex-none" />
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
                  Dostępność
                </h3>
                <p className="mt-1 text-primary-foreground/80">
                  Szybkie terminy • Elastyczne godziny pracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
