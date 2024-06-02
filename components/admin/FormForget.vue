<script setup>
import axios from "axios";
import { useUserStore } from "~/store/User";
const user = useUserStore();
const props = defineProps({
  user: Object,
});

const config = useRuntimeConfig();
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
const setUserData = async () => {4
  await axios
    .post(`${config.public.apiUrl}/users/${props.user.id}`, formData)
    .then((res) => {
      console.log(res);
      user.admin = "";
    })
    .catch((err) => {
      formData.error = err.response.data.message;
    });
};
</script>

<template>
  <form @submit.prevent="setUserData">
    <UiInputsMain
      type="text"
      icon="bi bi-person"
      placeholder="New username"
      name="username"
      :required="true"
      @model="model"
    />
    <UiInputsMain
      type="password"
      icon="bi bi-key-fill"
      placeholder="New password"
      name="password"
      :required="true"
      @model="model"
    />
    <UButton
      type="submit"
      icon="bi bi-arrow-bar-up"
      color="primary"
      class="self-start mt-2"
      variant="outline"
      >Save
    </UButton>
  </form>
  <div class="alert alert-danger" v-if="formData.error"></div>
</template>

<style scuped></style>
