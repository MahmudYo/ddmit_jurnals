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
    <footer class="bg-green-800 py-12">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
