import { useTranslation } from 'react-i18next'

export default function Intro() {
  const { t } = useTranslation()
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-8">{t('intro.title')}</p>
        <div className="grid sm:grid-cols-2 gap-16 max-w-[860px]">
          <p className="text-[#666] leading-relaxed">{t('intro.p1')}</p>
          <p className="text-[#666] leading-relaxed">{t('intro.p2')}</p>
        </div>
        <hr className="mt-20" />
      </div>
    </section>
  )
}
