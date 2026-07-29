import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2">
          {t('about.title')}
        </h2>
        <h3 className="text-lg text-[#2563eb] font-semibold mb-6">
          {t('about.company')}
        </h3>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
          <p className="text-gray-500 leading-relaxed">{t('about.p1')}</p>
          <p className="text-gray-500 leading-relaxed">{t('about.p2')}</p>
        </div>
      </div>
    </section>
  )
}
