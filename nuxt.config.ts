// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: '/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
//  css: ['@/assets/main.css']
})