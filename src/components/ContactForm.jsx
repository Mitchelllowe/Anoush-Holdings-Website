import { useState } from 'react'
import { siteConfig } from '../site.config'

const contactTypes = [
  { value: 'seller',       label: "I'm a business owner thinking about selling" },
  { value: 'broker',       label: "I'm a broker with a deal to discuss" },
  { value: 'investor',     label: "I'm interested in learning about Fund II" },
  { value: 'introduction', label: "I'd like to make an introduction" },
]

const notesPlaceholder = {
  seller:       'Tell us about your business — industry, years in operation, reason for considering a sale, anything else relevant…',
  broker:       'Brief deal overview — industry, revenue range, location, seller situation, your timeline…',
  investor:     'Tell us a bit about yourself and your investment background. No pitch deck needed — just a conversation.',
  introduction: 'Who are you connecting us with, and why do you think there might be a fit?',
  '':           'Tell us whatever feels relevant…',
}

const empty = { type: '', name: '', email: '', company: '', location: '', ebitda: '', notes: '' }

function validate(data) {
  const errors = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }
  return errors
}

function inputClass(hasError) {
  return [
    'w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    hasError ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white',
  ].join(' ')
}

function Field({ label, id, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    setServerError(false)
    try {
      const res = await fetch('https://formspree.io/f/mykdlwlv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setServerError(true)
      }
    } catch {
      setServerError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const showBizFields = form.type === 'seller' || form.type === 'broker'

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Get in touch.</h2>
        <p className="text-slate-600 mb-10">
          All information is kept strictly confidential. You can also reach us directly at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">We got it. Thank you.</h3>
            <p className="text-slate-600">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* Audience selector */}
            <Field label="I'm reaching out as a…" id="type">
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className={inputClass(false)}
              >
                <option value="">Select one…</option>
                {contactTypes.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name *" id="name" error={errors.name}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={inputClass(!!errors.name)}
                />
              </Field>
              <Field label="Email *" id="email" error={errors.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClass(!!errors.email)}
                />
              </Field>
            </div>

            {/* Business fields — sellers and brokers only */}
            {showBizFields && (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Business Name" id="company">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Industries"
                      className={inputClass(false)}
                    />
                  </Field>
                  <Field label="Location (City, State)" id="location">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="Phoenix, AZ"
                      className={inputClass(false)}
                    />
                  </Field>
                </div>
                <Field label="EBITDA (approx.)" id="ebitda">
                  <select
                    id="ebitda"
                    name="ebitda"
                    value={form.ebitda}
                    onChange={handleChange}
                    className={inputClass(false)}
                  >
                    <option value="">Select a range</option>
                    {siteConfig.ebitdaRangeOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </Field>
              </>
            )}

            <Field label="Tell us more" id="notes">
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={5}
                placeholder={notesPlaceholder[form.type]}
                className={inputClass(false)}
              />
            </Field>

            {serverError && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or email us directly at{' '}
                <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
