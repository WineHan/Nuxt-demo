<template>
  <footer class="footer">
    <ul class="footer-list">
      <li class="footer-list-item">
        <NuxtLink to="/qa">常見問題</NuxtLink>
      </li>
      <li class="footer-list-item">
        <NuxtLink to="/about">關於我們</NuxtLink>
      </li>
      <li class="footer-list-item">
        <NuxtLink :to="generateAllNewsUrl()">購買</NuxtLink>
      </li>
      <li class="footer-list-item">copy right@2023</li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute();

const generateAllNewsUrl = (): string => {
  if (route.params.slug === "") return "/us/WheretoBuy/Consumer";
  return `/${route.params.slug}/WheretoBuy/Consumer`;
};
</script>

<style></style>
