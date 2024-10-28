<script setup>
import { useJurnalStore } from "~/store/Jurnal";
import { useResizeStore } from "~/store/Resize";
import { useUserStore } from "~/store/User";
const jurnal = useJurnalStore();
const user = useUserStore();
const resize = useResizeStore();
onMounted(() => {
  jurnal.isLoading = false;
  resize.getResize();
});
onUnmounted(() => {
  window.removeEventListener("resize");
});
</script>
<template>
  <div
    v-if="!$route.path.startsWith('/admin')"
    class="flex flex-col min-h-full"
  >
    <header>
      <HeaderTitle />
      <HeaderMain />
      <HeaderNavbar />
    </header>
    <main class="bg-gray-100 flex-auto text-black">
      <div class="flex justify-center w-full">
        <div
          v-if="resize.resize.width > 992"
          class="flex-[15%] h-full py-2 flex flex-col items-center gap-5 px-3 sticky top-0 left-0"
        >
          <div>
            <UiJurnalWrning />
            <div
              v-if="resize.resize.width < 992"
              class="flex-[15%] py-2 h-full sticky top-0 left-0"
            >
              <MainFriendLogos />
            </div>
          </div>
        </div>

        <div class="container relative bg-white mb-5">
          <div class="absolute w-full h-full flex justify-center items-center">
            <Transition>
              <UiLoading
                v-if="jurnal.isLoading && $route.path !== '/contact'"
              />
            </Transition>
          </div>
          <div class="relative z-50 p-5 min-h-screen">
            <NuxtPage />
          </div>
        </div>
        <div
          v-if="resize.resize.width > 992"
          class="flex-[15%] py-2 h-full sticky top-0 left-0"
        >
          <MainFriendLogos />
        </div>
      </div>
      <Transition>
        <div
          v-if="user.admin === 'admin'"
          class="fixed flex items-center z-50 top-0 left-0 bg-white w-screen h-screen"
        >
          <div class="container m-auto">
            <AdminFormSigIn />
          </div>
        </div>
      </Transition>
    </main>
    <footer class="bg-mainColor py-12">
      <Footer />
    </footer>
  </div>
  <div v-else>
    <NuxtPage />
  </div>
</template>
<style scoped>
.jurnal__warning {
  height: calc(650px + 100 * (100vw / 1336));
}
</style>
