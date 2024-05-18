<script setup>
import { useJurnalStore } from "@/store/Jurnal";
const jurnal = useJurnalStore();
</script>
<template>
  <div class="w-full my-3 h-[5px]">
    <span
      :style="{ width: `${jurnal.progress.loading}%` }"
      class="bg-mainColor text-black w-0 h-full block transition"
    ></span>
    <div class=" text-end text-sm italic">{{ jurnal.progress.loading }}% <br> {{ jurnal.progress.size }}kb</div>
  </div>
</template>
