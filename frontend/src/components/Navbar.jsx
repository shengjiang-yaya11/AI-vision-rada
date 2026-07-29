import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Cpu } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = ['home', 'features', 'downloads', 'about', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Cpu size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              AI-Vision<span className="text-brand-400">Rada</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {key === 'downloads' ? t('downloads.title') : t(`nav.${key}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-white/5 mt-0">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {key === 'downloads' ? t('downloads.title') : t(`nav.${key}`)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
