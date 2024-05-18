<script setup>
import { useJurnalStore } from "~/store/Jurnal";
const jurnal = useJurnalStore();
onMounted(() => {
  jurnal.Index();
});
useHead({
  title: "Махзани маҷалла",
});
</script>

<template>
  <div>
    <div
      class="grid grid-rows-1 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-10 grid-cols-4 py-5"
    >
      <TransitionGroup name="list">
        <MainMagzineDatabaseCard
          v-for="item in jurnal.jurnals"
          :key="item.id"
          :item="item"
        />
      </TransitionGroup>
    </div>
    <UiNavPaginate />
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
