import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="product" className="pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[640px]">
          <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-8">Edge Computing Platform</p>

          <h1 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-medium tracking-[-0.025em] text-[#111] leading-[1.08] mb-8">
            {t('hero.title')}
          </h1>

          <p className="text-base text-[#666] leading-relaxed mb-10 max-w-[520px]">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center gap-8">
            <a href="#features" className="inline-flex items-center px-6 py-3 bg-[#2563eb] text-white text-sm rounded-md hover:bg-[#1d4ed8] transition-colors">
              {t('hero.cta')} &rarr;
            </a>
            <a href="#download" className="text-sm text-[#999] hover:text-[#111] transition-colors">
              {t('download.nav')} &darr;
            </a>
          </div>
        </div>

        <hr className="mt-20" />
      </div>
    </section>
  )
}
