import { useTranslation } from 'react-i18next'
export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('about.company')}</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">{t('about.companyZh')}</p>
            <p className="text-slate-600 leading-relaxed">{t('about.p1')}</p>
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed mb-8">{t('about.p2')}</p>
            <div className="flex gap-8">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Location</div>
                <div className="text-sm font-medium text-slate-900">{t('contact.location')}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Contact</div>
                <div className="text-sm font-medium text-slate-900">16620839283</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
