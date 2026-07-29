import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-16">{t('how.title')}</p>

        <div className="grid sm:grid-cols-3 gap-20 max-w-[900px]">
          {['step1','step2','step3'].map((s, i) => (
            <div key={s}>
              <div className="text-xs text-[#999] mb-6">{String(i+1).padStart(2,'0')}</div>
              <h3 className="text-xl font-medium text-[#111] mb-3">{t(`how.${s}Title`)}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{t(`how.${s}Desc`)}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
      </div>
    </section>
  )
}
