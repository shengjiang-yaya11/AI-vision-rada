import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="product" className="pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#features" className="inline-flex items-center px-6 py-3 bg-[#2563eb] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors">
              {t('hero.cta')} →
            </a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-[#0f172a] text-sm font-semibold rounded-lg hover:border-gray-300 transition-colors">
              {t('contact.title')}
            </a>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <span>{t('hero.stat1')}</span>
            <span>{t('hero.stat2')}</span>
            <span>{t('hero.stat3')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
