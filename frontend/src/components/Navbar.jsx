import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = ['product', 'features', 'download', 'about', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 2)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLabel = (key) => {
    if (key === 'download') return t('download.nav')
    return t(`nav.${key}`)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-white border-b border-[#e5e5e5]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-8 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-tight text-[#111]">
          AI‑Vision<span className="text-[#999]">Rada</span>
        </a>
        <div className="flex items-center gap-10">
          {navLinks.map((key) => (
            <a key={key} href={`#${key}`} className="text-[13px] text-[#999] hover:text-[#111] transition-colors font-normal tracking-wide uppercase hidden sm:inline">
              {navLabel(key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
