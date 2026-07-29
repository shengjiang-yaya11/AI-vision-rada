import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="py-10">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
        <span className="text-xs text-[#bbb]">&copy; {new Date().getFullYear()} AI‑VisionRada — {t('footer.rights')}</span>
        <span className="text-xs text-[#bbb]">16620839283 · <a href="mailto:2212085042@qq.com" className="hover:text-[#999]">2212085042@qq.com</a></span>
      </div>
    </footer>
  )
}
