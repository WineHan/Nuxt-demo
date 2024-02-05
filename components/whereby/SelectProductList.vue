<template>
  <div class="select-block">
    <div ref="selectedHead" @click="toggleSelectMenu" class="selected-head">
      <span class="selected-text">
        {{
          whereByStore.selectProductClass === ""
            ? $t("selectProductClass")
            : whereByStore.selectProductClass
        }}
      </span>
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
      <ul v-show="openSelectMenu" class="select-multiple-menu">
        <li
          v-for="(productGroup, index) in whereByOption"
          class="select-option"
          :key="index"
        >
          <h5 class="group-title">{{ productGroup.ProductGroupName }}</h5>
          <ul class="product-sub-menu">
            <li
              v-for="product in productGroup.ProductsList"
              :key="product.ItemID"
              class="product-item"
              @click="setProductClass(product)"
            >
              {{ product.ProductName }}
            </li>
          </ul>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  whereByOption: {
    type: Array as PropType<ProductApiResponse[]>,
    required: true,
  },
});

const whereByStore = useWhereByStore();
const openSelectMenu = ref(false);
const selectedHead = ref<HTMLDivElement | null>(null);

function toggleSelectMenu() {
  if (openSelectMenu.value) {
    window.setTimeout(() => {
      selectedHead.value?.classList.remove("active");
    }, 500);
  } else {
    selectedHead.value?.classList.add("active");
  }

  openSelectMenu.value = !openSelectMenu.value;
}

async function setProductClass(product: Product) {
  toggleSelectMenu();
  whereByStore.setProductClass(product);
  whereByStore.setSearchValue("");

  await whereByStore.getWhereByTab();
  await whereByStore.getWhereByContent();
}
</script>

<style lang="scss"></style>
