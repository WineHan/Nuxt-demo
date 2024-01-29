export default defineNuxtRouteMiddleware((to) => {
  if (Object.values(abortRouteEnum).includes(to.path)) {
    return abortNavigation();
  }
});
