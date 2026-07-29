import { useTranslation } from 'react-i18next'
import { Cpu } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-400 flex items-center justify-center">
              <Cpu size={16} className="text-white" />
            </div>
            <p className="text-sm text-gray-500">
              &copy; {year} AI-VisionRada. {t('footer.rights')}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              {t('footer.terms')}
            </a>
            <a
              href="mailto:2212085042@qq.com"
              className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
            >
              2212085042@qq.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
