<script setup>
import { useUserStore } from "~/store/User";
const userState = useUserStore();

useHead({
  title: "ADMIN",
});

</script>
<template>
  <div
    class="w-screen bg-mainColor bg-opacity-90 h-screen fixed top-0 left-0 z-40"
  >
    <div
      class="flex items-start gap-4 bg-black text-white py-3 rounded px-4 h-full"
    >
      <AdminDashboard class="flex-[20%] h-full" />
      <!-- 
      Если админ не авторизован то надо показать форму
        -->

      <div class="flex-[80%] max-sm:flex-auto h-full overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
