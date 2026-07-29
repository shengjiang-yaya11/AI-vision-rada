import { useTranslation } from 'react-i18next'
const rows = ['hardware','latency','cost','privacy','scale']
export default function Compare() {
  const { t } = useTranslation()
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('compare.title')}</h2>
        <p className="text-slate-500 mb-10 max-w-lg">{t('compare.subtitle')}</p>
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden max-w-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left py-3 px-5 font-medium text-slate-400 text-xs uppercase tracking-wider"></th>
                <th className="text-left py-3 px-5 font-semibold text-blue-600 text-xs uppercase tracking-wider">{t('compare.edge')}</th>
                <th className="text-left py-3 px-5 font-medium text-slate-400 text-xs uppercase tracking-wider">{t('compare.cloud')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i) => (
                <tr key={r} className={i<rows.length-1?'border-b border-slate-100':''}>
                  <td className="py-3 px-5 text-slate-500">{t(`compare.${r}`)}</td>
                  <td className="py-3 px-5 text-slate-900 font-medium">{t(`compare.${r}`)}</td>
                  <td className="py-3 px-5 text-slate-400">{t(`compare.${r}Cloud`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
