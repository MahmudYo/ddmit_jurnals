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
    class="flex flex-col relative min-h-full"
  >
    <header>
      <HeaderTitle />
      <HeaderMain />
      <HeaderNavbar />
    </header>
    <main class="flex-auto">
      <div class="bg-gray-100">
        <div class="flex top-0 left-0">
          <div
            class="flex-[10%] py-2 flex flex-col items-center gap-5 px-3 sticky top-0 left-0"
          >
            <input
              v-if="$route.path === `/`"
              type="date"
              class="form-control"
              @change="jurnal.filterYear($event.target.value)"
            />
            <Transition>
              <UiLoading v-if="jurnal.isLoading" />
            </Transition>
          </div>

          <div class="container bg-white">
            <NuxtPage />
          </div>
          <div class="flex-[10%] py-2 sticky top-0 left-0">
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
      </div>
    </main>
    <footer class="bg-mainColor py-12">
      <Footer />
    </footer>
  </div>
  <div v-else>
    <NuxtPage />
  </div>
</template>
