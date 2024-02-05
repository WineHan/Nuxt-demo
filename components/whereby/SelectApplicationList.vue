<template>
  <div class="select-block">
    <div ref="selectedHead" @click="toggleSelectMenu" class="selected-head">
      <span class="selected-text">
        {{ $t(whereByStore.productType) }}
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
      <ul v-show="openSelectMenu" class="select-menu">
        <li
          v-for="option in productTypeOption"
          :key="option"
          @click="goPath(option)"
          class="select-option"
        >
          {{ $t(option.toLowerCase()) }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const whereByStore = useWhereByStore();
const openSelectMenu = ref(false);
const selectedHead = ref<HTMLDivElement | null>(null);
const productTypeOption = ref<string[]>(["Consumer", "Enterprise"]);

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

function goPath(option: string) {
  toggleSelectMenu();

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

  router.push(option);
}
</script>

<style lang="scss"></style>
