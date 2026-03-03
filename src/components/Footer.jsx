import { siteConfig } from '../site.config'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-1">{siteConfig.brand}</p>
            <p className="text-sm">{siteConfig.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="#sellers"   className="hover:text-white transition-colors">Selling?</a>
            <a href="#brokers"   className="hover:text-white transition-colors">Brokers</a>
            <a href="#investors" className="hover:text-white transition-colors">Investors</a>
            <a href="#network"   className="hover:text-white transition-colors">Network</a>
            <a href="#team"      className="hover:text-white transition-colors">Team</a>
            <a href="#faq"       className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact"   className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-8 text-xs space-y-2">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
          <p>
            <span className="font-medium text-slate-300">Privacy: </span>
            All information submitted through this site is kept strictly confidential and will not be
            shared with third parties without your explicit consent.
          </p>
          <p>
            <span className="font-medium text-slate-300">Disclaimer: </span>
            This site is for informational purposes only and does not constitute an offer to purchase
            any business or security. All transactions are subject to due diligence, final terms, and
            applicable law.
          </p>
        </div>
      </div>
    </footer>
  )
}
