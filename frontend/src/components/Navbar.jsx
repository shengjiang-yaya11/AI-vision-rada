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
          ? 'bg-white/95 backdrop-blur-md border-b border-[#d6e0eb] shadow-[0_4px_24px_rgba(16,24,40,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#b42318] to-[#d33b2d] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md shadow-[#b42318]/20">
              <Cpu size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold text-[#182233] tracking-tight">
              AI-Vision<span className="text-[#b42318]">Rada</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="px-4 py-2 rounded-lg text-sm text-[#5f6c82] hover:text-[#182233] hover:bg-[#f8fafc] transition-all duration-200 font-medium"
              >
                {key === 'downloads' ? t('downloads.title') : t(`nav.${key}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#5f6c82] hover:text-[#182233] hover:bg-[#f8fafc] transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-[#d6e0eb] mt-0 bg-white">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm text-[#5f6c82] hover:text-[#182233] hover:bg-[#f8fafc] transition-colors font-medium"
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
