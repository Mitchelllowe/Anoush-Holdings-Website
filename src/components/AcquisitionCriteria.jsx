import { siteConfig } from '../site.config'

const idealFit = [
  '$1M–$3M in EBITDA',
  'Established for 5+ years with a stable customer base',
  'Owner-operated with a reliable team in place',
  'Based in the continental US',
  'Recurring or repeat revenue base with predictable cash flow',
  'A path to growth and an energized team ready to run with it',
  'Clean books, or at least explainable ones',
  'Owner ready for a transition within 6–18 months',
]

const notAFit = [
  'Pre-revenue or early-stage startups',
  'Distressed or turnaround situations',
  'Real estate or heavily asset-intensive businesses',
  'Highly regulated industries (cannabis, firearms, etc.)',
  'Top 5 customers represent more than 50% of revenue',
  'Businesses primarily dependent on new construction activity',
  'PE-backed or roll-up-driven situations',
]

export default function AcquisitionCriteria() {
  const ranges = [
    { label: 'Geography', value: siteConfig.geographies.join(', ') },
    { label: 'EBITDA',    value: siteConfig.ebitdaRange },
  ]

  return (
    <section id="criteria" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">Acquisition Criteria</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
          What we're looking for.
        </h2>

        {/* Range pills */}
        <div className="flex flex-wrap gap-4 mb-10">
          {ranges.map(({ label, value }) => (
            <div key={label} className="bg-white border border-slate-200 rounded-lg px-5 py-3 shadow-sm">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{label}</p>
              <p className="text-slate-900 font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ideal Fit */}
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

          {/* Not a Fit */}
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
      </div>
    </section>
  )
}
