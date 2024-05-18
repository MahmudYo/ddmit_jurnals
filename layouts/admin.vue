<script setup>
import { useUserStore } from "~/store/User";
const userState = useUserStore();
const router = useRouter();
defineNuxtRouteMiddleware((to, from) => {
  if (userState.authUser.role !== "admin") {
    router.push("/admin");
  }
});
useHead({
  title: "ADMIN",
});
</script>
<template>
  <div
    class="w-full bg-mainColor bg-opacity-90 py-5 h-full fixed top-0 left-0 z-40"
  >
    <div class="container m-auto h-full">
      <Transition>
        <div
          v-if="userState.authUser.role === 'admin'"
          class="flex items-start gap-4 bg-black text-white py-3 rounded px-4 h-full"
        >
          <AdminDashboard class="flex-[25%] h-full border-r-mainColor" />
          <!-- 
      Если админ не авторизован то надо показать форму
        -->

          <div class="flex-[75%] h-full overflow-auto">
            <slot />
          </div>
        </div>
        <div
          v-else
          class="flex items-center justify-center py-6 px-3 rounded w-1/3 m-auto bg-white"
        >
          <AdminFormSigIn />
        </div>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
