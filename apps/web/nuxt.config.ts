// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3000
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:3001'
    }
  }
})
