<script setup>
defineProps({
  path: String,
});
</script>

<template>
  <img :src="`_nuxt/${path}`" alt="" />
</template>
