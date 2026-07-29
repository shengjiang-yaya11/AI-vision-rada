import { useTranslation } from 'react-i18next'

const rows = ['hardware', 'latency', 'cost', 'privacy', 'scale']

export default function Compare() {
  const { t } = useTranslation()

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-6 bg-[#2563eb] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
            {t('compare.title')}
          </h2>
        </div>
        <p className="text-slate-400 text-[15px] mb-12 max-w-xl">
          {t('compare.subtitle')}
        </p>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-3xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 font-semibold text-slate-400 text-xs uppercase tracking-wider w-1/3"></th>
                <th className="text-left py-4 px-6 font-bold text-[#2563eb] text-xs uppercase tracking-wider bg-blue-50/70">
                  {t('compare.edge')}
                </th>
                <th className="text-left py-4 px-6 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                  {t('compare.cloud')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row} className={i < rows.length - 1 ? 'border-b border-slate-100' : ''}>
                  <td className="py-4 px-6 text-slate-400 font-medium">{t(`compare.${row}`)}</td>
                  <td className="py-4 px-6 text-[#0f172a] font-semibold bg-blue-50/30">{t(`compare.${row}`)}</td>
                  <td className="py-4 px-6 text-slate-400">{t(`compare.${row}Cloud`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
