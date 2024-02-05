<template>
  <Header />
  <div class="container content">
    <NuxtLoadingIndicator />
    <slot />
  </div>
  <Footer />
</template>

<script setup>
useHead({
  title: "台北旅遊資訊",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : "台北旅遊資訊";
  },
  meta: [
    {
      name: "description",
      content: "台北旅遊資訊",
    },
  ],
});
</script>

<style lang="scss">
.content {
  min-height: 1000px;
}
</style>
