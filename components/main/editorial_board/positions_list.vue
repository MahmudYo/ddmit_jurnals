<script setup>
defineProps({
  title: String,
  list: Array,
});
</script>

<template>
  <div class="mb-3 flex justify-center flex-col">
    <div class="text-xl text-green-900 font-bold mb-3">{{ title }}</div>
    <ul class="flex  flex-wrap gap-x-0.5 gap-y-10">
      <MainEditorialBoardPeopleCard
        v-for="item in list"
        imagePath="path"
        :fullName="item.person"
        :description="item.personInfo"
      />
    </ul>
  </div>
</template>
