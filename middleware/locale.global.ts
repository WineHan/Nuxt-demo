export default defineNuxtRouteMiddleware(async (to, from) => {
  if (
    !Object.values(localeEnum).includes(to.params.locale)
  ) {
    return navigateTo("/404", { redirectCode: 301 });
  }

  if (to.path !== "/" && to.path.endsWith("/")) {
    const { path, query, hash } = to;
    const nextPath = path.replace(/\/+$/, "") || "/";
    const nextRoute = { path: nextPath, query, hash };
    return navigateTo(nextRoute, { redirectCode: 301 });
  }
});
