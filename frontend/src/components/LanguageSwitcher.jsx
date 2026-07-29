import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} className="text-sm text-slate-500 hover:text-slate-900">
        {langs.find(l => l.code === i18n.language)?.label || 'EN'}
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-28 bg-white border border-slate-200 rounded-md shadow-lg z-50 overflow-hidden">
          {langs.map(l => (
            <button key={l.code}
              onClick={() => { i18n.changeLanguage(l.code); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-sm ${i18n.language === l.code ? 'text-blue-600 bg-blue-50 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
