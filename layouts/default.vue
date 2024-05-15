<script setup>

</script>
<template>
  <div class="flex flex-col h-full">
    <header>
      <HeaderTitle />
      <HeaderMain />
      <HeaderNavbar />
    </header>
    <main class="flex-auto">
      <div class=" bg-gray-100">
        <div class="container m-auto bg-white">
          <slot />
        </div>
      </div>
    </main>
    <footer class="bg-mainColor py-12">
      <Footer />
    </footer>
  </div>
</template>
