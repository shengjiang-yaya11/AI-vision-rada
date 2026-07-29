import { useTranslation } from 'react-i18next'
import { Download, Apple, Monitor, Server, Code2, BookOpen, ExternalLink, Terminal } from 'lucide-react'

const packages = [
  { key: 'windows', icon: Monitor, ext: '.exe' },
  { key: 'macos', icon: Apple, ext: '.dmg' },
  { key: 'linux', icon: Terminal, ext: '.AppImage' },
  { key: 'docker', icon: Server, ext: '' },
]

const reqs = ['winReq', 'macReq', 'linuxReq', 'dockerReq']

export default function Downloads() {
  const { t } = useTranslation()
  const releaseUrl = 'https://github.com/shengjiang-yaya11/AI-vision-rada/releases'

  return (
    <section id="downloads" className="relative py-20 sm:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182233]">
              {t('downloads.title')}
            </h2>
            <span className="inline-flex items-center min-h-[26px] px-3 rounded-full border border-[#f0c4c0] bg-[#fff1f0] text-[12px] font-bold text-[#b42318]">
              v1.0.0
            </span>
          </div>
          <p className="text-[15px] text-[#5f6c82] max-w-2xl">
            {t('downloads.subtitle')}
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {packages.map(({ key, icon: Icon, ext }) => (
            <a
              key={key}
              href={`${releaseUrl}/latest/download/AI-VisionRada-${key}${ext}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white border border-[#d6e0eb] hover:border-[#b42318]/30 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(16,24,40,0.04)]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-[#d6e0eb] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-[#5f6c82]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#182233] text-sm">{t(`downloads.${key}`)}</h3>
                  <p className="text-xs text-[#5f6c82] mt-0.5">{ext || 'docker pull'}</p>
                  <div className="flex items-center gap-1 mt-2 text-[#b42318] text-xs font-bold group-hover:gap-2 transition-all">
                    <Download size={12} />
                    <span>{t('downloads.downloadBtn')}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Source & Docs Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://github.com/shengjiang-yaya11/AI-vision-rada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-[10px] bg-white border border-[#d6e0eb] text-[#182233] text-sm font-bold hover:-translate-y-px transition-all"
          >
            <Code2 size={16} />
            {t('downloads.source')}
            <ExternalLink size={14} className="text-[#5f6c82]" />
          </a>
          <a
            href={releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] px-5 rounded-[10px] bg-gradient-to-br from-[#a12217] to-[#c03124] text-white text-sm font-bold hover:-translate-y-px transition-all shadow-[0_10px_24px_rgba(180,35,24,0.2)]"
          >
            <BookOpen size={16} />
            {t('downloads.allReleases')}
            <ExternalLink size={14} />
          </a>
        </div>

        {/* System Requirements */}
        <div className="bg-white border border-[#d6e0eb] rounded-2xl p-6 shadow-[0_4px_16px_rgba(16,24,40,0.04)]">
          <h4 className="text-sm font-bold text-[#182233] mb-4">
            {t('downloads.requirements')}
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {packages.map(({ key }, i) => (
              <div key={key} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#d6e0eb]">
                <span className="text-xs font-bold text-[#5f6c82] min-w-[70px] uppercase">
                  {t(`downloads.${key}`)}
                </span>
                <span className="text-xs text-[#5f6c82]">{t(`downloads.${reqs[i]}`)}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5f6c82] mt-5">
            {t('downloads.license')}
          </p>
        </div>
      </div>
    </section>
  )
}
