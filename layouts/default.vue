<script setup></script>
<template>
  <div class="flex flex-col h-full">
    <header>
      <HeaderTitle />
      <HeaderMain />
      <HeaderNavbar />
    </header>
    <main class="flex-auto">
      <div class="bg-gray-100">
        <div class="flex items-start relative">
          <div class="flex-[10%] py-2 px-3 sticky top-0 left-0">
            <input type="date" class="form-control" />
          </div>
          <div class="container m-auto flex-auto bg-white">
            <slot />
          </div>
          <div class="flex-[10%] sticky top-0 left-0">
            <MainFriendLogos />
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-mainColor py-12">
      <Footer />
    </footer>
  </div>
</template>
