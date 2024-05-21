<script setup>
import { useJurnalStore } from "~/store/Jurnal";
import axios from "axios";
const jurnale = useJurnalStore();
const changePageTo = (current_page) => {
  const pathPaginate = jurnale.paginate.links.filter(
    (item) => item.label == current_page
  )[0].url;
  const isHaveStore = jurnale.oldPages.some(
    (item) => item.current_page === current_page
  );
  if (isHaveStore) {
    const oldData = jurnale.oldPages.filter(
      (item) => item.current_page === current_page
    )[0];
    jurnale.jurnals = oldData.data;
    jurnale.paginate.current_page = oldData.current_page;
  } else {
    jurnale.isLoading = true;
    axios.get(pathPaginate).then((res) => {
      jurnale.jurnals = res.data.data;
      jurnale.paginate = res.data;
      jurnale.oldPages.push({
        current_page: current_page,
        data: res.data.data,
      });
      jurnale.isLoading = false;
    });
  }
};
</script>

<template>
  <UPagination
    class="pl-3 mb-3"
    v-model="jurnale.paginate.current_page"
    :total="jurnale.paginate.total"
    :page-count="15"
    :inactive-button="{ color: 'gray' }"
    :active-button="{ color: 'emerald' }"
    :prev-button="{ color: 'gray' }"
    :next-button="{ color: 'gray' }"
    @click="changePageTo(jurnale.paginate.current_page)"
  />
</template>
<style scuped>
.active {
  font-weight: 900;
}
</style>
