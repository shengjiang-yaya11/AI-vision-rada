import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
                {t('about.title')}
              </h2>
            </div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">{t('about.company')}</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-8">{t('about.companyZh')}</p>
            <p className="text-slate-500 leading-relaxed text-[15px]">{t('about.p1')}</p>
          </div>

          <div className="flex items-center">
            <div className="bg-[#f8fafc] rounded-3xl p-10 w-full">
              <p className="text-slate-500 leading-relaxed text-[15px] mb-8">{t('about.p2')}</p>

              <div className="h-px bg-slate-200 mb-8" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Location</div>
                  <div className="text-sm font-semibold text-[#0f172a]">{t('contact.location')}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Founded</div>
                  <div className="text-sm font-semibold text-[#0f172a]">Shenzhen, China</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
