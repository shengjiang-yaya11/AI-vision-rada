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
    <section id="about" className="relative py-20 sm:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#d6e0eb] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(16,24,40,0.04)]">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182233] mb-2">
                {t('about.title')}
              </h2>
              <h3 className="text-lg font-bold text-[#b42318] mb-4">
                {t('about.subtitle')}
              </h3>
              <p className="text-[15px] text-[#5f6c82] leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {stats.map(({ key, icon: Icon }) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-[#f8fafc] border border-[#d6e0eb]"
                  >
                    <Icon size={18} className="text-[#b42318] mb-2" />
                    <p className="text-sm text-[#5f6c82] font-medium">{t(`about.${key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#fff1f0] to-[#edf5ff] border-l border-[#d6e0eb] p-8">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#b42318] to-[#d33b2d] shadow-[0_16px_40px_rgba(180,35,24,0.25)] flex items-center justify-center">
                <span className="text-3xl font-black text-white">NL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
