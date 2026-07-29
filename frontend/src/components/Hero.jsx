import { useTranslation } from 'react-i18next'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative pt-24 pb-4">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Main Card */}
        <div className="bg-white border border-[#d6e0eb] rounded-2xl shadow-[0_22px_48px_rgba(16,24,40,0.08)] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4 px-6 py-3.5 bg-gradient-to-r from-[#8f1d16] via-[#b42318] to-[#d33b2d] text-white">
            <span className="inline-flex items-center min-h-[30px] px-3 rounded-full bg-white/20 text-[13px] font-bold">
              <Zap size={14} className="mr-1.5" />
              {t('hero.badge')}
            </span>
            <span className="text-sm opacity-95 hidden sm:inline">v1.0.0 · Production Ready</span>
          </div>

          {/* Hero Body */}
          <div className="grid lg:grid-cols-[1.35fr_0.9fr] gap-5 p-6 bg-gradient-to-b from-[#fffefe] to-[#fff8f8] border-b border-[#d6e0eb]">
            {/* Left Copy */}
            <div>
              <h1 className="text-[clamp(30px,4vw,42px)] leading-tight font-extrabold text-[#182233] mb-3">
                {t('hero.title')}
              </h1>
              <p className="text-[15px] leading-relaxed text-[#5f6c82] mb-4">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#features"
                  className="group inline-flex items-center gap-2 min-h-[44px] px-5 rounded-[10px] bg-gradient-to-br from-[#a12217] to-[#c03124] text-white text-sm font-bold hover:-translate-y-px transition-all shadow-[0_10px_24px_rgba(180,35,24,0.2)]"
                >
                  {t('hero.cta')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#downloads"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-[10px] bg-white border border-[#d6e0eb] text-[#182233] text-sm font-bold hover:-translate-y-px transition-all"
                >
                  {t('hero.demo')}
                </a>
              </div>
            </div>

            {/* Right Info Cards */}
            <div className="grid gap-2.5">
              <div className="p-3.5 border border-[#d6e0eb] rounded-xl bg-white">
                <p className="text-xs font-bold tracking-wider uppercase text-[#b42318] mb-1.5">
                  Real-Time Detection
                </p>
                <p className="text-[15px] font-bold text-[#182233]">&lt; 1ms Latency</p>
              </div>
              <div className="p-3.5 border border-[#d6e0eb] rounded-xl bg-white">
                <p className="text-xs font-bold tracking-wider uppercase text-[#b42318] mb-1.5">
                  Multi-Camera
                </p>
                <p className="text-[15px] font-bold text-[#182233]">100+ Cameras</p>
              </div>
              <div className="p-3.5 border border-[#d6e0eb] rounded-xl bg-white">
                <p className="text-xs font-bold tracking-wider uppercase text-[#b42318] mb-1.5">
                  Privacy-First
                </p>
                <p className="text-[15px] font-bold text-[#182233]">GDPR Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
