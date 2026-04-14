import { siteConfig } from '../site.config'

// To edit headline/subhead: update siteConfig.hero in site.config.js

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          {siteConfig.hero.headline}
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteConfig.hero.subhead}
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
        <p className="text-slate-400 text-sm tracking-wide mt-6">
          Confidential&nbsp;&nbsp;•&nbsp;&nbsp;Direct buyer&nbsp;&nbsp;•&nbsp;&nbsp;Veteran-led
        </p>
      </div>
    </section>
  )
}
