<script setup>
import { useJurnalStore } from "~/store/Jurnal";
import { useUserStore } from "~/store/User";
const jurnal = useJurnalStore();
const user = useUserStore();
onMounted(() => {
  jurnal.isLoading = false;
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
    <main class="bg-gray-100 flex-auto">
      <div class="flex">
        <div
          class="flex-[15%] h-full py-2 flex flex-col items-center gap-5 px-3 sticky top-0 left-0"
        >
          <div>
            <UiJurnalWrning />
          </div>
          <!-- <input
              v-if="$route.path === `/`"
              type="date"
              class="form-control"
              @change="jurnal.filterYear($event.target.value)"
            /> -->
        </div>

        <div class="container relative bg-white">
          <div class="absolute w-full h-full flex justify-center items-center">
            <Transition>
              <UiLoading v-if="jurnal.isLoading" />
            </Transition>
          </div>
          <NuxtPage />
        </div>
        <div class="flex-[15%] py-2 h-full sticky top-0 left-0">
          <MainFriendLogos />
        </div>
      </div>
      <Transition>
        <div
          v-if="user.admin === 'admin'"
          class="fixed flex items-center z-20 top-0 left-0 bg-white w-screen h-screen"
        >
          <div class="container">
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
