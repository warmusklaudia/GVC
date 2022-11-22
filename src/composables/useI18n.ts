import { ref } from 'vue'
import { createI18n } from 'vue-i18n'
const AVAILABLE_LOCALES: string[] = ['en', 'nl', 'pl']
const DEFAULT_LOCALE = 'nl'
const lang = ref<string>('')

const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'en',
})

const loadLocale = async (locale: string = 'en') => {
  if (!AVAILABLE_LOCALES.includes(locale)) return

  i18n.global.locale = locale
  lang.value = locale
  i18n.global.setLocaleMessage(
    locale,
    await import(`../locales/${locale}.json`).then((m) => m.default[locale]),
  )
}

export default () => {
  return {
    AVAILABLE_LOCALES,
    i18n,
    lang,
    t: i18n.global.t,
    loadLocale,
  }
}