<script setup>
defineProps({
  persone: Object,
});
const config = useRuntimeConfig();
</script>

<template>
  <div
    class="flex-[40%] flex gap-2 mb-3 max-md:flex-col text-black hover:translate-y-[-5px] h-full transition rounded"
  >
    <div v-if="persone.image" class="flex-[30%] md:max-w-[300px] h-full">
      <!-- @/assets/cardpeople.jpeg -->

      <img
        :src="`${config.public.apiUrl}/editing_persons/image/${persone.id}`"
        class="w-full object-cover h-full"
        alt="image of people"
      />
    </div>
    <div class="p-4 text-center flex-[70%] bg-gray-100">
      <div
        class="mb-5"
        :class="persone.role === 'rector' ? ` uppercase` : 'normal-case'"
      >
        <h6>
          <b>{{ persone.full_name }}</b>
        </h6>
      </div>
      <div>{{ persone.description }}</div>
    </div>
  </div>
</template>

<style scuped></style>
