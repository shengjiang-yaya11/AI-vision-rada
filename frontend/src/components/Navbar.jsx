import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = ['product', 'features', 'download', 'about', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLabel = (key) => {
    if (key === 'download') return t('download.nav')
    return t(`nav.${key}`)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-[#0f172a] tracking-tight">
          AI‑Vision<span className="text-[#2563eb]">Rada</span>
        </a>
        <div className="flex items-center gap-8">
          {navLinks.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-[13px] text-slate-400 hover:text-[#0f172a] transition-colors font-medium uppercase tracking-wider hidden sm:inline"
            >
              {navLabel(key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
