import { useTranslation } from 'react-i18next'
import { MapPin, Target, Users, Globe2 } from 'lucide-react'

const stats = [
  { key: 'founded', icon: MapPin },
  { key: 'focus', icon: Target },
  { key: 'team', icon: Users },
  { key: 'global', icon: Globe2 },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Company info */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('about.title')}</h2>
            <h3 className="text-xl text-brand-400 font-semibold">{t('about.subtitle')}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t('about.description')}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <Icon size={20} className="text-brand-400 mb-2" />
                  <p className="text-sm text-gray-400">{t(`about.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Abstract visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] max-w-[480px] mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-accent-400/10 border border-white/[0.06] backdrop-blur-sm" />

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-brand-400" />
              <div className="absolute top-12 right-12 w-3 h-3 rounded-full bg-accent-400/60" />
              <div className="absolute bottom-10 left-16 w-2.5 h-2.5 rounded-full bg-purple-400/60" />

              {/* Circuit-like lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                <path d="M60 100 L180 100 L220 140 L320 140" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" />
                <path d="M60 150 L140 150 L180 190 L320 190" stroke="rgba(34,211,238,0.15)" strokeWidth="1.5" />
                <path d="M100 60 L100 240" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M300 80 L300 220" stroke="rgba(34,211,238,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Center company initial */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 shadow-2xl shadow-brand-500/30 flex items-center justify-center">
                  <span className="text-2xl font-black text-white">NL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
