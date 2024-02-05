import { defineStore } from "pinia";

export const useWhereByStore = defineStore("whereByStore", () => {
  const searchLocation = ref<CountryApiResponse[]>([]);
  const nowLocale = ref<string>("");
  const cityData = ref<CityApiResponse[]>([]);
  const productLineData = ref<ProductApiResponse[]>([]);
  const tabData = ref<TabApiResponse[]>([]);
  const nowActiveTabId = ref<string>("");
  const whereByContent = ref<WhereByApiResponse>({} as WhereByApiResponse);
  const productType = ref<string>("");
  const selectProductClass = ref<string>("");
  const selectProductItemID = ref<string>("");
  const selectCityName = ref<string>("");
  const selectCityID = ref<number | undefined>(undefined);
  const searchValue = ref<string>("");
  const isLoading = ref(false);

  /**
   * @description 取得國家代碼
   */
  const countryCodeID = computed(() => {
    return routeToCountryIDEnum[nowLocale.value as keyof routeToCountryID];
  });

  /**
   * 是否要顯示城市選單
   */
  const showCityFilter = computed(() => {
    const isShowDrownDownCity = [
      105031000, 105134000, 109048000, 104116000, 106008000,
    ];

    return isShowDrownDownCity.includes(countryCodeID.value);
  });

  /**
   * @description 是否要 show 清除條件按鈕
   */
  const isShowClearCondition = computed(() => {
    return (
      selectCityName.value !== "" ||
      selectProductClass.value !== "" ||
      searchValue.value !== ""
    );
  });

  /**
   * @description 設定目前語系
   */
  function setNowLocale(locale: string) {
    nowLocale.value = locale;
  }

  /**
   * @description 取得產品類型(個人/企業)
   */
  function setProductType(type: string) {
    const whereByRouteRegExp = /Consumer/;

    productType.value = whereByRouteRegExp.test(type)
      ? ProductTypeEnum.consumer
      : ProductTypeEnum.enterprise;
  }

  /**
   * @description 取得產品類別
   */

  function setProductClass(product: Product) {
    selectProductClass.value = product.ProductName;
    selectProductItemID.value = product.ItemID;
  }

  /**
   * @description 取得城市名稱
   */
  function setCityData(city: CityApiResponse) {
    selectCityName.value = city.Name;
    selectCityID.value = city.Cmid;
  }

  /**
   * @description 取得搜尋值
   */

  function setSearchValue(value: string) {
    searchValue.value = value;
  }

  /**
   * @description 取得國家資料
   */
  async function getCountryData(CountryName: string) {
    isLoading.value = true;

    const { data } = await useAsyncData("getDate", () => {
      return $fetch("/api/getCountry", {
        method: "POST",
        body: JSON.stringify({
          CountryName,
          ProductType: productType.value,
        }),
      });
    });

    if (data.value && data.value.length > 0) {
      searchLocation.value = data.value;
    } else {
      searchLocation.value = [];
    }

    isLoading.value = false;
  }

  /**
   * @description 取得城市資料
   */
  async function getCityData() {
    isLoading.value = true;

    const { data } = await useAsyncData("getCity", () => {
      return $fetch("/api/getCity", {
        method: "POST",
        body: JSON.stringify({
          CountryCode: countryCodeID.value,
          ProductType: productType.value,
          ClassKey: "",
          Search: "",
          SaleTypeValue: "",
          PageNow: 1,
          CityCode: "",
        }),
      });
    });

    if (data.value) {
      cityData.value = data.value;
    }

    isLoading.value = false;
  }

  /**
   * @description 取得產品線資料
   */
  async function getProductLinePost() {
    isLoading.value = true;

    const { data } = await useAsyncData("getProductLinePost", () => {
      return $fetch("/api/getProductLine", {
        method: "POST",
        body: JSON.stringify({
          CountryCode: countryCodeID.value,
          ProductType: productType.value,
          ClassKey: "",
        }),
      });
    });

    if (data.value) {
      productLineData.value = data.value;
    }

    isLoading.value = false;
  }

  /**
   * @description 取得 Tab 資料
   */
  async function getWhereByTab() {
    isLoading.value = true;

    const { data } = await useAsyncData("getWheretoBuyTab", () => {
      return $fetch("/api/getWheretoBuyTab", {
        method: "POST",
        body: JSON.stringify({
          CountryCode: countryCodeID.value,
          ProductType: productType.value,
          ClassKey: selectProductItemID.value,
          Search: searchValue.value,
          SaleTypeValue: "",
          PageNow: 1,
          CityCode: selectCityID.value,
        }),
      });
    });

    if (data.value) {
      tabData.value = data.value;

      const findDefaultTab = tabData.value.find((tab) => tab.IsDefaultSelected);

      nowActiveTabId.value = findDefaultTab
        ? findDefaultTab.Id
        : tabData.value[0].Id;
    }

    isLoading.value = false;
  }

  /**
   * @description 取得 Tab 內容底下的資料
   */
  async function getWhereByContent() {
    isLoading.value = true;

    const { data } = await useAsyncData("/getWheretoBuyContent", () => {
      return $fetch("/api/getWheretoBuyContent", {
        method: "POST",
        body: JSON.stringify({
          CountryCode: countryCodeID.value,
          ProductType: productType.value,
          ClassKey: selectProductItemID.value,
          Search: searchValue.value,
          SaleTypeValue: Number(nowActiveTabId.value) || nowActiveTabId.value,
          PageNow: 1,
          CityCode: selectCityID.value,
        }),
      });
    });

    if (data.value) {
      whereByContent.value = data.value;
    }

    isLoading.value = false;
  }

  return {
    getCountryData,
    setNowLocale,
    getCityData,
    getProductLinePost,
    getWhereByTab,
    getWhereByContent,
    setProductType,
    setProductClass,
    setCityData,
    setSearchValue,
    searchLocation,
    countryCodeID,
    nowLocale,
    cityData,
    productLineData,
    tabData,
    nowActiveTabId,
    whereByContent,
    productType,
    selectProductClass,
    selectCityName,
    searchValue,
    isShowClearCondition,
    showCityFilter,
    isLoading,
  };
});
