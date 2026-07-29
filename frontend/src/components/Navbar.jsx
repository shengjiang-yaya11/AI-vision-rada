import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const links = ['product', 'features', 'download', 'about', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const label = (k) => k === 'download' ? t('download.nav') : t(`nav.${k}`)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold text-base text-slate-900">AI‑Vision<span className="text-blue-600">Rada</span></a>
        <div className="flex items-center gap-6">
          {links.map(k => (
            <a key={k} href={`#${k}`} className="text-sm text-slate-500 hover:text-slate-900 transition-colors hidden sm:inline">
              {label(k)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}
