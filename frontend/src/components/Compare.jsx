import { useTranslation } from 'react-i18next'

const rows = ['hardware','latency','cost','privacy','scale']

export default function Compare() {
  const { t } = useTranslation()
  return (
    <section className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-8">{t('compare.title')}</p>
        <p className="text-[#666] max-w-[480px] mb-12">{t('compare.subtitle')}</p>

        <table className="w-full max-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-[#e5e5e5]">
              <th className="text-left py-3 pr-8 font-normal text-[#999] text-xs uppercase tracking-wider"></th>
              <th className="text-left py-3 pr-8 font-normal text-[#111] text-xs uppercase tracking-wider">{t('compare.edge')}</th>
              <th className="text-left py-3 font-normal text-[#999] text-xs uppercase tracking-wider">{t('compare.cloud')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r} className={i < rows.length-1 ? 'border-b border-[#f0f0f0]' : ''}>
                <td className="py-4 pr-8 text-[#999]">{t(`compare.${r}`)}</td>
                <td className="py-4 pr-8 text-[#111] font-medium">{t(`compare.${r}`)}</td>
                <td className="py-4 text-[#bbb]">{t(`compare.${r}Cloud`)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
