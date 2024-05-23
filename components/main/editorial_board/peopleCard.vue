<script setup>
defineProps({
  imagePath: String,
  fullName: String,
  description: String,
});
</script>

<template>
  <div class="shadow flex m-auto hover:translate-y-[-5px] h-full transition rounded">
    <div class="flex-[35%]">
      <img
        src="@/assets/cardpeople.jpeg"
        class="w-full h-full object-cover "
        alt="image of people"
      />
    </div>
    <div class="p-4 text-center flex-[65%]">
      <div>
        <h6>{{ fullName }}</h6>
      </div>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<style scuped></style>
