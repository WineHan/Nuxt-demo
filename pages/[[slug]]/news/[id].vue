<template>
  <div v-if="newsInfo" class="news-info-block">
    <img
      src="https://placehold.co/1920x720"
      class="d-block w-100"
      alt="new-image"
    />
    <h2 class="news-info-title my-3">{{ newsInfo.title }}</h2>
    <ClientOnly>
      <div class="news-info-description">{{ newsInfo.description }}</div>
    </ClientOnly>
    <div class="py-3">
      <span>發佈時間</span>
      <time v-timeformat="newsInfo.posted" :datetime="newsInfo.posted"> </time>
    </div>
    <button @click="$router.back()" class="btn btn-dark">回上一頁</button>
  </div>
  <div v-else>404 page not fund</div>
</template>

<script setup lang="ts">
const route = useRoute();
const store = useNewsStore();
const newsID = ref<number>(Number(route.params.id));
const newsInfo = computed(() => {
  return store.newsData.find((news) => news.id === newsID.value);
});

const headDescription = computed(() => {
  return newsInfo.value ? newsInfo.value.description.slice(0, 50) : "";
});

onBeforeMount(async () => {
  if (!newsInfo.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "News Not Found",
    });
  }
});

useSeoMeta({
  title: newsInfo.value ? newsInfo.value.title : "",
  ogTitle: newsInfo.value ? newsInfo.value.title : "",
  description: headDescription,
  ogDescription: headDescription,
});

definePageMeta({
  middleware: [
    "news",
    async (to, from) => {
      if (to.params.id === "45416" || to.params.id === "21967") {
        return navigateTo(`${from.fullPath}/custom`);
      }
    },
  ],
});
</script>

<style lang="scss">
.news-info-block {
  padding: 20px 0;

  .news-info-description {
    letter-spacing: 1px;
    line-height: 1.75;
    text-align: justify;
  }
}
</style>
