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

export default function Features() {
  const { t } = useTranslation()
  const features = ['realTime', 'multiCamera', 'aiAnalytics', 'privacy', 'api', 'cloud']

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182233] mb-3">
            {t('features.title')}
          </h2>
          <p className="text-[15px] text-[#5f6c82] max-w-2xl">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((key) => {
            const Icon = icons[key]
            return (
              <div
                key={key}
                className="group p-5 rounded-2xl bg-white border border-[#d6e0eb] hover:border-[#b42318]/30 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(16,24,40,0.04)] hover:shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fff1f0] border border-[#f0c4c0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-[#b42318]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#182233] mb-2">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-sm text-[#5f6c82] leading-relaxed">
                  {t(`features.${key}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
