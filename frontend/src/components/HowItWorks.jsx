import { useTranslation } from 'react-i18next'
export default function HowItWorks() {
  const { t } = useTranslation()
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-10">{t('how.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {['step1','step2','step3'].map((s, i) => (
            <div key={s} className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-blue-600 mb-3">{`0${i+1}`}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{t(`how.${s}Title`)}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{t(`how.${s}Desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
