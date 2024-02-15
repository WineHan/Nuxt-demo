/**
 * @description 進入頁面時，取得購買資訊
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const store = useWhereByStore();
  const nowLocale = localeEnum[to.params.locale as keyof locale];

  store.setNowLocale(nowLocale);
  store.setProductType(to.fullPath);
});
