<script setup>
const isOpen = ref(false);
</script>
<template>
  <img
    class="w-[300px] rounded cursor-pointer"
    src="@/assets/main/contact1.jpg"
    @click="isOpen = true"
    alt=""
  />
  <UModal v-model="isOpen">
    <div class="p-4">
      <img src="@/assets/main/contact1.jpg" alt="" />
    </div>
  </UModal>
</template>
