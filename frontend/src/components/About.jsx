import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fafaf9]">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs text-[#999] uppercase tracking-[0.2em] mb-8">{t('about.title')}</p>
        <div className="grid sm:grid-cols-2 gap-16 max-w-[860px]">
          <div>
            <h3 className="text-xl font-medium text-[#111] mb-3">{t('about.company')}</h3>
            <p className="text-xs text-[#999] uppercase tracking-wider mb-6">{t('about.companyZh')}</p>
            <p className="text-[#666] leading-relaxed">{t('about.p1')}</p>
          </div>
          <div>
            <p className="text-[#666] leading-relaxed mb-10">{t('about.p2')}</p>
            <hr className="mb-6" />
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-xs text-[#999] uppercase tracking-wider mb-1">Location</div>
                <div className="text-sm text-[#111]">{t('contact.location')}</div>
              </div>
              <div>
                <div className="text-xs text-[#999] uppercase tracking-wider mb-1">Contact</div>
                <div className="text-sm text-[#111]">16620839283</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
