<script setup>
const isOpen = ref(false);
import axios from "axios";
const config = useRuntimeConfig();
import { useUserStore } from "~/store/User";
const user = useUserStore();
const formData = reactive({
  username: null,
  password: null,
});
const model = (value, name) => {
  if (name === "username") {
    formData.username = value;
  } else {
    formData.password = value;
  }
};
const setUserData = async () => {
  await axios
    .post(`${config.public.apiUrl}/users/${user.user.id}`, formData)
    .then((res) => {
      user.user = res.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isOpen.value = false;
    });
};
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <NuxtLayout name="admin">
    <div class="flex items-center flex-col gap-3 justify-center h-full">
      <i
        @click="isOpen = true"
        class="bi bi-shield-fill-check text-6xl cursor-pointer transition hover:text-activeColor text-mainColor"
      ></i>
      <h1 class="text-3xl text-center">Хуш омадед ба панели администратори</h1>
    </div>
    <UModal v-model="isOpen">
      <div class="p-4">
        <h4 class="text-mainColor">
          Шумо мехоҳед тафсилоти худро тағир диҳед?
        </h4>
        <form @submit.prevent="setUserData">
          <UiInputsMain
            class="text-black mb-3"
            type="text"
            icon="bi bi-person"
            placeholder="New username"
            name="username"
            :required="true"
            @model="model"
            :value="user.user.username"
          />
          <UiInputsMain
            class="text-black mb-3"
            type="password"
            icon="bi bi-key-fill"
            placeholder="New password"
            name="password"
            :required="true"
            @model="model"
          />
          <UButton
            type="submit"
            class="mt-3"
            icon="i-heroicons-pencil-square"
            size="sm"
            color="indigo"
            variant="solid"
            label="Тағир"
            :trailing="false"
          />
        </form>
      </div>
    </UModal>
  </NuxtLayout>
</template>
