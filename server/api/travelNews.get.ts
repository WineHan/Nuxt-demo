import { localeEnum, localeEnumMappingNewsLang } from "../../utils/enum";
export default defineEventHandler(async (event) => {
  try {
    const query: Query = getQuery(event);
    const lang: string = localeEnumMappingNewsLang[query.locale];

    const apiEndpoint: string = `https://www.travel.taipei/open-api/${lang}/Events/News?page=${query.page}`;

    const requestOptions = {
      headers: {
        Accept: "application/json",
      },
    };

    const response: NewsApiResponse = await $fetch(apiEndpoint, requestOptions);

    return response;
  } catch (error) {
    throw "An error occurred while fetching data.";
  }
});
