<script setup>
useHead(() => ({
  status: 404,
  title: "Page not found",
}));
definePageMeta({
  middleware: "has-user",
});
</script>
<template>
  <main class="flex items-center justify-center h-screen">
    <article class="max-w-md text-center">
      <h1 class="text-5xl font-bold mb-4">Хатои 404</h1>
      <p class="text-gray-500 mb-4">Саҳифа ёфт нашуд</p>
      <NuxtLink
        to="/"
        class="inline-block py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-mainColor hover:bg-activeColor"
      >
        Баргаштан
      </NuxtLink>
    </article>
  </main>
</template>
