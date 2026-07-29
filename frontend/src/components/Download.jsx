import { useTranslation } from 'react-i18next'

const platforms = [
  { key: 'windows', ext: '.exe', color: 'hover:border-blue-200' },
  { key: 'macos', ext: '.dmg', color: 'hover:border-slate-300' },
  { key: 'linux', ext: '.AppImage', color: 'hover:border-orange-200' },
  { key: 'docker', ext: '', color: 'hover:border-cyan-200' },
]

const BASE = 'https://github.com/shengjiang-yaya11/AI-vision-rada/releases/download/v1.0.0/AI-VisionRada-v1.0.0'

export default function Download() {
  const { t } = useTranslation()

  return (
    <section id="download" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            {t('download.title')}
          </h2>
          <span className="text-xs font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full ml-2">{t('download.version')}</span>
        </div>
        <p className="text-slate-400 text-[15px] mb-10 max-w-xl">
          {t('download.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mb-8">
          {platforms.map(({ key, ext, color }) => (
            <a
              key={key}
              href={key === 'docker' ? `${BASE}-${key}.tar.gz` : `${BASE}-${key}.tar.gz`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-5 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all ${color} hover:shadow-md`}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
                {t(`download.${key}`)}
              </div>
              <div className="text-xs text-slate-400 mb-3 font-mono">
                {ext ? `AI-VisionRada${ext}` : 'docker pull'}
              </div>
              <div className="text-sm font-bold text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
                {t('download.btn')} ↓
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/shengjiang-yaya11/AI-vision-rada/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#2563eb] font-semibold hover:text-[#1d4ed8] transition-colors"
        >
          {t('download.all')}
        </a>
      </div>
    </section>
  )
}
