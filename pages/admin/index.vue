<script setup>
const isOpen = ref(false);
import { useUserStore } from "~/store/User";
const user = useUserStore();
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
        <h4 class="text-mainColor">Шумо мехоҳед тафсилоти худро тағир диҳед?</h4>
        <div>
          <UiInputsMain
            class="text-black mb-3"
            type="text"
            icon="bi bi-person"
            placeholder="Username"
            name="username"
            :required="true"
            @model="model"
            :value="user.authUser.username"
          />
          <UiInputsMain
            class="text-black mb-3"
            type="password"
            icon="bi bi-key-fill"
            placeholder="Password"
            name="password"
            :required="true"
            @model="model"
            :value="user.authUser"
          />
          <UButton
            icon="i-heroicons-pencil-square"
            size="sm"
            color="indigo"
            variant="solid"
            label="Тағир"
            :trailing="false"
          />
        </div>
      </div>
    </UModal>
  </NuxtLayout>
</template>
