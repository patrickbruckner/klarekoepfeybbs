import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware((to) => {
  const presentationDate = new Date(2023, 10, 3, 7)
  const now = new Date()

  if (presentationDate < now) {
    if (to.path === '/construction') {
      return navigateTo('/')
    }
    return
  }

  if (to.path !== '/construction') {
    return navigateTo('/construction')
  }
})
