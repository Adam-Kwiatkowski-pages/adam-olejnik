import { SiteHeader } from "./components/site-header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Scope } from "./components/scope"
import { Equipment } from "./components/equipment"
import { Transport } from "./components/transport"
import { SiteFooter } from "./components/site-footer"
import { Contact } from "./components/contact"

export function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Scope />
        <Equipment />
        <Transport />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
