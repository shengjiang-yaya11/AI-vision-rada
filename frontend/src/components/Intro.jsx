import { useTranslation } from 'react-i18next'

export default function Intro() {
  const { t } = useTranslation()

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            {t('intro.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 max-w-4xl">
          <p className="text-slate-500 leading-relaxed text-[15px]">
            {t('intro.p1')}
          </p>
          <p className="text-slate-500 leading-relaxed text-[15px]">
            {t('intro.p2')}
          </p>
        </div>
      </div>
    </section>
  )
}
