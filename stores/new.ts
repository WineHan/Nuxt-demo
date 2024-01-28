import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", () => {
  const newsData = ref<Article[]>([]);
  let nowLocale = ref<(typeof localeEnum)[keyof typeof localeEnum]>(
    localeEnum.en
  );

  const getNews = async ({
    page,
    changeLocale = nowLocale.value,
  }: {
    page: number;
    changeLocale?: string;
  }): Promise<void> => {
    try {
      const { data }: { data: Article[] } = await $fetch("/api/travelNews", {
        params: {
          page,
          locale: changeLocale,
        },
      });

      newsData.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Retrieves the locale based on the given route path.
   * @param routePath The route path to check for locale.
   */
  const getLocale = (routePath: string) => {
    const regExp = /tw/;

    nowLocale.value = regExp.test(routePath) ? localeEnum.tw : localeEnum.en;
  };

  /**
   * Sets the current locale.
   * @param locale The locale to set.
   */
  const setLocale = (
    locale: (typeof localeEnum)[keyof typeof localeEnum]
  ): void => {
    nowLocale.value = locale;
  };

  return {
    newsData,
    nowLocale,
    getNews,
    getLocale,
    setLocale,
  };
});
