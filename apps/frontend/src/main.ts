import '/@/assets/styles/main.scss'
import '/@/assets/styles/tailwind.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import en from '/@/locales/en.json'
import ja from '/@/locales/ja.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  inheritLocale: true,
  messages: {
    en,
    ja,
  },
})
import App from '/@/App.vue'

createApp(App).use(i18n).mount('#app')
