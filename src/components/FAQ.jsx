import { useState } from 'react'

// To add/edit questions: update the faqs array below.

const faqs = [
  {
    q: 'What happens to my employees after you buy?',
    a: "Your team is the reason the business works. I'm not coming in to cut headcount or reorganize things to hit a margin target. I'll be in the building, learning from your people, working alongside them. The measure of a good acquisition isn't just the financials. It's whether the people who were there before the sale still want to be there a year after it.",
  },
  {
    q: 'Why should I trust you with something I spent 30 years building?',
    a: "Honestly, you shouldn't trust me yet. Trust is earned. What I can tell you is that I'll be the owner-operator, personally accountable for what comes next. There's no fund timeline pushing me toward a flip. I take stewardship seriously, not as a pitch, but as a genuine responsibility. The best thing I can do is show up the way I say I will, and let that speak for itself.",
  },
  {
    q: 'What makes you different from a private equity firm?',
    a: "PE firms answer to a fund with a timeline. I answer to the business. No management fees, no portfolio of companies competing for my attention, and no exit strategy written into the deal at closing. I'm buying a business to run it, not to package it for the next buyer.",
  },
  {
    q: 'What if I care about more than just the price?',
    a: "Most of the sellers I respect do. If the legacy of your name matters, if you want your customers and your people to have real continuity after you leave, I'm the right conversation to have. A number on a term sheet isn't the only thing on the table.",
  },
  {
    q: 'How do you finance acquisitions?',
    a: "A combination of equity from my investor network and debt financing. I've done the pre-work with SBA and cash-flow lenders so I'm not starting from scratch when a deal comes together. Every structure is deal-specific and I'm upfront about that from day one.",
  },
  {
    q: "What if I'm not ready to sell yet?",
    a: "No problem at all. Some of my best conversations have been with owners who are a year or two out. Getting to know each other early makes the whole process easier when the time comes. Reach out whenever it feels right.",
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
