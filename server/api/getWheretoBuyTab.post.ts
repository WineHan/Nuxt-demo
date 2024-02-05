import { ProductTypeEnum } from "../../utils/enum";

export default defineEventHandler(async (event): Promise<TabApiResponse[]> => {
  const {
    CountryCode,
    ProductType,
    ClassKey,
    Search,
    SaleTypeValue,
    PageNow,
    CityCode,
  }: WhereByApiParams = await readBody(event);

  if (CountryCode === 105134000) {
    if (ProductType === ProductTypeEnum.consumer) {
      return [
        {
          Id: "4",
          Name: "網路商城",
          IsDefaultSelected: true,
        },
        {
          Id: "1",
          Name: "代理商",
          IsDefaultSelected: false,
        },
        {
          Id: "2",
          Name: "經銷商",
          IsDefaultSelected: false,
        },
      ];
    } else {
      return [{ Id: "1", Name: "代理商", IsDefaultSelected: false }];
    }
  }

  if (CountryCode === 101142000) {
    if (ProductType === ProductTypeEnum.consumer) {
      return [
        {
          Id: "4",
          Name: "Online Store",
          IsDefaultSelected: false,
        },
        {
          Id: "3",
          Name: "Retailer",
          IsDefaultSelected: false,
        },
        {
          Id: "1",
          Name: "Distributor",
          IsDefaultSelected: false,
        },
        {
          Id: "6",
          Name: "Sub Distributor",
          IsDefaultSelected: false,
        },
        {
          Id: "2",
          Name: "Reseller",
          IsDefaultSelected: false,
        },
        {
          Id: "5",
          Name: "System Integrator",
          IsDefaultSelected: false,
        },
      ];
    } else {
      return [
        {
          Id: "4,2",
          Name: "Reseller",
          IsDefaultSelected: false,
        },
        {
          Id: "5",
          Name: "System Integrator",
          IsDefaultSelected: false,
        },
        {
          Id: "1",
          Name: "Distributor",
          IsDefaultSelected: false,
        },
        {
          Id: "12",
          Name: "Solution Partner",
          IsDefaultSelected: false,
        },
      ];
    }
  }

  return [];
});
