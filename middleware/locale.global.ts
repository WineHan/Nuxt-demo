export default defineNuxtRouteMiddleware((to, from) => {
  if (
    !Object.values(localeEnum).includes(to.params.locale) &&
    to.params.locale !== ""
  ) {
    return abortNavigation();
  }

  if (to.path !== "/" && to.path.endsWith("/")) {
    const { path, query, hash } = to;

    const nextPath = path.replace(/\/+$/, "") || "/";
    const nextRoute = { path: nextPath, query, hash };
    return navigateTo(nextRoute, { redirectCode: 301 });
  }
});
