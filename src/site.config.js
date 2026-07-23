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
    headline: 'Buying exceptional Main Street businesses.',
    highlight: 'Main Street', // rendered in the accent color within the headline
    subhead:
      "Our mission is to buy great local businesses, protect the people who make them special, and grow them for the years ahead.",
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
      title: 'Co-Founder and Managing Partner',
      photo: '/mitch-lowe.jpg',
      linkedin: 'https://www.linkedin.com/in/mitch-b-lowe/',
      email: 'mlowe@anoushholdings.com',
      bio: [
        'Mitch Lowe is the Co-Founder and Operator of Anoush Holdings, and will be the hands-on owner-operator of the business it acquires. He is a West Point graduate, a U.S. Army veteran, and is currently pursuing his MBA at Harvard Business School, where he leads external affairs for the Christian Fellowship club.',
        'He spent five years as an Army Engineer Officer at Fort Carson with the 4th Engineer Battalion. During that time he founded Anoush Holdings as a real estate investment firm, teaching himself how to source deals, structure them, raise capital, and manage property from the ground up.',
        'He raised capital from a network of investors, bought and managed the assets directly, and returned the fund at 3.5x in about three years, with every investor made whole. It taught him what it takes to be accountable for other people’s money and to run an asset well over the long term. That is the same discipline he will bring to your business.',
        'After the Army, he joined C Speed, a radar engineering firm later acquired by NewSpring Capital. Working inside a private-equity-backed business showed him how acquisitions really play out from the inside, and convinced him that most good small businesses deserve a better outcome than a financial buyer chasing a quick exit.',
        'Today he is focused full-time on buying and operating one great business. He is not a fund manager or a passive investor. He will be on site, learning how the business actually runs, working alongside your team, and personally accountable for what comes next.',
        'He lives with his wife Katie and their two daughters.',
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
        'Art began his career in medical device product development at Welch Allyn before taking the helm as President of Cowley Associates, a boutique advertising and public relations firm. He went on to co-found LifeLink Monitoring, serving as President and CEO, where he built the company from the ground up into a remote patient monitoring service provider that focused on at-risk, chronically ill patients. That experience gave him a deep understanding of what it takes to build and operate a technology business through every stage of growth.',
        "He later served as global head of business innovation for Chatham Financial, one of the largest independent financial risk advisory firms in the world. There he founded and led Cygma Corp, where he built out the emerging markets derivatives business across Latin America and other developing markets. These experiences sharpened his expertise in deal structuring, capital markets, and operating in complex environments. Most recently, Art served as a managing partner and EVP of Strategic Initiatives at C Speed where he led the development of the company's persistent airborne surveillance business and ultimately, C Speed's sale to NewSpring Holdings.",
        'Outside of his professional career, Art is a private pilot and serves on the boards of ServingLeaders Ministries and the local high school hockey club, reflecting a long-standing commitment to faith, service, and community.',
        'Art lives in Kennett Square, PA with his wife Tina and their six children.',
      ],
    },
  ],

  // ─── Interns ─────────────────────────────────────────────────────────────
  interns: [
    {
      name: 'Cole Stepanik',
      title: 'Investment Intern',
      photo: '/cole.jpg',
      school: 'University of Massachusetts Lowell',
      major: 'Finance & Accounting',
      classYear: '2027',
    },
    {
      name: 'Alessio Vaccaro',
      title: 'Investment Intern',
      photo: '/alessio.jpg',
      school: 'Elon University',
      major: 'Finance',
      classYear: '2029',
    },
    {
      name: 'Raahul Venkatesan',
      title: 'Investment Intern',
      photo: '/raahul.jpg',
      school: 'Indiana University',
      major: 'Finance & Accounting',
      classYear: '2028',
    },
  ],
}
