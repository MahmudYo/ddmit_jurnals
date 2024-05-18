<script setup></script>
<template>
  <div v-if="!$route.path.startsWith('/admin')" class="flex flex-col h-full">
    <header>
      <HeaderTitle />
      <HeaderMain />
      <HeaderNavbar />
    </header>
    <main class="flex-auto">
      <div class="bg-gray-100">
        <div class="flex items-start relative">
          <div class="flex-[10%] py-2 px-3 sticky top-0 left-0">
            <input
              v-if="$route.path === `/`"
              type="date"
              class="form-control"
            />
          </div>
          <div class="container bg-white">
            <NuxtPage />
          </div>
          <div class="flex-[10%] py-2 sticky top-0 left-0">
            <MainFriendLogos />
          </div>
        </div>
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
