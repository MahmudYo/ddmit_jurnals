<script setup>
import axios from "axios";
import { useUserStore } from "~/store/User";
const stateUser = useUserStore();
const router = useRouter();
const config = useRuntimeConfig();
const isLoading = ref(false);
const isForget = ref(false);
const forgetUser = ref(null);
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
const sendUserData = async () => {
  isLoading.value = true;
  await $fetch(`${config.public.apiUrl}/auth/login`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => {
      stateUser.token = res.access_token;
      $fetch(`${config.public.apiUrl}/auth/me`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${res.access_token}`,
        },
      })
        .then((response) => {
          stateUser.user = response;
        })
        .catch((err) => {
          formData.error = err;
        })
        .finally(() => {
          if (stateUser.user.role === "admin") {
            router.push("/admin");
          }
        });
      document.cookie = `token=${res.access_token};max-ag=${res.expires_in}`;
    })
    .catch((err) => {
      formData.error = err;
    })
    .finally(() => {
      isLoading.value = false;
    });
};
const restPsssword = async () => {
  if (formData.username) {
    isLoading.value = true;
    axios
      .post(`${config.public.apiUrl}/users/find/${formData.username}`)
      .then((res) => {
        if (Object.keys(res.data).length) {
          forgetUser.value = res.data;
        }
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  }
};
</script>

<template>
  <div>
    <button @click="() => (stateUser.admin = null)" class="text-end w-full">
      <i class="bi bi-x-circle-fill text-red"></i>
    </button>
    <h2 class="text-center text-4xl mb-3 font-bold">Welcome</h2>
    <form
      @submit.prevent="sendUserData"
      v-if="!isForget"
      class="w-full flex flex-col gap-2"
    >
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
        class="self-start mt-2"
        variant="outline"
        >Sigin
      </UButton>
    </form>
    <div v-if="!isForget" class="flex justify-end">
      <UButton
        @click.prevent="isForget = true"
        :loading="isLoading"
        type="submit"
        icon="bi bi-key"
        color="red"
        variant="outline"
        >Forget
      </UButton>
    </div>
    <div v-else-if="isForget && !forgetUser">
      <form @submit.prevent="restPsssword">
        <UiInputsMain
          type="text"
          icon="bi bi-person"
          placeholder="Username"
          name="username"
          :required="true"
          @model="model"
        />
        <UButton
          :loading="isLoading"
          type="submit"
          icon="bi bi-key"
          color="red"
          class="self-start mt-2"
          variant="outline"
          >Reset the password
        </UButton>
      </form>
      <UButton
        v-if="isForget"
        :loading="isLoading"
        @click="isForget = false"
        type="submit"
        icon="bi bi-box-arrow-in-right"
        color="primary"
        class="self-start mt-2"
        variant="outline"
        >Sigin
      </UButton>
    </div>

    <AdminFormForget v-if="forgetUser" :user="forgetUser" />
  </div>
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
