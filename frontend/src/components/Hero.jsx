import { useTranslation } from 'react-i18next'
import { ArrowRight, Play, Zap, Shield, Eye } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Animated scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent"
          style={{ animation: 'scanDown 4s ease-in-out infinite' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20">
              <Zap size={14} className="text-brand-400" />
              <span className="text-sm text-brand-300 font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
              >
                {t('hero.cta')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold transition-all duration-300"
              >
                <Play size={18} />
                {t('hero.demo')}
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-brand-400" />
                <span className="text-sm text-gray-500">99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-brand-400" />
                <span className="text-sm text-gray-500">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Abstract geometric graphic */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Main glowing orb */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/30 via-brand-600/10 to-accent-400/20 blur-3xl" />

              {/* Concentric rings */}
              <div className="absolute inset-8 rounded-full border border-brand-400/20" />
              <div className="absolute inset-16 rounded-full border border-brand-400/10" />
              <div className="absolute inset-24 rounded-full border border-accent-400/15" />

              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 shadow-2xl shadow-brand-500/40 flex items-center justify-center">
                <Eye size={28} className="text-white" />
              </div>

              {/* Orbiting nodes */}
              {[...Array(4)].map((_, i) => {
                const angle = (i * Math.PI) / 2 + Math.PI / 4
                const r = 38
                const x = 50 + r * Math.cos(angle)
                const y = 50 + r * Math.sin(angle)
                return (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-brand-400 shadow-lg shadow-brand-400/50"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
                    }}
                  />
                )
              })}

              {/* Data lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <line x1="80" y1="80" x2="200" y2="200" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
                <line x1="320" y1="120" x2="200" y2="200" stroke="rgba(34,211,238,0.12)" strokeWidth="1" />
                <line x1="120" y1="300" x2="200" y2="200" stroke="rgba(99,102,241,0.1)" strokeWidth="1" />
                <line x1="300" y1="280" x2="200" y2="200" stroke="rgba(34,211,238,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      <style>{`
        @keyframes scanDown {
          0%, 100% { top: 0%; opacity: 0; }
          50% { top: 100%; opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  )
}
