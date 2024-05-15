<template>
  <div>
    <div class="container m-auto">
      <div class="grid grid-rows-1 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-5 my-5">
        <MainMagzineDatabaseCard v-for="item in 9" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Махзани маҷалла",
});
</script>