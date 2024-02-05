interface CountryApiResponse {
  Cmid: number;
  Name: string;
  Code: string;
}

interface CityApiResponse {
  Cmid: number | undefined;
  Name: string;
  Code: string | null;
}

interface ProductApiResponse {
  ProductGroupName: string;
  ProductsList: Product[];
}

interface TabApiResponse {
  Id: string;
  Name: string;
  IsDefaultSelected: boolean;
}

interface WhereByApiResponse {
  NowPage: number;
  NowSaleType: string;
  TotalPage: number;
  ListItems: ListItem[];
}

interface WhereByApiParams {
  CountryCode?: number;
  ProductType?: string;
  ClassKey?: string;
  Search?: string;
  SaleTypeValue?: number | string;
  PageNow?: number;
  CityCode?: number;
}

interface ListItem {
  Id: number;
  ImagePath: string;
  Name: string;
  Tel: string[];
  TelCountryCode: string;
  Email: string | null;
  Address: string;
  ProductLines: string[];
  Remark: string;
  UrlPath: string;
  GeoAxisX: number;
  GeoAxisY: number;
}

interface Product {
  ProductName: string;
  ItemID: string;
}

interface UserArea {
  tw: string;
  us: string;
}

interface WhereBySelection {
  buyApplication: string[];
}

interface BuyApplicationMapping {
  [key: string]: string;
}

interface WhereByType {
  buyApplicationOption: string;
  buyApplicationCityOption: string;
}

interface ProductType {
  consumer: string;
  enterprise: string;
}
