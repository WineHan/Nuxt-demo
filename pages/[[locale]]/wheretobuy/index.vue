<template></template>

<script setup lang="ts">
definePageMeta({
  middleware: () => {
    return navigateTo("/404");
  },
});
</script>
