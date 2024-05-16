<template>
  <div>
    <div class="grid grid-rows-1 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-10 grid-cols-4  py-5">
      <MainMagzineDatabaseCard v-for="item in 9" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Махзани маҷалла",
});
</script>