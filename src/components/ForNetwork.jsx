import { siteConfig } from '../site.config'

// To edit the body paragraphs, update siteConfig.network.body in site.config.js.
// To edit the ask cards, update the `asks` array directly below.

const asks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Know a business owner?',
    description:
      "Do you know someone who owns a business and might be thinking about what comes next — even if they're not ready to sell today? An introduction costs nothing and could mean the world to them down the road. We're looking for owners in services, manufacturing, or trades with $750K–$2.5M in EBITDA.",
    cta: 'Intro to a Business Owner →',
    subject: 'Introduction: Business Owner',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Know an investor?',
    description:
      "Do you know an accredited investor who's interested in direct, private deals? We keep our LP base small and we're selective, but we're always open to a warm introduction to the right person.",
    cta: 'Intro to an Investor →',
    subject: 'Introduction: Investor',
  },
]

export default function ForNetwork() {
  const { email } = siteConfig

  return (
    <section id="network" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">For Friends & Family</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Here's what we're building — and how you can help.
        </h2>

        <div className="max-w-3xl space-y-4 mb-12">
          {siteConfig.network.body.map((para, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {asks.map(({ icon, title, description, cta, subject }) => (
            <div key={title} className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-3">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                className="inline-block bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
