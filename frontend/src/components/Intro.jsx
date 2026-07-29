import { useTranslation } from 'react-i18next'
export default function Intro() {
  const { t } = useTranslation()
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('intro.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <p className="text-slate-600 leading-relaxed">{t('intro.p1')}</p>
          <p className="text-slate-600 leading-relaxed">{t('intro.p2')}</p>
        </div>
      </div>
    </section>
  )
}
