import { useTranslation } from 'react-i18next'
const BASE = 'https://github.com/shengjiang-yaya11/AI-vision-rada/releases/download/v1.0.0/AI-VisionRada-v1.0.0'
const pfs = [{k:'windows',e:'.exe'},{k:'macos',e:'.dmg'},{k:'linux',e:'.AppImage'},{k:'docker',e:''}]
export default function Download() {
  const { t } = useTranslation()
  return (
    <section id="download" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{t('download.title')}</h2>
        <p className="text-sm text-blue-600 font-medium mb-4">{t('download.version')}</p>
        <p className="text-slate-500 mb-8 max-w-lg">{t('download.subtitle')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mb-6">
          {pfs.map(({k,e}) => (
            <a key={k} href={`${BASE}-${k}.tar.gz`} target="_blank" rel="noopener noreferrer"
              className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t(`download.${k}`)}</div>
              <div className="text-sm font-semibold text-blue-600">{t('download.btn')} ↓</div>
            </a>
          ))}
        </div>
        <a href="https://github.com/shengjiang-yaya11/AI-vision-rada/releases" target="_blank" rel="noopener noreferrer"
          className="text-sm text-blue-600 font-medium hover:underline">
          {t('download.all')}
        </a>
      </div>
    </section>
  )
}
