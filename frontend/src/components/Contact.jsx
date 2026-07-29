import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-16">{t('contact.title')}</p>
        <div className="grid sm:grid-cols-4 gap-16 max-w-[800px]">
          <div>
            <div className="text-xs text-[#999] uppercase tracking-wider mb-2">{t('contact.email')}</div>
            <a href="mailto:2212085042@qq.com" className="text-sm text-[#111] hover:text-[#999] transition-colors">{t('contact.email')}</a>
          </div>
          <div>
            <div className="text-xs text-[#999] uppercase tracking-wider mb-2">{t('contact.phone')}</div>
            <a href="tel:+8616620839283" className="text-sm text-[#111] hover:text-[#999] transition-colors">{t('contact.phoneValue')}</a>
          </div>
          <div>
            <div className="text-xs text-[#999] uppercase tracking-wider mb-2">Location</div>
            <div className="text-sm text-[#111]">{t('contact.location')}</div>
          </div>
          <div>
            <div className="text-xs text-[#999] uppercase tracking-wider mb-2">Company</div>
            <div className="text-sm text-[#111]">{t('contact.company')}</div>
          </div>
        </div>
        <hr className="mt-20" />
      </div>
    </section>
  )
}
