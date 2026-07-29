import { useTranslation } from 'react-i18next'
import { Download, Apple, Monitor, Server, Code2, BookOpen, ExternalLink, Terminal } from 'lucide-react'

const packages = [
  {
    key: 'windows',
    icon: Monitor,
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    ext: '.exe',
  },
  {
    key: 'macos',
    icon: Apple,
    iconBg: 'bg-gray-400/10 border-gray-400/20',
    iconColor: 'text-gray-300',
    ext: '.dmg',
  },
  {
    key: 'linux',
    icon: Terminal,
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
    ext: '.AppImage',
  },
  {
    key: 'docker',
    icon: Server,
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    ext: '',
  },
]

const reqs = ['winReq', 'macReq', 'linuxReq', 'dockerReq']

export default function Downloads() {
  const { t } = useTranslation()
  const releaseUrl = 'https://github.com/shengjiang-yaya11/AI-vision-rada/releases'

  return (
    <section id="downloads" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('downloads.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('downloads.subtitle')}
          </p>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-brand-300">{t('downloads.version')}: v1.0.0</span>
          </div>
        </div>

        {/* Download Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {packages.map(({ key, icon: Icon, iconBg, iconColor, ext }) => (
            <a
              key={key}
              href={`${releaseUrl}/latest/download/AI-VisionRada-${key}${ext}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/30 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm">{t(`downloads.${key}`)}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{ext || 'docker pull'}</p>
                  <div className="flex items-center gap-1 mt-2 text-brand-400 text-xs font-medium group-hover:gap-2 transition-all">
                    <Download size={12} />
                    <span>{t('downloads.downloadBtn')}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Source & Docs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/shengjiang-yaya11/AI-vision-rada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 text-sm"
          >
            <Code2 size={18} />
            {t('downloads.source')}
            <ExternalLink size={14} className="opacity-50" />
          </a>
          <a
            href="https://github.com/shengjiang-yaya11/AI-vision-rada/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-brand-500/25 text-sm"
          >
            <BookOpen size={18} />
            {t('downloads.allReleases')}
            <ExternalLink size={14} />
          </a>
        </div>

        {/* System Requirements */}
        <div className="max-w-3xl mx-auto">
          <h4 className="text-sm font-semibold text-gray-300 mb-4 text-center">
            {t('downloads.requirements')}
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {packages.map(({ key }, i) => (
              <div
                key={key}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
              >
                <span className="text-xs text-gray-500 font-mono min-w-[70px]">{t(`downloads.${key}`)}</span>
                <span className="text-xs text-gray-400">{t(`downloads.${reqs[i]}`)}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 text-center mt-6">
            {t('downloads.license')}
          </p>
        </div>
      </div>
    </section>
  )
}
