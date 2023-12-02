/**
 * @description 重整頁面時，重新取得新聞資料
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useNewsStore();

  if (store.newsData === null) {
    store.getLocale(from.fullPath);

    await store.getNews({
      page: 1,
    });
  }
});
