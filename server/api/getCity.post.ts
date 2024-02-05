export default defineEventHandler(async (event): Promise<CityApiResponse[]> => {
  const { CountryCode, ProductType, ClassKey } = await readBody(event);

  if (CountryCode === 105134000 && ProductType === "consumer") {
    return [
      {
        Cmid: 105134001,
        Name: "臺北市",
        Code: null,
      },
      {
        Cmid: 105134002,
        Name: "新北市",
        Code: null,
      },
      {
        Cmid: 105134003,
        Name: "桃園市",
        Code: null,
      },
      {
        Cmid: 105134004,
        Name: "臺中市",
        Code: null,
      },
      {
        Cmid: 105134005,
        Name: "臺南市",
        Code: null,
      },
      {
        Cmid: 105134006,
        Name: "高雄市",
        Code: null,
      },
      {
        Cmid: 105134007,
        Name: "宜蘭縣",
        Code: null,
      },
      {
        Cmid: 105134008,
        Name: "新竹縣",
        Code: null,
      },
      {
        Cmid: 105134009,
        Name: "苗栗縣",
        Code: null,
      },
      {
        Cmid: 105134010,
        Name: "彰化縣",
        Code: null,
      },
      {
        Cmid: 105134011,
        Name: "南投縣",
        Code: null,
      },
      {
        Cmid: 105134012,
        Name: "雲林縣",
        Code: null,
      },
      {
        Cmid: 105134013,
        Name: "嘉義縣",
        Code: null,
      },
      {
        Cmid: 105134014,
        Name: "屏東縣",
        Code: null,
      },
      {
        Cmid: 105134015,
        Name: "臺東縣",
        Code: null,
      },
      {
        Cmid: 105134016,
        Name: "花蓮縣",
        Code: null,
      },
      {
        Cmid: 105134018,
        Name: "基隆市",
        Code: null,
      },
      {
        Cmid: 105134019,
        Name: "新竹市",
        Code: null,
      },
      {
        Cmid: 105134020,
        Name: "嘉義市",
        Code: null,
      },
    ];
  }

  return [];
});
