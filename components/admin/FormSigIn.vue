<script setup>
import axios from "axios";
import { useUserStore } from "~/store/User";
const stateUser = useUserStore();
const config = useRuntimeConfig();
const authToken = ref(null);
const isLoading = ref(false);
const formData = reactive({
  username: null,
  password: null,
  error: null,
});
const model = (value, inputName) => {
  if (inputName === "username") {
    formData.username = value;
  } else {
    formData.password = value;
  }
};
const sendUserData = () => {
  isLoading.value = true;
  axios
    .post(`${config.public.apiUrl}/login`, formData)
    .then((res) => {
      console.log(res);
      authToken.value = res.data;
    })
    .catch((err) => {
      console.log(err);
      formData.error = err.response.data.message;
    })
    .finally(() => {
      isLoading.value = false;
      stateUser.authUser = authToken.value.user;
      document.cookie = `auth_token = ${authToken.value.access_token}`;
    });
};
</script>

<template>
  <form @submit.prevent="sendUserData" class="w-full flex flex-col gap-2">
    <h2 class="text-center">
      Welcome <span class="text-mainColor">ADMIN</span>
    </h2>
    <UiInputsMain
      type="text"
      icon="bi bi-person"
      placeholder="Username"
      name="username"
      :required="true"
      @model="model"
    />
    <UiInputsMain
      type="password"
      icon="bi bi-key-fill"
      placeholder="Password"
      name="password"
      :required="true"
      @model="model"
    />
    <Transition name="bounce">
      <UAlert
        v-if="formData.error"
        icon="i-heroicons-exclamation-triangle"
        color="red"
        variant="soft"
        title="Error"
        description="Шумо номи корбар ё пароли худро нодуруст ворид кардед!"
      />
    </Transition>

    <UButton
      :loading="isLoading"
      type="submit"
      icon="bi bi-box-arrow-in-right"
      color="primary"
      class="self-start"
      variant="outline"
      >Sigin</UButton
    >
  </form>
</template>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
