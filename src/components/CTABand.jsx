import { siteConfig } from '../site.config'

export default function CTABand() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">

        {/* Sellers & Brokers */}
        <div className="pb-12 md:pb-0 md:pr-12">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Sellers & Brokers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Have a business in mind?</h2>
          <p className="text-slate-300 text-base mb-6 max-w-sm">
            No commitment and no pressure. Tell us about the business and let's see if there's a
            fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit a Deal
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>

        {/* Investors */}
        <div className="pt-12 md:pt-0 md:pl-12">
          <p className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-3">
            Investors
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Interested in Fund II?</h2>
          <p className="text-slate-300 text-base mb-6 max-w-sm">
            We keep our LP base small and intentional. If you're an accredited investor and this
            sounds interesting, let's talk.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Request a Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
