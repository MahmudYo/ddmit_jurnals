<template>
  <div>
    <div class="grid grid-rows-1 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-5 py-5">
      <MainMagzineDatabaseCard v-for="item in 9" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Махзани маҷалла",
});
</script>