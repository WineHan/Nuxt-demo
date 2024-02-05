<template>
  <div class="select-block">
    <div ref="selectedCityHead" @click="toggleSelectMenu" class="selected-head">
      <span class="selected-text">{{
        whereByStore.selectCityName === ""
          ? $t("selectCityName")
          : whereByStore.selectCityName
      }}</span>
      <svg
        fill="#21d4fd"
        class="select-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 432.527"
      >
        <path
          d="M6.334,8.346h480L245.675,440.874Z"
          transform="translate(-6.334 -8.347)"
        ></path>
      </svg>
    </div>

    <transition name="slide">
      <ul v-show="openSelectMenu" class="select-menu">
        <li
          v-for="option in whereByOption"
          :key="option.Cmid"
          @click="setCity(option)"
          class="select-option"
        >
          {{ option.Name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  whereByOption: {
    type: Array as PropType<CityApiResponse[]>,
    required: true,
  },
});
const whereByStore = useWhereByStore();
const openSelectMenu = ref(false);
const selectedCityHead = ref<HTMLDivElement | null>(null);

function toggleSelectMenu() {
  if (openSelectMenu.value) {
    window.setTimeout(() => {
      selectedCityHead.value?.classList.remove("active");
    }, 500);
  } else {
    selectedCityHead.value?.classList.add("active");
  }

  openSelectMenu.value = !openSelectMenu.value;
}

async function setCity(option: CityApiResponse) {
  toggleSelectMenu();
  whereByStore.setCityData(option);

  whereByStore.setProductClass({
    ProductName: "",
    ItemID: "",
  });

  whereByStore.setSearchValue("");

  await whereByStore.getWhereByTab();
  await whereByStore.getWhereByContent();
}
</script>

<style lang="scss"></style>
