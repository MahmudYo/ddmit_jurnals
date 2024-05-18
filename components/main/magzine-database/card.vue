<script setup>
defineProps({
  item: Object,
});
const config = useRuntimeConfig();
</script>
<template>
  <div
    class="flex flex-col items-center hover:shadow-lg hover:scale-110 pt-3 mx-3 transition"
  >
    <div class="w-[175px] relative hover:group-hover:hidden group mb-3">
      <div
        class="absolute top-0 left-0 bg-black transition w-full h-full bg-opacity-50 items-center justify-center gap-1 group-hover:flex hidden"
      >
        <a
          class="btn btn-primary"
          target="_blank"
          :href="`${config.public.apiUrl}/jurnals/document/${item.id}/${item.jurnal}`"
          ><i class="bi bi-book"></i
        ></a>
        <a
          class="btn btn-success"
          target="_blank"
          :href="`${config.public.apiUrl}/jurnals/document/download/${item.id}/${item.jurnal}`"
          ><i class="bi bi-download"></i
        ></a>
      </div>
      <img
        :src="`${config.public.apiUrl}/jurnals/image/${item.id}/${item.image}`"
        class="w-full h-full"
        :alt="`IMAGE ${item.name}`"
      />
    </div>
    <div>
      <p class="text-mainColor text-center font-bold">
        {{ item.title }} <br />
        <em>{{ item.year }}</em>
      </p>
    </div>
  </div>
</template>
