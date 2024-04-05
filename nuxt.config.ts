// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icons'],
  css: ['~/assets/app.scss'],
  components: {
    global: true,
    dirs: ['~/components', '~/crypto-components'],
  },
  typescript: {
    typeCheck: true,
    strict: true
  }
})
