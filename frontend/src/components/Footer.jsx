import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-400">
          &copy; {year} AI‑VisionRada &mdash; {t('footer.rights')}
        </div>
        <a href="mailto:2212085042@qq.com" className="text-sm text-gray-400 hover:text-[#2563eb] transition-colors">
          2212085042@qq.com
        </a>
      </div>
    </footer>
  )
}
