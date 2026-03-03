import Nav from './components/Nav'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import TrackRecord from './components/TrackRecord'
import Thesis from './components/Thesis'
import WhySellToUs from './components/WhySellToUs'
import AcquisitionCriteria from './components/AcquisitionCriteria'
import Process from './components/Process'
import ForInvestors from './components/ForInvestors'
import ForNetwork from './components/ForNetwork'
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
        <TrackRecord />
        <Thesis />          {/* For Sellers — #sellers */}
        <WhySellToUs />     {/* Seller value props — flows from Thesis */}
        <AcquisitionCriteria /> {/* For Brokers — #brokers */}
        <Process />
        <ForInvestors />    {/* For Investors — #investors */}
        <ForNetwork />      {/* For Friends & Family — #network */}
        <Founder />         {/* Team — #team */}
        <FAQ />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
