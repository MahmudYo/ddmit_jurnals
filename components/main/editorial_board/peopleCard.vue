<script setup>
defineProps({
  persone: Object,
});
const config = useRuntimeConfig();
</script>

<template>
  <div
    :class="
      persone.role === 'rector'
        ? 'bg-green-200 text-black'
        : 'bg-gray-200 '
    "
    class="shadow flex mb-3 text-black hover:translate-y-[-5px] h-full transition rounded"
  >
    <div v-if="persone.image" class="flex-[30%]">
      <!-- @/assets/cardpeople.jpeg -->

      <img
        :src="`${config.public.apiUrl}/editing_persons/image/${persone.id}`"
        class="w-full h-full object-cover"
        alt="image of people"
      />
    </div>
    <div class="p-4 text-center flex-[70%]">
      <div :class="persone.role === 'rector' ? ` uppercase` : 'normal-case'">
        <h6>{{ persone.full_name }}</h6>
      </div>
      <div>{{ persone.description }}</div>
    </div>
  </div>
</template>

<style scuped></style>
