<template>
  <div class="content">
    <NuxtLoadingIndicator />
    <slot />
    <ClientOnly>
      <img
        v-if="whereByStore.isLoading"
        class="loading-image"
        src="https://www.gigabyte.com/Images/three-dots.svg"
        alt="loading"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "經銷據點 - GIGABYTE 技嘉科技 ",
  meta: [
    {
      name: "description",
      content: "經銷據點 - GIGABYTE 技嘉科技 ",
    },
  ],
});

const whereByStore = useWhereByStore();
</script>

<style lang="scss">
.content {
  min-height: 1000px;
}
</style>
