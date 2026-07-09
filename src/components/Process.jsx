import { useState } from 'react'

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
    description: 'We sign a mutual NDA, then request a short, standard info package so we can move quickly. The full checklist is below.',
    timeline: 'Day 5',
  },
  {
    number: '04',
    title: 'Letter of Intent',
    description: "If there's a fit, we deliver a clean, clear LOI with our offer terms. No games, no lowballs.",
    timeline: 'Days 20–30',
  },
  {
    number: '05',
    title: 'Diligence',
    description: 'We move quickly and respectfully. We aim to minimize disruption to your day-to-day operations.',
    timeline: 'Days 30–90',
  },
  {
    number: '06',
    title: 'Close',
    description: 'We work with your attorney and ours to reach a clean close, then we get to work.',
    timeline: 'Days 90–120',
  },
]

// Info package requested in Step 03 (after the mutual NDA).
// Each item includes a short note on how to pull it from QuickBooks.
const infoRequest = [
  {
    item: '5 years of Profit & Loss statements',
    how: 'QuickBooks: Reports → "Profit and Loss" → set the period to each of the last 5 years (or one range with columns by Year), then Export.',
  },
  {
    item: '5 years of Balance Sheets, as of January 1',
    how: 'QuickBooks: Reports → "Balance Sheet" → set the "as of" date to January 1 for each of the last 5 years, then Export.',
  },
  {
    item: '5 years of business tax returns',
    how: 'From your accountant, or the federal returns you filed (Form 1120, 1120-S, or Schedule C) for each year.',
  },
  {
    item: '5 years of revenue by customer (anonymized is fine)',
    how: 'QuickBooks: Reports → "Sales by Customer Summary" → run one year at a time, then Export. You can relabel customers as A, B, C.',
  },
  {
    item: '5 years of cost by vendor (anonymized is fine)',
    how: 'QuickBooks: Reports → "Expenses by Vendor Summary" → run one year at a time, then Export. Vendor names can be relabeled the same way.',
  },
  {
    item: 'A rough staff breakdown by role (anonymized is fine)',
    how: 'A simple list is all we need. For example: "18 technicians, 4 sales reps, 2 estimators, 1 office manager." No names or org chart required.',
  },
]

export default function Process() {
  const [showInfo, setShowInfo] = useState(false)

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

        {/* Info request callout — the detail behind Step 03 (collapsible, centered) */}
        <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-blue-50 border border-blue-100 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-blue-600 font-medium tracking-widest uppercase">Step 03: After the NDA</p>
              <h3 className="text-lg font-bold text-slate-900">What we'll ask for</h3>
            </div>
          </div>
          <p className="text-slate-600 text-sm">
            Once a mutual NDA is signed, here is the exact package we request. Most of it pulls straight from QuickBooks in a few clicks:
          </p>
          <button
            type="button"
            onClick={() => setShowInfo(!showInfo)}
            aria-expanded={showInfo}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            {showInfo ? 'Hide the checklist' : 'Show the checklist'}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showInfo ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showInfo && (
            <ul className="space-y-4 mt-5">
              {infoRequest.map(({ item, how }) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{how}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
