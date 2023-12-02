<template>
  <div class="news-info-block">
    <img
      src="https://placehold.co/1920x720"
      class="d-block w-100"
      alt="new-image"
    />
    <h2 class="news-info-title my-3">{{ newsInfo.title }}</h2>
    <ClientOnly>
      <div class="news-info-content">{{ newsInfo.description }}</div>
    </ClientOnly>
    <div class="py-3">
      <time :datetime="newsInfo.posted">
        發佈時間：{{ formatDate(newsInfo.posted) }}
      </time>
    </div>
    <button @click="$router.back()" class="btn btn-dark">回上一頁</button>
  </div>
</template>

<script setup>
const route = useRoute();
const store = useNewsStore();
const newsID = ref(Number(route.params.id));

const newsInfo = computed(() => {
  return store.newsData.data.find((news) => news.id === newsID.value);
});

const headDescription = computed(() => {
  return newsInfo.value.description.slice(0, 50);
});

useSeoMeta({
  title: newsInfo.value.title,
  ogTitle: newsInfo.value.title,
  description: headDescription,
  ogDescription: headDescription,
});

useHead({
  title: newsInfo.value.title,
  meta: [{ name: "ogDescription", content: "News Description." }],
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
  }
}
</style>
