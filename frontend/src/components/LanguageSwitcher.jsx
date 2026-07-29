import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: 'JP' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="text-[13px] text-[#999] hover:text-[#111] uppercase tracking-wide font-normal">
        {languages.find(l => l.code === i18n.language)?.label || 'EN'}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-28 bg-white border border-[#e5e5e5] z-50">
          {languages.map(l => (
            <button key={l.code} onClick={() => { i18n.changeLanguage(l.code); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm ${i18n.language === l.code ? 'text-[#111] bg-[#f5f5f5]' : 'text-[#999]'} hover:bg-[#f5f5f5]`}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
