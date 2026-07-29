import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-8">
          {t('contact.title')}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</div>
            <a href="mailto:2212085042@qq.com" className="text-[#0f172a] hover:text-[#2563eb] transition-colors">
              {t('contact.email')}
            </a>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Location</div>
            <div className="text-[#0f172a]">{t('contact.location')}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Company</div>
            <div className="text-[#0f172a]">{t('contact.company')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
