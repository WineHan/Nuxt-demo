import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", () => {
  const newsData = ref(null);
  let nowLocale = ref(localeEnum.en);

  const getNews = async (payload) => {
    const { page, changeLocale } = payload;

    const response = await $fetch("/api/travelNews", {
      params: {
        page,
        locale: changeLocale ? changeLocale : nowLocale.value,
      },
    });

    newsData.value = response.data;
  };

  const getLocale = (routePath) => {
    const regExp = /tw/;

    nowLocale.value = regExp.test(routePath) ? localeEnum.tw : localeEnum.en;
  };

  const setLocale = (locale) => {
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
