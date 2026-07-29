import { useTranslation } from 'react-i18next'
import { Server, Monitor, Brain, Container } from 'lucide-react'

const techItems = [
  {
    key: 'backend',
    icon: Server,
    techs: ['FastAPI', 'Python 3.11+', 'PostgreSQL', 'Redis', 'WebSocket'],
  },
  {
    key: 'frontend',
    icon: Monitor,
    techs: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18next'],
  },
  {
    key: 'aiEngine',
    icon: Brain,
    techs: ['PyTorch', 'TensorRT', 'OpenCV', 'YOLOv8', 'ONNX Runtime'],
  },
  {
    key: 'deployment',
    icon: Container,
    techs: ['Docker', 'Kubernetes', 'Netlify', 'AWS/GCP', 'GitHub Actions'],
  },
]

export default function TechStack() {
  const { t } = useTranslation()

  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182233] mb-3">
            {t('tech.title')}
          </h2>
          <p className="text-[15px] text-[#5f6c82] max-w-2xl">
            {t('tech.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techItems.map(({ key, icon: Icon, techs }) => (
            <div
              key={key}
              className="p-5 rounded-2xl bg-white border border-[#d6e0eb] hover:border-[#b42318]/20 transition-all duration-300 shadow-[0_4px_16px_rgba(16,24,40,0.04)]"
            >
              <Icon size={24} className="text-[#b42318] mb-4" />
              <h3 className="text-[17px] font-bold text-[#182233] mb-3">{t(`tech.${key}`)}</h3>
              <div className="flex flex-wrap gap-1.5">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#f8fafc] border border-[#d6e0eb] text-xs text-[#5f6c82] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
