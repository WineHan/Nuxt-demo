<template>
  <div id="where-to-by">
    <section class="main-bg">
      <div class="bg-cover"></div>
      <client-only>
        <div class="main-kv">
          <nav class="bread-nav">
            <ul class="bread-list">
              <li class="bread-list-item">
                <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
              </li>
              <li class="bread-list-item">
                <svg
                  class="bread-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20.138 12.246"
                >
                  <g transform="translate(-437 -72.497)">
                    <path
                      fill="#008cd6"
                      class="SlashFirst"
                      d="M7.039,1.743H5L0-10.5H2.058Z"
                      transform="translate(437 83)"
                    ></path>
                    <path
                      fill="#15b3b6"
                      class="SlashSecond"
                      d="M7.039,1.743H5L0-10.5H2.058Z"
                      transform="translate(443.5 83)"
                    ></path>
                    <path
                      fill="#2cdd95"
                      class="SlashThird"
                      d="M7.039,1.743H5L0-10.5H2.058Z"
                      transform="translate(450.099 83)"
                    ></path>
                  </g>
                </svg>
              </li>
              <li class="bread-list-item">{{ $t("dealership") }}</li>
            </ul>
          </nav>
          <div class="form-group">
            <h1 class="title">{{ $t("dealership") }}</h1>
            <wherebySearchLocation />
            <div class="select-group">
              <wherebySelectApplicationList />
              <wherebySelectProductList
                :where-by-option="whereByStore.productLineData"
              />
              <a
                v-if="whereByStore.isShowClearCondition"
                @click="resetAllFilter"
                class="reset-btn"
              >
                {{ $t("clear") }}
              </a>
            </div>
          </div>
        </div>
      </client-only>
    </section>
    <section class="result-block">
      <div class="result-container">
        <nav
          class="nav-button-group"
          :class="{ 'show-arrow': whereByStore.tabData.length > 3 }"
        >
          <svg
            class="arrow-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 30"
          >
            <path
              d="M20-30,5-15,20,0l4-4L13-15,24-26Z"
              transform="translate(-5 30)"
            ></path>
          </svg>
          <template v-for="tab in whereByStore.tabData" :key="tab.Id">
            <button
              @click="changeTab(tab.Id)"
              class="btn-tab"
              :class="{ active: tab.Id === whereByStore.nowActiveTabId }"
            >
              {{ tab.Name }}
            </button>
          </template>
          <svg
            class="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 30"
          >
            <path
              d="M20-30,5-15,20,0l4-4L13-15,24-26Z"
              transform="translate(-5 30)"
            ></path>
          </svg>
        </nav>
        <ul class="result-list">
          <li
            v-for="item in whereByStore.whereByContent?.ListItems"
            :key="item.Id"
            class="result-list-item-card"
            :class="
              whereByStore.whereByContent.ListItems.length > 4
                ? 'show-under-line'
                : ''
            "
          >
            <div class="card-head">
              <a class="img-link" :href="item.UrlPath" target="_blank">
                <img
                  class="img-fluid"
                  src="https://placehold.co/185x50?text=logo"
                  alt="item.Name"
                />
              </a>
            </div>
            <div class="card-body">
              <a class="product-link" :href="item.UrlPath" target="_blank">
                {{ item.Name }}
              </a>
              <div v-if="item.Tel.length > 0" class="product-content">
                <client-only>
                  <span class="product-title">{{ $t("tel") }}</span>
                  <div class="product-items">
                    +{{ item.TelCountryCode + "-" + item.Tel }}
                  </div>
                </client-only>
              </div>
              <div v-if="item.Email" class="product-content">
                <client-only>
                  <span class="product-title">E-mail</span>
                  <div class="product-items">
                    {{ item.Email }}
                  </div>
                </client-only>
              </div>
              <div class="product-content">
                <client-only>
                  <span class="product-title">{{ $t("product") }}</span>
                </client-only>
                <div class="product-items">
                  <template
                    v-for="(product, index) in item.ProductLines"
                    :key="index"
                  >
                    <span v-if="index !== item.ProductLines.length - 1">
                      {{ product + ", " }}
                    </span>
                    <span v-else>
                      {{ product }}
                    </span>
                  </template>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "where",
  middleware: "where-buy",
});

const whereByStore = useWhereByStore();
const { setLocale } = useI18n();

setLocale(whereByStore.nowLocale);

await whereByStore.getProductLinePost();
await whereByStore.getWhereByTab();
await whereByStore.getWhereByContent();

async function resetAllFilter() {
  whereByStore.setCityData({
    Name: "",
    Cmid: undefined,
    Code: null,
  });

  whereByStore.setProductClass({
    ProductName: "",
    ItemID: "",
  });

  whereByStore.setSearchValue("");

  await whereByStore.getWhereByTab();
  await whereByStore.getWhereByContent();
}

async function changeTab(tabId: string) {
  whereByStore.nowActiveTabId = tabId;

  await whereByStore.getWhereByContent();
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
