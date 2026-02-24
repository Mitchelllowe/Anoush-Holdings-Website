import { siteConfig } from '../site.config'

function TeamMember({ member }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="flex flex-col sm:flex-row gap-10 items-start">
      {/* Headshot */}
      <div className="flex-shrink-0">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-40 h-40 rounded-2xl object-cover object-top"
          />
        ) : (
          <div className="w-40 h-40 rounded-2xl bg-slate-200 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-400">{initials}</span>
          </div>
        )}
      </div>

      {/* Bio */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
        <p className="text-slate-500 text-sm mb-5">{member.title}</p>
        <div className="space-y-4 mb-6">
          {member.bio.map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">{paragraph}</p>
          ))}
        </div>
        {(member.linkedin || member.email) && (
          <div className="flex flex-wrap gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-600 text-sm font-medium tracking-widest uppercase mb-3">The Team</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
          Who you'd be working with.
        </h2>
        <div className="space-y-16">
          {siteConfig.team.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
