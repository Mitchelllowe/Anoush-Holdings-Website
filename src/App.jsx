import Nav from './components/Nav'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import Thesis from './components/Thesis'
import WhySellToUs from './components/WhySellToUs'
import Process from './components/Process'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import CTABand from './components/CTABand'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        <CredibilityStrip />
<Thesis />          {/* For Sellers — #sellers */}
        <WhySellToUs />     {/* Seller value props — flows from Thesis */}
        <Process />
        <Founder />         {/* Team — #team */}
        <FAQ />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
