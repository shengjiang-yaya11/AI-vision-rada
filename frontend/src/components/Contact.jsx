import { useTranslation } from 'react-i18next'
export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('contact.title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{t('contact.email')}</div>
            <a href="mailto:2212085042@qq.com" className="text-slate-900 font-medium hover:text-blue-600">{t('contact.email')}</a>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{t('contact.phone')}</div>
            <a href="tel:+8616620839283" className="text-slate-900 font-medium hover:text-blue-600">{t('contact.phoneValue')}</a>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</div>
            <div className="text-slate-900 font-medium">{t('contact.location')}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Company</div>
            <div className="text-slate-900 font-medium leading-snug">{t('contact.company')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
