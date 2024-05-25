<script setup>
import axios from "axios";
const searchData = ref("");
const config = useRuntimeConfig();
const jurnals = ref([]);
const model = (value, name) => {
  searchData.value = value;
};
watch(searchData, (newVal) => {
  if (newVal.length) {
    axios.get(`${config.public.apiUrl}/search/${newVal}`).then((res) => {
      jurnals.value = res.data;
    });
  } else {
    jurnals.value = [];
  }
});
</script>

<template>
  <div class="relative">
    <UiInputsMain
      type="text"
      icon="bi bi-search"
      placeholder="Ҷустуҷӯ..."
      name="search"
      @model="model"
    />
    <Transition>
      <div
        v-if="jurnals.length"
        class="absolute py-1 px-2 rounded-md h-auto overflow-auto bg-white"
      >
        <MainMagzineDatabaseCard v-for="item in jurnals" :item="item" />
      </div>
    </Transition>
  </div>
</template>

<style scuped></style>
