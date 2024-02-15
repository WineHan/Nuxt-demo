<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-list-item">
        <NuxtLink to="/">常見問題</NuxtLink>
      </li>
      <li class="footer-list-item">
        <NuxtLink to="/">關於我們</NuxtLink>
      </li>
      <li class="footer-list-item">
        <NuxtLink :to="generateAllNewsUrl()">購買</NuxtLink>
      </li>
      <li class="footer-list-item">copy right@2023</li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const store = useNewsStore();

const generateAllNewsUrl = (): string => {
  if (store.nowLocale === localeEnum.us) {
    return `/${localeEnum.us}/wheretobuy/consumer`;
  }

  return `/${localeEnum.tw}/wheretobuy/consumer`;
};
</script>

<style></style>
