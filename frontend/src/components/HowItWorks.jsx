import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            {t('how.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-1">
          {['step1', 'step2', 'step3'].map((step, i) => (
            <div key={step} className="relative group px-8 py-10 border-r border-slate-100 last:border-r-0">
              <div className="text-[120px] font-black text-slate-50 leading-none select-none absolute top-0 right-4 group-hover:text-blue-50 transition-colors">
                {i + 1}
              </div>
              <div className="relative">
                <div className="w-8 h-[2px] bg-[#2563eb] mb-6" />
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {t(`how.${step}Title`)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(`how.${step}Desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
