// Edit these constants to configure the site.
// QUICK EDIT GUIDE — no need to open Claude Code for text changes:
//   hero.headline / hero.subhead  — the big opening statement
//   fundI.*                       — track record stats and description
//   network.body                  — the "for friends & family" paragraphs
//   ebitdaRange                   — shown in criteria and contact form
//   team[].bio                    — founder bios (array of paragraphs)

export const siteConfig = {
  brand: 'Anoush Holdings',
  tagline: 'We Acquire and Operate Great Businesses',
  email: 'mlowe@anoushholdings.com',
  linkedin: 'https://www.linkedin.com/in/mitch-b-lowe/',

  // ─── Hero ────────────────────────────────────────────────────────────────
  hero: {
    headline: 'We buy and operate great small businesses.',
    subhead:
      "Anoush Holdings is a founder-led acquisition company. We've returned capital to investors, and we're actively looking for our next acquisition — a cash-flowing business in services, manufacturing, or trades whose owner is ready for the right next chapter.",
  },

  // ─── Track Record ────────────────────────────────────────────────────────
  fundI: {
    multiple: '3.5x',
    timeframe: '~3.5 yrs',
    lpReturn: '100%',
    description:
      'Anoush Holdings started as a real estate holding company. We raised capital from a network of investors, deployed it, managed assets directly, and returned the fund — with a 3.5x multiple — in roughly three and a half years. Full capital return and distributions to all LPs.',
    followOn:
      "We're applying that same discipline to operating businesses — with the same emphasis on finding the right opportunity, structuring it well, and being accountable for outcomes.",
  },

  // ─── For Friends & Family ────────────────────────────────────────────────
  network: {
    body: [
      "If you've known us for a while, here's the plain-English version of what we're doing: we're trying to acquire a profitable small business — something like $5–$20M in annual revenue in services, manufacturing, or trades. The kind of owner who's thinking about retirement, not distress. Mitch will buy it and step in as the operating owner.",
      "We returned 3.5x to investors in our first fund. Now we're doing the same with an operating business. If either of the below sounds like someone you know, an introduction would mean a lot.",
    ],
  },

  // ─── Acquisition Criteria ────────────────────────────────────────────────
  geographies: ['Continental United States'],
  ebitdaRange: '$750K – $2.5M',

  ebitdaRangeOptions: [
    'Under $750K',
    '$750K – $1.5M',
    '$1.5M – $2.5M',
    '$2.5M+',
  ],

  // ─── Team ────────────────────────────────────────────────────────────────
  team: [
    {
      name: 'Mitch Lowe',
      title: 'Co-Founder and Operator',
      photo: '/mitch-lowe.jpg',
      linkedin: 'https://www.linkedin.com/in/mitch-b-lowe/',
      email: 'mlowe@anoushholdings.com',
      bio: [
        'Mitch Lowe is a co-founder of Anoush Holdings and will be the owner-operator of the business Anoush Holdings acquires. He is a U.S. Army veteran, a West Point graduate, and is currently pursuing an MBA at Harvard Business School.',
        'Mitch spent five years as an Army Engineer Officer stationed at Fort Carson with the 4th Engineer Battalion. During that time, he co-founded Anoush Holdings as a real estate holding company, teaching himself deal sourcing, structuring, and property management from the ground up. The experience gave him a hands-on foundation in what it actually takes to find, buy, and run an asset for the long term.',
        'After leaving the Army, Mitch joined C Speed, a radar engineering firm that was acquired by NewSpring Capital. Working inside a PE-backed business gave him a firsthand look at how acquisitions work from the inside, and reinforced his conviction that most good small businesses deserve a better outcome than a financial buyer looking for a quick return.',
        'Today, Mitch is focused full-time on acquiring and operating great businesses. He is not a fund manager or a passive investor. He shows up, learns how the business actually runs, works alongside the team, and takes responsibility for outcomes. Mitch will be on site, in the business, and accountable for what happens next.',
        'Mitch lives with his wife Katie and their two daughters.',
      ],
    },
    {
      name: 'Art Avedisian',
      title: 'Co-Founder and Limited Partner',
      photo: '/art-avedisian.jpg',
      linkedin: 'https://www.linkedin.com/in/art-avedisian-4033851/',
      email: 'aavedisian@anoushholdings.com',
      bio: [
        'Art Avedisian is the Co-Founder and Limited Partner of Anoush Holdings. He brings more than three decades of experience building, leading, and scaling businesses across healthcare technology, financial services, and aerospace and defense.',
        'Art began his career in medical device product development at Welch Allyn before taking the helm as President of Cowley Associates, a boutique advertising and public relations firm. He went on to co-found LifeLink Monitoring, serving as President and CEO, where he built the company from the ground up into a remote patient monitoring service provider that focused on at-risk, chronically ill patients. That experience gave him a deep understanding of what it takes to operate a technology business through every stage of growth.',
        "He later founded and led Cygma Corp, a subsidiary of Chatham Financial, one of the largest independent financial risk advisory firms in the world, where he built out the derivatives business across Latin America and other developing markets. His work there sharpened his expertise in deal structuring, capital markets, and operating in complex environments. Most recently, Art served as EVP of Strategic Initiatives at C Speed where he led the development of the company's persistent airborne surveillance business and ultimately, C Speed's sale to NewSpring Holdings.",
        'Outside of his professional career, Art is a private pilot and serves on the board of ServingLeaders Ministries, reflecting a long-standing commitment to faith, service, and community.',
        'Art lives in Kennett Square, PA with his wife Tina and their six children.',
      ],
    },
  ],
}
