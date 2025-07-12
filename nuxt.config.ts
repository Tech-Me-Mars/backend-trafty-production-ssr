export default defineNuxtConfig({
  ssr: true,
    runtimeConfig: {
    cookieSecret: process.env.COOKIE_SECRET,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/css/common.css", "~/assets/css/style.css"],
  app: {    
    head: {
      title: "STS MANAGEMENT",
      script: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" }],
      link: [
        // เพิ่ม favicon ใหม่ที่แสดงในแท็บของเบราว์เซอร์
        { rel: 'icon', type: 'image/png', href: '/image/logo.png' }
      ]
    },
  },
});
