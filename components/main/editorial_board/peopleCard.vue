<script setup>
defineProps({
  persone: Object,
});
const config = useRuntimeConfig();
</script>

<template>
  <div
    :class="
      persone.role === 'rector' ? 'bg-teal-500 text-white' : 'bg-green-100 '
    "
    class="shadow flex m-auto text-black hover:translate-y-[-5px] h-full transition rounded"
  >
    <div class="flex-[35%]">
      <!-- @/assets/cardpeople.jpeg -->

      <img
        :src="`${config.public.apiUrl}/editing_persons/image/${persone.id}`"
        class="w-full h-full object-cover"
        alt="image of people"
      />
    </div>
    <div class="p-4 text-center flex-[65%]">
      <div>
        <h6>{{ persone.full_name }}</h6>
      </div>
      <div>{{ persone.description }}</div>
    </div>
  </div>
</template>

<style scuped></style>
