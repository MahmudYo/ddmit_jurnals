<script setup>
const isOpen = ref(false);
defineProps({
  imgSmall: String,
  imgBig: String,
  text: String,
});
</script>
<template>
  <div class="p-3">
    <UModal v-model="isOpen">
      <div><img :src="imgBig" alt="imageSmall" /></div>
    </UModal>
    <div class="flex gap-5 max-lg:flex-col">
      <div class="cursor-pointer w-full object-cover" @click="isOpen = true">
        <img :src="imgSmall" class="max-lg:m-auto" alt="image" />
      </div>
      <div class="leading-8">
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>
