import { useState } from 'react'

const faqs = [
  {
    q: 'How are you financing acquisitions?',
    a: 'Acquisitions are structured with a combination of equity from a network of private investors and debt financing through SBA lenders. We have had direct conversations with SBA lenders who have qualified us for deals within our target criteria, so we are not starting from scratch when a deal comes together. Every transaction is structured deal by deal, and we are straightforward about that from the start.',
  },
  {
    q: 'Are you a real buyer or a broker?',
    a: "We are a direct buyer. We are not a broker, intermediary, or roll-up aggregator. When you submit a deal to us, you're talking directly to the person who would own and operate the business. We do not shop deals to other buyers.",
  },
  {
    q: 'Do I need a broker to work with you?',
    a: "No. We work directly with sellers and welcome no-broker conversations. That said, if you already have a broker or advisor involved, we're happy to work with them too.",
  },
  {
    q: 'What industries are you interested in?',
    a: "We're industry-agnostic within services, light manufacturing, specialty distribution, and trades. We're most drawn to businesses with recurring or repeat revenue, a stable customer base, and a team in place.",
  },
  {
    q: 'How do you handle confidentiality?',
    a: 'We take confidentiality seriously. We sign a mutual NDA early in the process and do not share any information about your business with third parties without your explicit permission. We also avoid contacting your employees or customers without your prior approval.',
  },
  {
    q: 'How long does the process typically take?',
    a: 'From first call to close typically ranges from 60 to 120 days depending on deal complexity and financing. We aim to be efficient and respectful of your time. Every step in our process has a clear purpose.',
  },
  {
    q: "What if I'm not ready to sell yet?",
    a: "That's completely fine. Many of our best conversations happen with owners who are 12–24 months out from a transition. Getting to know each other early makes the eventual process much smoother. Reach out whenever you're ready to start a conversation.",
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex justify-between items-center py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900">{q}</span>
        <svg
          className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="text-slate-600 text-sm leading-relaxed pb-5">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">
          Common questions.
        </h2>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
