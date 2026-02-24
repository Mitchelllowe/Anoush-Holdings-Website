const bullets = [
  'Profitable, cash-flowing businesses in services, light manufacturing, specialty distribution, or trades.',
  'A track record of at least five years with a stable, repeat customer base.',
  'A team in place that can continue to run the business day to day.',
  'An owner who is ready for a transition and wants to know their business will be in good hands.',
]

export default function Thesis() {
  return (
    <section id="thesis" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">Our Thesis</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          We look for great businesses hiding in plain sight.
        </h2>
        <div className="space-y-4 mb-8">
          <p className="text-slate-600 text-lg leading-relaxed">
            Small business is the backbone of America, and we believe its best days are ahead. Every
            day, owners across the country show up, take care of their people, and build something
            worth being proud of. We want to be the right next chapter for those businesses.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are not looking for a turnaround or a trend. We are looking for businesses with a
            proven track record, real customers, and a team that has earned their trust. When we find
            the right fit, we take our responsibility seriously. We see ourselves as stewards of what
            the previous owner built, not extractors of it.
          </p>
        </div>
        <ul className="space-y-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-slate-700 leading-relaxed">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
