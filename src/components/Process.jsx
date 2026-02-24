const steps = [
  {
    number: '01',
    title: 'Submit a Deal',
    description: 'Fill out our short form or reach out directly. No deck or financials required at this stage.',
    timeline: 'Day 1',
  },
  {
    number: '02',
    title: 'Intro Call',
    description: 'A no-pressure 30-minute call to learn about your business, your goals, and what a good outcome looks like for you.',
    timeline: 'Days 2–5',
  },
  {
    number: '03',
    title: 'NDA + Info Request',
    description: 'We sign a mutual NDA and request a light info package: a few years of P&Ls and a basic overview.',
    timeline: 'Week 1–2',
  },
  {
    number: '04',
    title: 'Letter of Intent',
    description: "If there's a fit, we deliver a clean, clear LOI with our offer terms. No games, no lowballs.",
    timeline: 'Weeks 2–4',
  },
  {
    number: '05',
    title: 'Diligence',
    description: 'We move quickly and respectfully. We aim to minimize disruption to your day-to-day operations.',
    timeline: '30–60 days',
  },
  {
    number: '06',
    title: 'Close',
    description: 'We work with your attorney and ours to reach a clean close, then we get to work.',
    timeline: 'Day 60–90',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">Our Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          What to expect.
        </h2>
        <p className="text-slate-600 text-lg mb-14 max-w-2xl">
          Sellers deserve a clear, respectful process. Here's how we typically work from first contact to close.
        </p>

        {/* Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              {/* Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-1">{step.timeline}</p>
                <h3 className="font-semibold text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
