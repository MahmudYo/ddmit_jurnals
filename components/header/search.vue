<script setup>
import axios from "axios";
import { useUserStore } from "~/store/User";
const user = useUserStore();
const searchData = ref("");
const config = useRuntimeConfig();
const jurnals = ref([]);
const model = (value, name) => {
  searchData.value = value;
};
watch(searchData, (newVal) => {
  user.admin = newVal;
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
        class="absolute py-1 px-2 w-full rounded-md max-h-[40vh] overflow-auto bg-white"
      >
        <a
          v-for="item in jurnals"
          :key="item.id"
          class="p-2 rounded block mb-2 bg-gray-200 text-mainColor transition hover:bg-gray-100 hover:text-activeColor text-center"
          :href="`${config.public.apiUrl}/jurnals/document/${item.id}`"
          target="_blank"
        >
          <div>{{ item.year }}</div>
          <div>{{ item.title }}</div>
        </a>
      </div>
    </Transition>
  </div>
</template>

<style scuped></style>
