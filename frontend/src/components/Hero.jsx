import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="product" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background geometry */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 via-blue-50/50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="dot-pattern absolute inset-0 opacity-[0.35]" />
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
          <div className="max-w-2xl">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#2563eb] mb-5 bg-blue-50 px-3 py-1.5 rounded-full">
                Edge Computing Platform
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] text-[#0f172a] leading-[1.08] mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex items-center px-7 py-3.5 bg-[#0f172a] text-white text-sm font-semibold rounded-xl hover:bg-[#1e293b] transition-all shadow-lg shadow-slate-200"
              >
                {t('hero.cta')}
                <span className="ml-2">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 bg-white border border-slate-200 text-[#0f172a] text-sm font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                {t('contact.title')}
              </a>
            </div>
          </div>

          {/* Right side: 3 stat blocks */}
          <div className="hidden lg:flex flex-col gap-4 pb-2">
            {['stat1', 'stat2', 'stat3'].map((stat, i) => (
              <div
                key={stat}
                className="w-48 px-5 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                style={{ marginLeft: `${i * 12}px` }}
              >
                <div className="text-2xl font-extrabold text-[#0f172a] tracking-tight">
                  {i === 0 ? '< 10ms' : i === 1 ? 'x86' : '24/7'}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wider">
                  {t(`hero.${stat}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
