import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Building2, Send, ArrowRight } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
              <Mail size={20} className="text-brand-400 mb-3" />
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{t('contact.email')}</p>
              <a href="mailto:2212085042@qq.com" className="text-white hover:text-brand-400 transition-colors">
                {t('contact.emailValue')}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
              <MapPin size={20} className="text-brand-400 mb-3" />
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{t('contact.address')}</p>
              <p className="text-white">{t('contact.addressValue')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 transition-all duration-300">
              <Building2 size={20} className="text-brand-400 mb-3" />
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{t('contact.company')}</p>
              <p className="text-white">{t('contact.companyValue')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="space-y-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                />
                <input
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:bg-white/[0.06] transition-all duration-300 text-sm"
                />
              </div>
              <textarea
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/40 focus:bg-white/[0.06] transition-all duration-300 text-sm resize-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-brand-500/25"
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
