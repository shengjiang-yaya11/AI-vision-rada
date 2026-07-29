import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Building2, Send, ArrowRight } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#182233] mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-[15px] text-[#5f6c82] max-w-2xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Info Cards */}
          <div className="lg:col-span-2 grid gap-3">
            <div className="p-5 rounded-2xl bg-white border border-[#d6e0eb] hover:border-[#b42318]/20 transition-all shadow-[0_4px_16px_rgba(16,24,40,0.04)]">
              <Mail size={20} className="text-[#b42318] mb-3" />
              <p className="text-xs font-bold tracking-wider uppercase text-[#5f6c82] mb-1">
                {t('contact.email')}
              </p>
              <a
                href="mailto:2212085042@qq.com"
                className="text-[15px] font-bold text-[#182233] hover:text-[#b42318] transition-colors"
              >
                {t('contact.emailValue')}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#d6e0eb] hover:border-[#b42318]/20 transition-all shadow-[0_4px_16px_rgba(16,24,40,0.04)]">
              <MapPin size={20} className="text-[#b42318] mb-3" />
              <p className="text-xs font-bold tracking-wider uppercase text-[#5f6c82] mb-1">
                {t('contact.address')}
              </p>
              <p className="text-[15px] font-bold text-[#182233]">{t('contact.addressValue')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#d6e0eb] hover:border-[#b42318]/20 transition-all shadow-[0_4px_16px_rgba(16,24,40,0.04)]">
              <Building2 size={20} className="text-[#b42318] mb-3" />
              <p className="text-xs font-bold tracking-wider uppercase text-[#5f6c82] mb-1">
                {t('contact.company')}
              </p>
              <p className="text-[15px] font-bold text-[#182233]">{t('contact.companyValue')}</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="p-6 rounded-2xl bg-white border border-[#d6e0eb] shadow-[0_4px_16px_rgba(16,24,40,0.04)] space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#d6e0eb] text-[#182233] placeholder-[#5f6c82] focus:outline-none focus:border-[#b42318]/40 focus:bg-white transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#d6e0eb] text-[#182233] placeholder-[#5f6c82] focus:outline-none focus:border-[#b42318]/40 focus:bg-white transition-all text-sm"
                />
              </div>
              <textarea
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#d6e0eb] text-[#182233] placeholder-[#5f6c82] focus:outline-none focus:border-[#b42318]/40 focus:bg-white transition-all text-sm resize-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 min-h-[44px] px-5 rounded-[10px] bg-gradient-to-br from-[#a12217] to-[#c03124] text-white text-sm font-bold hover:-translate-y-px transition-all shadow-[0_10px_24px_rgba(180,35,24,0.2)]"
              >
                <Send size={16} />
                {t('contact.send')}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
