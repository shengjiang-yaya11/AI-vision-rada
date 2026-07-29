import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = languages.find((l) => l.code === i18n.language) || languages[0]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#d6e0eb] bg-white hover:bg-[#f8fafc] transition-all duration-200 text-sm"
      >
        <Globe size={16} className="text-[#5f6c82]" />
        <span className="hidden sm:inline">{current.flag}</span>
        <span className="hidden sm:inline text-[#5f6c82]">{current.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-[#d6e0eb] rounded-xl shadow-[0_12px_32px_rgba(16,24,40,0.1)] overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[#f8fafc] ${
                i18n.language === lang.code ? 'text-[#b42318] bg-[#fff1f0] font-semibold' : 'text-[#5f6c82]'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
