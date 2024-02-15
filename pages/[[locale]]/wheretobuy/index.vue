<template></template>

<script setup lang="ts">
definePageMeta({
  middleware: () => {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found",
    });
  },
});
</script>
