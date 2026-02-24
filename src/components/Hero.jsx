import { siteConfig } from '../site.config'

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We work directly with owners. No brokers in the middle, no corporate bureaucracy,
          no pressure. If you've built something worth holding, let's talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit a Deal
          </a>
          <a
            href="#thesis"
            className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors"
          >
            Learn Our Thesis
          </a>
        </div>
        <p className="text-slate-400 text-sm tracking-wide">
          Confidential&nbsp;&nbsp;•&nbsp;&nbsp;Direct buyer&nbsp;&nbsp;•&nbsp;&nbsp;Long-term owner
        </p>
      </div>
    </section>
  )
}
