// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/api/v1/**": { cors: true },
  },

  modules: [
    "@nuxt/ui",
    [
      "@kgierke/nuxt-basic-auth",
      {
        enabled: true,
        users: [
          {
            username: "admin",
            password: process.env.BASIC_AUTH_ADMIN_PASSWORD,
          },
        ],
        allowedRoutes: ["/api/v1/.*"],
      },
    ],
  ],
});
