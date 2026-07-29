import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-10">
          {t('how.title')}
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {['step1', 'step2', 'step3'].map((step, i) => (
            <div key={step} className="group">
              <div className="text-5xl font-extrabold text-gray-100 mb-4 group-hover:text-[#2563eb]/10 transition-colors select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                {t(`how.${step}Title`)}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(`how.${step}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
