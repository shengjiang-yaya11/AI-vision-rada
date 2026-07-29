import { useTranslation } from 'react-i18next'
import { Cpu } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#d6e0eb] bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b42318] to-[#d33b2d] flex items-center justify-center shadow-md shadow-[#b42318]/20">
              <Cpu size={16} className="text-white" />
            </div>
            <p className="text-sm text-[#5f6c82]">
              &copy; {year} AI-VisionRada. {t('footer.rights')}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#5f6c82] hover:text-[#182233] transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-[#5f6c82] hover:text-[#182233] transition-colors">
              {t('footer.terms')}
            </a>
            <a
              href="mailto:2212085042@qq.com"
              className="text-sm text-[#5f6c82] hover:text-[#b42318] transition-colors"
            >
              2212085042@qq.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
