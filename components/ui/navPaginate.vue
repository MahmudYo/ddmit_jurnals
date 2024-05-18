<script setup>
import { useJurnalStore } from "~/store/Jurnal";
import axios from "axios";
const jurnale = useJurnalStore();
watch(
  () => jurnale.paginate.current_page,
  () => {
    const pathPaginate = jurnale.paginate.links.filter(
      (item) => item.label == jurnale.paginate.current_page
    )[0].url;
    axios.get(pathPaginate).then((res) => {
      jurnale.jurnals = res.data.data;
      jurnale.paginate = res.data;
    });
  }
);
</script>

<template>
  <UPagination
  class="pl-3 mb-3"
    v-model="jurnale.paginate.current_page"
    :total="jurnale.paginate.total"
    :inactive-button="{ color: 'gray' }"
    :active-button="{ color: 'emerald' }"
    :prev-button="{ color: 'gray' }"
    :next-button="{ color: 'gray' }"
  />
</template>
<style scuped>
.active {
  font-weight: 900;
}
</style>
