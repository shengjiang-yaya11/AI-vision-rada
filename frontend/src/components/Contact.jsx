import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Email</div>
            <a href="mailto:2212085042@qq.com" className="text-sm font-semibold text-[#0f172a] hover:text-[#2563eb] transition-colors break-all">
              {t('contact.email')}
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">{t('contact.phone')}</div>
            <a href="tel:+8616620839283" className="text-sm font-semibold text-[#0f172a] hover:text-[#2563eb] transition-colors">
              {t('contact.phoneValue')}
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Location</div>
            <div className="text-sm font-semibold text-[#0f172a]">{t('contact.location')}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">Company</div>
            <div className="text-sm font-semibold text-[#0f172a] leading-snug">{t('contact.company')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
