<script setup>
defineProps({
  title: String,
  list: Array,
});
</script>

<template>
  <div class="mb-5 flex justify-center flex-col">
    <div
      class="text-xl text-white bg-mainColor text-center uppercase font-bold mb-3"
    >
      {{ title }}
    </div>
    <div class="md:flex gap-5 flex-wrap items-center justify-center">
      <MainEditorialBoardPeopleCard v-for="item in list" :persone="item" />
    </div>
  </div>
</template>
