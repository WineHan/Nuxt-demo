<template>
  <div class="all-news-block">
    <div class="row flex-column flex-md-row">
      <div v-for="(news, index) in allNewsData" :key="news.id" class="col-12 col-md-6">
        <NewsCart :class="{ custom: index === 1 }" :news-content="news" />
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useNewsStore();
const allNewsData = store.newsData ? store.newsData.data : [];

definePageMeta({
  middleware: "news",
});
</script>

<style lang="scss">
.all-news-block {
  padding-top: 20px;
}

.custom {
  background-color: red;
}
</style>
