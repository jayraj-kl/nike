import { CustomerReviews } from "./sections/CustomerReviews"
import { Hero } from "./sections/Hero"
import { PopularProducts } from "./sections/PopularProducts"
import { Services } from "./sections/Services"
import { SpecialOffer } from "./sections/SpecialOffer"
import { Subscribe } from "./sections/Subscribe"
import { SuperQuality } from "./sections/SuperQuality"
import { Footer } from "./sections/Footer"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div>
      <main className="relative">
        <Navbar />
        <section className="xl:padding-l wide:padding-r padding-b"> <Hero /> </section>
        <section className="padding"> <PopularProducts /> </section>
        <section className="padding"> <SuperQuality /> </section>
        <section className="padding-x py-10"> <Services /> </section>
        <section className="padding"> <SpecialOffer /> </section>
        <section className="bg-pale-blue padding"> <CustomerReviews /> </section>
        <section className="padding-x sm:py-32 py-16 w-full"> <Subscribe /> </section>
        <section className="padding bg-black padding-x padding-t pb-8"> <Footer /> </section>
      </main>
    </div>
  )
}

export default App
