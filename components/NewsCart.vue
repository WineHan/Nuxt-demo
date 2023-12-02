<template>
  <div class="card mb-3">
    <div class="card-header">
      發佈時間：
      <time :datetime="newsContent.posted">
        {{ formatDate(newsContent.posted) }}
      </time>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <NuxtLink :to="linkTO">{{ newsContent.title }}</NuxtLink>
      </h5>
      <NuxtLink :to="linkTO">see more</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const props = defineProps({
  newsContent: Object,
});

const linkTO = `${route.fullPath}/${props.newsContent.id}`;
</script>

<style lang="scss">
.card-body {
  display: flex;
  flex-direction: column;

  .card-title {
    letter-spacing: 1px;
    overflow: hidden;

    a {
      display: block;
      text-decoration: none;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover {
        color: #0070f3;
      }
    }
  }

  a {
    font-size: 20px;
    color: black;
    margin-top: auto;
    align-self: flex-end;
  }
}
</style>
