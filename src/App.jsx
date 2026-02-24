import Nav from './components/Nav'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import Thesis from './components/Thesis'
import AcquisitionCriteria from './components/AcquisitionCriteria'
import Process from './components/Process'
import WhySellToUs from './components/WhySellToUs'
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
        <Thesis />
        <AcquisitionCriteria />
        <Process />
        <WhySellToUs />
        <Founder />
        <FAQ />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
