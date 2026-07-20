import { useState } from 'react'
import { siteConfig } from '../site.config'

function TeamMember({ member }) {
  const [open, setOpen] = useState(false)
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Compact header: photo + name/title/links + toggle */}
      <div className="flex items-center gap-5">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="flex-shrink-0 w-20 h-20 rounded-xl object-cover object-top"
          />
        ) : (
          <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-slate-200 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-400">{initials}</span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
          <p className="text-slate-500 text-sm mb-2">{member.title}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span className="hidden sm:inline">{open ? 'Hide bio' : 'Read bio'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expandable bio */}
      {open && (
        <div className="mt-5 pt-5 border-t border-slate-200 space-y-4">
          {member.bio.map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

function InternCard({ intern }) {
  const initials = intern.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        {intern.photo ? (
          <img
            src={intern.photo}
            alt={intern.name}
            className="flex-shrink-0 w-14 h-14 rounded-full object-cover object-top"
          />
        ) : (
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="text-lg font-bold text-slate-400">{initials}</span>
          </div>
        )}
        <div className="min-w-0">
          <h4 className="font-bold text-slate-900 leading-tight">{intern.name}</h4>
          <p className="text-slate-500 text-sm">{intern.title}</p>
        </div>
      </div>
      <div className="mt-4 space-y-0.5">
        {intern.school && (
          <p className="text-slate-700 text-sm font-medium">{intern.school}</p>
        )}
        {(intern.major || intern.classYear) && (
          <p className="text-slate-500 text-sm">
            {[intern.major, intern.classYear && `Class of ${intern.classYear}`]
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Founder() {
  const interns = siteConfig.interns || []

  return (
    <section id="team" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">The Team</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
          Who you'd be working with.
        </h2>
        <div className="space-y-6">
          {siteConfig.team.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>

        {interns.length > 0 && (
          <div className="mt-6">
            <div className="grid sm:grid-cols-3 gap-5">
              {interns.map((intern, i) => (
                <InternCard key={intern.name + i} intern={intern} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
