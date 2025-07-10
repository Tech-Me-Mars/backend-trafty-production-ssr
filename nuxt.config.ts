// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/common.css", "~/assets/css/style.css"],
  app: {    
    head: {
      title: "W3CRM - NuxtJs Admin Dashboard Template",
      script: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" }],
    },
  },
});
