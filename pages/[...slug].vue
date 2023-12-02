<template>
  <div class="main">
    <div class="main-kv">
      <ClientOnly fallback-tag="span" placeholder="loading...">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://placehold.co/1920x720"
                class="d-block w-100"
                alt="first"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://placehold.co/1920x720"
                class="d-block w-100"
                alt="second"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://placehold.co/1920x720"
                class="d-block w-100"
                alt="third"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </ClientOnly>
    </div>

    <div class="main-news-block">
      <h2 class="main-news-title">最新消息</h2>
      <ul class="main-news-list">
        <li
          v-for="(news, index) in topNews"
          :key="news.id"
          class="main-news-list-item"
        >
          <NuxtLink :to="generateSingleNewsUrl(route.fullPath, news.id)">
            {{ index + 1 }} : {{ news.title }}
          </NuxtLink>
        </li>
        <li class="main-news-list-item">
          <NuxtLink :to="generateAllNewsUrl(route.fullPath)">
            更多最新消息
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const store = useNewsStore();
const route = useRoute();

useHead({
  meta: [{ name: "description", content: "台北旅遊資訊" }],
  title: "台北旅遊資訊",
});

definePageMeta({
  middleware: "news",
});

const topNews = computed(() => {
  return store.newsData.data.slice(0, 3);
});

const generateSingleNewsUrl = (routePath, postID) => {
  if (routePath === "/") {
    routePath = "";
  }

  if (postID === 45416 || postID === 21967) {
    return `${routePath}/news/custom`;
  }

  return `${routePath}/news/${postID}`;
};

const generateAllNewsUrl = (routePath) => {
  if (routePath === "/") {
    routePath = "";
  }
  return `${routePath}/news`;
};
</script>

<style lang="scss">
.main {
  .main-news-block {
    padding-top: 20px;

    .main-news-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .main-news-list {
      padding-left: 1rem;

      .main-news-list-item {
        padding: 10px 0;

        a {
          cursor: pointer;
          display: inline-block;
          color: black;

          &:hover {
            color: #0070f3;
          }
        }
      }
    }
  }
}
</style>
