import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="product" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6">
            Edge Computing Platform
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#features" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              {t('hero.cta')} →
            </a>
            <a href="#download" className="inline-flex items-center px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              {t('download.nav')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
