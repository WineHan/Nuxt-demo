<template>
  <div class="location-block">
    <transition>
      <div v-if="!showSearch" @click="showSearch = true" class="location-group">
        <h3 class="mb-0">{{ $t("location") }}:</h3>
        <a class="location-link">{{ selectLocation }}</a>
        <svg
          class="select-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="#21d4fd"
        >
          <rect
            id="Rectangle_1093"
            data-name="Rectangle 1093"
            class="triangleDown-1"
            width="14"
            height="14"
            fill="rgba(0,0,0,0)"
          ></rect>
          <path
            id="Polygon_1"
            data-name="Polygon 1"
            d="M6,0l6,8H0Z"
            transform="translate(13 11) rotate(180)"
          ></path>
        </svg>
      </div>
      <div v-else class="search-group" :class="{ active: searchText !== '' }">
        <svg
          class="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="#fff"
        >
          <rect
            id="Rectangle_1685"
            data-name="Rectangle 1685"
            width="25"
            height="25"
            opacity="0"
          ></rect>
          <path
            id="Path_532"
            data-name="Path 532"
            d="M15.593,13.889a8.618,8.618,0,0,0-.766-11.356,8.714,8.714,0,0,0-12.283,0,8.617,8.617,0,0,0,0,12.227,8.718,8.718,0,0,0,11.278.86l8.726,8.686a1.245,1.245,0,0,0,1.755,0,1.231,1.231,0,0,0,0-1.747Zm-2.521-9.61a6.155,6.155,0,0,1,0,8.733,6.224,6.224,0,0,1-8.774,0,6.155,6.155,0,0,1,0-8.733A6.224,6.224,0,0,1,13.073,4.279Z"
          ></path>
        </svg>
        <input
          :value="searchText"
          @input="handleSearchCountry($event)"
          class="search-input"
          type="text"
          name="search"
          placeholder="搜尋您想找的地區(請輸入英文)"
          autocomplete="off"
        />
        <svg
          class="search-close"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="#fff"
          @click="closeSearch"
        >
          <path
            class="closeA"
            d="M13.55-15.623l6.573-6.559.927.941-6.559,6.559L21.05-8.11l-.927.927L13.55-13.742,6.991-7.183,6.05-8.11l6.559-6.573L6.05-21.242l.941-.941Z"
            transform="translate(-6.05 22.183)"
          ></path>
        </svg>
      </div>
    </transition>
    <ul v-if="showSearch && searchText !== ''" class="search-result-list">
      <template v-if="whereByStore.searchLocation.length > 0">
        <li
          v-for="local in whereByStore.searchLocation"
          :key="local.Cmid"
          @click="setLocation(local)"
          class="search-item"
        >
          {{ local.Name }}
        </li>
      </template>
      <template v-else>
        <li class="search-no-item">
          很抱歉，沒有與您搜索相符的地區，請重新搜尋謝謝。
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
const whereByStore = useWhereByStore();
const showSearch = ref(false);
const searchText = ref<string>("");
const selectLocation = ref<string>("");
const router = useRouter();

selectLocation.value =
  AreaEnum[whereByStore.nowLocale as keyof typeof AreaEnum];

function handleSearchCountry(e: Event) {
  searchText.value = (e.target as HTMLInputElement).value;
  whereByStore.getCountryData(searchText.value);
}

function closeSearch() {
  showSearch.value = false;
  searchText.value = "";
}

async function setLocation(local: CountryApiResponse) {
  selectLocation.value = local.Name;
  showSearch.value = false;
  searchText.value = "";

  whereByStore.setNowLocale(local.Code.toLowerCase());

  router.push({
    params: {
      slug: whereByStore.nowLocale,
    },
  });
}
</script>

<style lang="scss"></style>
