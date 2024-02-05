export default defineEventHandler(
  async (event): Promise<CountryApiResponse[]> => {
    const { CountryName, ProductType } = await readBody(event);
    const regExpT = /^[Tt]/;
    const regExpE = /^[Uu]/;

    if (regExpT.test(CountryName)) {
      return [
        {
          Cmid: 105134000,
          Name: "Taiwan",
          Code: "TW",
        },
      ];
    } else if (regExpE.test(CountryName)) {
      return [
        {
          Cmid: 101142000,
          Name: "U.S.A",
          Code: "US",
        },
      ];
    }

    return [];
  }
);
