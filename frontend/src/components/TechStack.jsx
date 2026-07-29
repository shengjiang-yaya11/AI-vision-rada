import { useTranslation } from 'react-i18next'
import { Server, Monitor, Brain, Container } from 'lucide-react'

const techItems = [
  {
    key: 'backend',
    icon: Server,
    techs: ['FastAPI', 'Python 3.11+', 'PostgreSQL', 'Redis', 'WebSocket'],
    color: 'from-emerald-500/20 to-green-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
  },
  {
    key: 'frontend',
    icon: Monitor,
    techs: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18next'],
    color: 'from-blue-500/20 to-brand-500/20',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
  },
  {
    key: 'aiEngine',
    icon: Brain,
    techs: ['PyTorch', 'TensorRT', 'OpenCV', 'YOLOv8', 'ONNX Runtime'],
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
  {
    key: 'deployment',
    icon: Container,
    techs: ['Docker', 'Kubernetes', 'Cloudflare', 'AWS/GCP', 'GitHub Actions'],
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/20',
  },
]

export default function TechStack() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('tech.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map(({ key, icon: Icon, techs, color, iconColor, borderColor }) => (
            <div
              key={key}
              className={`relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] ${borderColor} hover:bg-white/[0.05] transition-all duration-300 group`}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />
              <div className="relative space-y-4">
                <Icon size={28} className={iconColor} />
                <h3 className="text-lg font-semibold text-white">{t(`tech.${key}`)}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-gray-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
