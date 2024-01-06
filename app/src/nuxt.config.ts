// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "株式会社アビサルコーポレーション",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "人々の夢を現実にする、株式会社アビサルコーポレーションの公式サイトです。\n私たちは、ITの力で様々なカタチの願いを実現する会社です。" },
      ],
    }
  },
  css: [
    "@/assets/styles/main.scss"
  ],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/config/_variables.scss"; \
            @import "@/assets/styles/_mixin.scss";'
        },
      },
    },
  }
})
