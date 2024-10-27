<script setup>
import axios from "axios";
import { useUserStore } from "~/store/User";
const user = useUserStore();
const searchData = ref("");
const config = useRuntimeConfig();
const jurnals = ref([]);
const isLoading = ref(false);
const model = (value, name) => {
  searchData.value = value;
};
let debounceTimer;

watch(searchData, (newVal) => {
  user.admin = newVal;

  if (newVal.length) {
    isLoading.value = true;
    jurnals.value = [];

    // Очистить предыдущий таймер, если он существует
    clearTimeout(debounceTimer);

    // Установить новый таймер
    debounceTimer = setTimeout(() => {
      axios
        .get(`${config.public.apiUrl}/search/${newVal}`)
        .then((res) => {
          jurnals.value = res.data;
        })
        .finally(() => {
          isLoading.value = false;
        });
    }, 2000); // Дебаунс 2 секунды
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
        v-if="+searchData.length"
        class="absolute z-10 py-1 flex items-center flex-col px-2 w-full rounded-md max-h-[55vh] overflow-auto bg-white"
      >
        <div
          v-if="jurnals.length"
          v-for="item in jurnals"
          :key="item.id"
          class="flex items-center justify-between p-2 rounded w-full mb-2 bg-gray-200 text-mainColor transition hover:bg-gray-100 hover:text-activeColor"
          target="_blank"
        >
          <div>
            <div>{{ item.year }}</div>
            <div>{{ item.title }}</div>
          </div>
          <div>
            <a
              class="text-white text-sm p-2 mr-2 rounded-lg bg-teal-500"
              target="_blank"
              :href="`${config.public.apiUrl}/jurnals/document/${item.id}`"
              ><i class="bi bi-book"></i
            ></a>
            <a
              class="text-white text-sm p-2 rounded-lg bg-blue-500"
              target="_blank"
              :href="`${config.public.apiUrl}/jurnals/document/download/${item.id}`"
              ><i class="bi bi-download"></i
            ></a>
          </div>
        </div>

        <UiLoading v-else-if="isLoading" />
        <p class="text-center text-mainColor" v-else>Мақолаи шумо ёфт нашуд</p>
      </div>
    </Transition>

    <!--      :href="`${config.public.apiUrl}/jurnals/document/${item.id}`"-->
  </div>
</template>

<style scuped></style>
