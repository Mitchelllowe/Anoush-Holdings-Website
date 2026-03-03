import { siteConfig } from '../site.config'

// To edit criteria lists: update idealFit / notAFit arrays below.
// To edit broker commitment cards: update the commitments array below.
// EBITDA range and geography pull from site.config.js.

const commitments = [
  {
    title: 'We close.',
    description:
      "When we issue an LOI, we mean it. We don't retrade offers at the finish line or string sellers along through diligence.",
  },
  {
    title: "We're financed.",
    description:
      "We've had direct conversations with SBA lenders and cash-flow lenders and have pre-qualification in place. We're not starting from scratch when a deal comes together.",
  },
  {
    title: 'We respect your process.',
    description:
      "We sign NDAs early and don't go around your client. Your relationship is yours. We don't shop deals to other buyers.",
  },
  {
    title: 'We move fast.',
    description:
      'LOI in 2–4 weeks. Diligence in 30–60 days. We aim to minimize disruption to daily operations.',
  },
]

const idealFit = [
  '$750K–$2.5M in EBITDA',
  'Established for 5+ years with a stable customer base',
  'Owner-operated with a reliable team in place',
  'Based in the continental US',
  'Recurring or repeat revenue with predictable cash flow',
  'Clean books, or at least explainable ones',
  'Owner ready for a transition within 6–18 months',
]

const notAFit = [
  'Pre-revenue or early-stage startups',
  'Distressed or turnaround situations',
  'Businesses where value is primarily in underlying real estate',
  'Highly regulated industries (cannabis, firearms, etc.)',
  'Top 5 customers represent more than 50% of revenue',
  'Businesses primarily dependent on new construction activity',
  'PE-backed or roll-up-driven situations',
]

export default function AcquisitionCriteria() {
  const ranges = [
    { label: 'Geography',  value: siteConfig.geographies.join(', ') },
    { label: 'EBITDA',     value: siteConfig.ebitdaRange },
    { label: 'Industries', value: 'Services · Light manufacturing · Specialty distribution · Trades' },
  ]

  return (
    <section id="brokers" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">For Brokers</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          We close. No games, no retrades.
        </h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Your reputation is on the line every time you bring a buyer to a seller. Here's what you
          can count on from us.
        </p>

        {/* Broker commitments */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {commitments.map(({ title, description }) => (
            <div key={title} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Range pills */}
        <div className="flex flex-wrap gap-4 mb-10">
          {ranges.map(({ label, value }) => (
            <div key={label} className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-3">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{label}</p>
              <p className="text-slate-900 font-semibold text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Ideal fit / not a fit */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="font-semibold text-slate-900">Ideal Fit</h3>
            </div>
            <ul className="space-y-3">
              {idealFit.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h3 className="font-semibold text-slate-900">Not a Fit</h3>
            </div>
            <ul className="space-y-3">
              {notAFit.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit a Deal →
          </a>
        </div>
      </div>
    </section>
  )
}
