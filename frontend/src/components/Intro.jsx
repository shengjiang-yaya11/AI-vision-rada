import { useTranslation } from 'react-i18next'

export default function Intro() {
  const { t } = useTranslation()

  return (
    <section className="py-16 sm:py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-6">
          {t('intro.title')}
        </h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
          <p className="text-gray-500 leading-relaxed">
            {t('intro.p1')}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {t('intro.p2')}
          </p>
        </div>
      </div>
    </section>
  )
}
