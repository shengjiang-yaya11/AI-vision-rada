import { useTranslation } from 'react-i18next'
export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-xs text-slate-400">&copy; {new Date().getFullYear()} AI‑VisionRada — {t('footer.rights')}</span>
        <span className="text-xs text-slate-400">16620839283 · <a href="mailto:2212085042@qq.com" className="hover:text-blue-600">2212085042@qq.com</a></span>
      </div>
    </footer>
  )
}
