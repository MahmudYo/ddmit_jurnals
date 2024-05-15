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
      <slot />
    </main>
    <footer class="bg-mainColor py-12">
      <Footer />
    </footer>
  </div>
</template>
