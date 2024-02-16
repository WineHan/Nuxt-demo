<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-list-item">
        <NuxtLink to="/qa">常見問題</NuxtLink>
      </li>
      <li class="footer-list-item">
        <NuxtLink :to="generateConsumerApplicationURL()">個人購買</NuxtLink>
      </li>
      <li class="footer-list-item">
        <NuxtLink :to="generateEnterpriseApplicationURL()">企業購買</NuxtLink>
      </li>
      <li v-show="false" class="footer-list-item">
        <NuxtLink to="/tw/wheretobuy/consumer"></NuxtLink>
      </li>
      <li v-show="false" class="footer-list-item">
        <NuxtLink to="/tw/wheretobuy/enterprise"></NuxtLink>
      </li>
      <li class="footer-list-item">copy right@2023</li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const store = useNewsStore();

const generateConsumerApplicationURL = (): string => {
  return store.nowLocale === localeEnum.us
    ? `/${localeEnum.us}/wheretobuy/consumer`
    : `/${localeEnum.tw}/wheretobuy/consumer`;
};

const generateEnterpriseApplicationURL = (): string => {
  return store.nowLocale === localeEnum.us
    ? `/${localeEnum.us}/wheretobuy/enterprise`
    : `/${localeEnum.tw}/wheretobuy/enterprise`;
};
</script>

<style></style>
