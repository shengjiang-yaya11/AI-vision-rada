import { useTranslation } from 'react-i18next'
import { Eye, Radio, BarChart3, Lock, Code2, Cloud } from 'lucide-react'

const icons = {
  realTime: Eye,
  multiCamera: Radio,
  aiAnalytics: BarChart3,
  privacy: Lock,
  api: Code2,
  cloud: Cloud,
}

const gradients = [
  'from-blue-500/20 to-brand-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-emerald-500/20 to-accent-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-brand-500/20 to-purple-500/20',
  'from-accent-500/20 to-blue-500/20',
]

export default function Features() {
  const { t } = useTranslation()
  const features = ['realTime', 'multiCamera', 'aiAnalytics', 'privacy', 'api', 'cloud']

  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((key, i) => {
            const Icon = icons[key]
            return (
              <div
                key={key}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-500 hover:bg-white/[0.05] backdrop-blur-sm"
              >
                {/* Gradient blob on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                />

                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-brand-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {t(`features.${key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`features.${key}.desc`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
