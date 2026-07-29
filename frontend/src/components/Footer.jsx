import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-slate-400">
          &copy; {year} AI‑VisionRada — {t('footer.rights')}
        </span>
        <span className="text-xs text-slate-400">
          16620839283 &nbsp;·&nbsp; <a href="mailto:2212085042@qq.com" className="hover:text-[#2563eb] transition-colors">2212085042@qq.com</a>
        </span>
      </div>
    </footer>
  )
}
