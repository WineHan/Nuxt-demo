export default defineEventHandler(async (event) => {
  try {
    const query: Query = getQuery(event);
    const apiEndpoint: string = `https://www.travel.taipei/open-api/${query.locale}/Events/News?page=${query.page}`;

    const requestOptions = {
      headers: {
        Accept: "application/json",
      },
    };

    const response: ApiResponse = await $fetch(apiEndpoint, requestOptions);

    return response;
  } catch (error) {
    throw "An error occurred while fetching data.";
  }
});
