import { siteConfig } from '../site.config'

const stats = [
  { value: siteConfig.fundI.multiple,  label: 'Fund I return multiple' },
  { value: siteConfig.fundI.timeframe, label: 'Time to full distribution' },
  { value: siteConfig.fundI.lpReturn,  label: 'Capital returned to LPs' },
]

export default function TrackRecord() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">Track Record</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
          Fund I: 3.5x return in approximately 3.5 years.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl space-y-4">
          <p className="text-slate-600 text-lg leading-relaxed">{siteConfig.fundI.description}</p>
          <p className="text-slate-600 text-lg leading-relaxed">{siteConfig.fundI.followOn}</p>
        </div>
      </div>
    </section>
  )
}
