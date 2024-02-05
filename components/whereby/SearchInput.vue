<template>
  <div class="search-block">
    <svg
      class="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 25 25"
      fill="#fff"
    >
      <rect
        id="Rectangle_1685"
        data-name="Rectangle 1685"
        width="20"
        height="20"
        fill="#727272"
        opacity="0"
      ></rect>
      <path
        id="Path_532"
        data-name="Path 532"
        d="M15.593,13.889a8.618,8.618,0,0,0-.766-11.356,8.714,8.714,0,0,0-12.283,0,8.617,8.617,0,0,0,0,12.227,8.718,8.718,0,0,0,11.278.86l8.726,8.686a1.245,1.245,0,0,0,1.755,0,1.231,1.231,0,0,0,0-1.747Zm-2.521-9.61a6.155,6.155,0,0,1,0,8.733,6.224,6.224,0,0,1-8.774,0,6.155,6.155,0,0,1,0-8.733A6.224,6.224,0,0,1,13.073,4.279Z"
      ></path>
    </svg>

    <svg
      v-if="showSearchIcon"
      :class="[
        'go-search-icon',
        { active: whereByStore.searchValue.length > 0 },
      ]"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="15"
      viewBox="0 0 20 15"
      @click="goSearch"
    >
      <path
        d="M10-11.25v2.5H-5.215L-.732-4.268-2.5-2.5-10-10l7.5-7.5,1.768,1.768-2.545,2.545L-5.215-11.25Z"
        transform="translate(10 17.5)"
      ></path>
    </svg>

    <svg
      v-else
      class="close-search-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="#fff"
      @click="clearSearch"
    >
      <path
        class="closeA"
        d="M13.55-15.623l6.573-6.559.927.941-6.559,6.559L21.05-8.11l-.927.927L13.55-13.742,6.991-7.183,6.05-8.11l6.559-6.573L6.05-21.242l.941-.941Z"
        transform="translate(-6.05 22.183)"
      ></path>
    </svg>

    <input
      :value="whereByStore.searchValue"
      @input="setSearchValue($event)"
      type="text"
      class="search-input"
      :placeholder="$t('searchPlaceholder')"
    />
  </div>
</template>

<script setup lang="ts">
const showSearchIcon = ref(true);
const whereByStore = useWhereByStore();

watch(
  () => whereByStore.searchValue,
  (value) => {
    if (value === "") {
      showSearchIcon.value = true;
    }
  }
);

function setSearchValue(e: Event) {
  whereByStore.setSearchValue((e.target as HTMLInputElement).value);
}

async function goSearch() {
  if (whereByStore.searchValue === "") return;
  showSearchIcon.value = false;

  await whereByStore.getWhereByTab();
  await whereByStore.getWhereByContent();
}

function clearSearch() {
  whereByStore.setSearchValue("");
  showSearchIcon.value = true;
}
</script>

<style lang="scss"></style>
