import { siteConfig } from '../site.config'

export default function CTABand() {
  return (
    <section className="bg-blue-600 py-20 px-4 sm:px-6 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to start a conversation?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          There's no commitment and no pressure. Tell us about your business and let's see if there's a fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Submit a Deal
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block bg-white/10 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}
