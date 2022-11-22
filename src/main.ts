import { App as VueApp, createApp } from 'vue'
import App from './App.vue'
import router from './bootstrap/router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import useI18n from './composables/useI18n'

const {i18n, loadLocale} = useI18n()
const app: VueApp = createApp(App)
loadLocale()
app.use(i18n)
;(async () => {
  app.use(router)

  app.mount('#app')
})()
