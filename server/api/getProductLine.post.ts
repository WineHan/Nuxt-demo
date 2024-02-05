import { ProductTypeEnum } from "../../utils/enum";

export default defineEventHandler(
  async (event): Promise<ProductApiResponse[]> => {
    const { CountryCode, ProductType, ClassKey } = await readBody(event);

    if (CountryCode === 105134000) {
      if (ProductType === ProductTypeEnum.consumer) {
        return [
          {
            ProductGroupName: "主機板",
            ProductsList: [
              {
                ProductName: "主機板",
                ItemID: "2",
              },
            ],
          },
          {
            ProductGroupName: "顯示卡",
            ProductsList: [
              {
                ProductName: "顯示卡",
                ItemID: "3",
              },
            ],
          },
          {
            ProductGroupName: "筆記型電腦",
            ProductsList: [
              {
                ProductName: "筆記型電腦",
                ItemID: "5",
              },
            ],
          },
          {
            ProductGroupName: "顯示器",
            ProductsList: [
              {
                ProductName: "顯示器",
                ItemID: "11",
              },
            ],
          },
          {
            ProductGroupName: "桌上型電腦",
            ProductsList: [
              {
                ProductName: "個人電腦",
                ItemID: "6",
              },
              {
                ProductName: "BRIX (迷你準系統電腦)",
                ItemID: "104",
              },
            ],
          },
          {
            ProductGroupName: "電腦周邊配備",
            ProductsList: [
              {
                ProductName: "鍵盤",
                ItemID: "13",
              },
              {
                ProductName: "滑鼠",
                ItemID: "14",
              },
              {
                ProductName: "耳機",
                ItemID: "46",
              },
              {
                ProductName: "電競椅",
                ItemID: "82",
              },
            ],
          },
          {
            ProductGroupName: "電腦零組件",
            ProductsList: [
              {
                ProductName: "機殼",
                ItemID: "9",
              },
              {
                ProductName: "散熱產品",
                ItemID: "40",
              },
              {
                ProductName: "電源供應器",
                ItemID: "41",
              },
              {
                ProductName: "記憶體",
                ItemID: "53",
              },
              {
                ProductName: "固態硬碟 (SSD)",
                ItemID: "54",
              },
            ],
          },
        ];
      }

      if (ProductType === ProductTypeEnum.enterprise) {
        return [
          {
            ProductGroupName: "伺服器主機板",
            ProductsList: [
              {
                ProductName: "伺服器主機板",
                ItemID: "101",
              },
            ],
          },
          {
            ProductGroupName: "伺服器",
            ProductsList: [
              {
                ProductName: "R Series",
                ItemID: "E_1",
              },
              {
                ProductName: "H Series",
                ItemID: "E_2",
              },
              {
                ProductName: "G Series",
                ItemID: "E_4",
              },
              {
                ProductName: "E Series",
                ItemID: "E_6",
              },
              {
                ProductName: "S Series",
                ItemID: "E_7",
              },
              {
                ProductName: "W Series",
                ItemID: "E_8",
              },
            ],
          },
          {
            ProductGroupName: "伺服器配件",
            ProductsList: [
              {
                ProductName: "伺服器配件",
                ItemID: "109",
              },
            ],
          },
        ];
      }
    }

    if (CountryCode === 101142000) {
      if (ProductType === ProductTypeEnum.consumer) {
        return [
          {
            ProductGroupName: "Motherboard",
            ProductsList: [
              {
                ProductName: "Motherboard",
                ItemID: "2",
              },
            ],
          },
          {
            ProductGroupName: "Graphics Card",
            ProductsList: [
              {
                ProductName: "Graphics Card",
                ItemID: "3",
              },
            ],
          },
          {
            ProductGroupName: "Notebook \u0026 Netbook",
            ProductsList: [
              {
                ProductName: "Laptop",
                ItemID: "5",
              },
            ],
          },
          {
            ProductGroupName: "Monitor",
            ProductsList: [
              {
                ProductName: "Monitors",
                ItemID: "11",
              },
            ],
          },
          {
            ProductGroupName: "Desktop PC",
            ProductsList: [
              {
                ProductName: "BRIX (Mini-PC Barebone)",
                ItemID: "104",
              },
              {
                ProductName: "Mini-PC System (BRIX)",
                ItemID: "105",
              },
            ],
          },
          {
            ProductGroupName: "PC Peripherals",
            ProductsList: [
              {
                ProductName: "Keyboard",
                ItemID: "13",
              },
              {
                ProductName: "Mouse",
                ItemID: "14",
              },
            ],
          },
          {
            ProductGroupName: "PC Components",
            ProductsList: [
              {
                ProductName: "PC Case",
                ItemID: "9",
              },
              {
                ProductName: "Power Supply",
                ItemID: "41",
              },
              {
                ProductName: "SSD",
                ItemID: "54",
              },
            ],
          },
        ];
      }

      if (ProductType === ProductTypeEnum.enterprise) {
        return [
          {
            ProductGroupName: "Server Motherboard",
            ProductsList: [
              {
                ProductName: "Server Motherboard",
                ItemID: "101",
              },
            ],
          },
          {
            ProductGroupName: "Server",
            ProductsList: [
              {
                ProductName: "R Series",
                ItemID: "E_1",
              },
              {
                ProductName: "H Series",
                ItemID: "E_2",
              },
              {
                ProductName: "G Series",
                ItemID: "E_4",
              },
              {
                ProductName: "E Series",
                ItemID: "E_6",
              },
              {
                ProductName: "S Series",
                ItemID: "E_7",
              },
              {
                ProductName: "W Series",
                ItemID: "E_8",
              },
            ],
          },
          {
            ProductGroupName: "Data Center - OCP",
            ProductsList: [
              {
                ProductName: "Data Center - OCP",
                ItemID: "115",
              },
            ],
          },
          {
            ProductGroupName: "Embedded Computing",
            ProductsList: [
              {
                ProductName: "Embedded Computing",
                ItemID: "112",
              },
            ],
          },
          {
            ProductGroupName: "Accessory",
            ProductsList: [
              {
                ProductName: "Accessory",
                ItemID: "109",
              },
            ],
          },
        ];
      }
    }

    return [];
  }
);
