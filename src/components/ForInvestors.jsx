// To edit this section: update the bullet points and card copy directly in this file.
// The CTA routes to #contact where the "I'm interested in learning about Fund II" option is pre-selectable.

const differentiators = [
  {
    title: 'No management fees',
    desc: 'None. Not on committed capital, not on invested capital. We earn our return when you earn yours.',
  },
  {
    title: 'Deal-by-deal co-investment',
    desc: 'You see the specific business before committing capital. No blind pool.',
  },
  {
    title: 'Operator-led',
    desc: "Mitch will be in the business full-time. This isn't a financial sponsor play — it's an owner-operator acquisition.",
  },
  {
    title: 'Selective LP base',
    desc: "We're deliberate about who we work with. We want aligned, long-term partners, not passive capital.",
  },
]

export default function ForInvestors() {
  return (
    <section id="investors" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">For Investors</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          We're raising capital for our next acquisition.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <p className="text-slate-600 text-lg leading-relaxed">
              Anoush Holdings is raising capital under a fundless sponsor model. Rather than a blind
              pool, investors co-invest alongside us in a specific, identified acquisition — you see
              the deal before you commit capital.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mitch Lowe will be the full-time operator. This is not a passive investment in a
              management team you'll never meet — it's a concentrated bet on a specific business, a
              specific operator, and a specific plan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 text-lg mb-5">
              What's different about this structure
            </h3>
            <ul className="space-y-4">
              {differentiators.map(({ title, desc }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-semibold text-slate-900">{title} — </span>
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-lg">
          <h3 className="font-semibold text-slate-900 mb-2">Interested in learning more?</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            We keep our LP base small and intentional. If you're an accredited investor and this
            sounds interesting, reach out and we'll set up a conversation.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Request a Conversation →
          </a>
        </div>
      </div>
    </section>
  )
}
