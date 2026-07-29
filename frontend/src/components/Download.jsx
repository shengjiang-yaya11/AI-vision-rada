import { useTranslation } from 'react-i18next'

const platforms = [
  { key: 'windows', ext: '.exe' },
  { key: 'macos', ext: '.dmg' },
  { key: 'linux', ext: '.AppImage' },
  { key: 'docker', ext: '' },
]

const BASE = 'https://github.com/shengjiang-yaya11/AI-vision-rada/releases/download/v1.0.0/AI-VisionRada-v1.0.0'

export default function Download() {
  const { t } = useTranslation()
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-2">{t('download.title')}</p>
        <p className="text-xs text-[#999] mb-12">{t('download.version')}</p>
        <p className="text-[#666] max-w-[480px] mb-12">{t('download.subtitle')}</p>

        <div className="grid sm:grid-cols-4 gap-10 max-w-[720px] mb-12">
          {platforms.map(({ key, ext }) => (
            <a key={key} href={`${BASE}-${key}.tar.gz`} target="_blank" rel="noopener noreferrer"
              className="group block py-2 border-b border-[#e5e5e5] hover:border-[#111] transition-colors">
              <div className="text-xs text-[#999] uppercase tracking-wider mb-1">{t(`download.${key}`)}</div>
              <div className="text-sm text-[#111] font-medium">{t('download.btn')} &darr;</div>
            </a>
          ))}
        </div>

        <a href="https://github.com/shengjiang-yaya11/AI-vision-rada/releases" target="_blank" rel="noopener noreferrer"
          className="text-sm text-[#999] hover:text-[#111] transition-colors">
          {t('download.all')}
        </a>
        <hr className="mt-20" />
      </div>
    </section>
  )
}
