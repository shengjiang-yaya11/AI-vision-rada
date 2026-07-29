import { useTranslation } from 'react-i18next'

const rows = ['hardware', 'latency', 'cost', 'privacy', 'scale']

export default function Compare() {
  const { t } = useTranslation()

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2">
          {t('compare.title')}
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl">
          {t('compare.subtitle')}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-[#0f172a]"></th>
                <th className="text-left py-3 px-4 font-semibold text-[#2563eb] bg-blue-50/50 rounded-t-lg">
                  {t('compare.edge')}
                </th>
                <th className="text-left py-3 pl-4 font-semibold text-gray-400">
                  {t('compare.cloud')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                  <td className="py-3 pr-4 text-gray-500 font-medium">{t(`compare.${row}`)}</td>
                  <td className="py-3 px-4 text-[#0f172a] bg-blue-50/30">{t(`compare.${row}`)}</td>
                  <td className="py-3 pl-4 text-gray-400">{t(`compare.${row}Cloud`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
