<script setup>
useHead({
  title: "Тамос",
});
definePageMeta({
  middleware: "has-user",
});
</script>

<template>
  <div
    class="py-5 flex max-md:flex-wrap max-md:items-center justify-center gap-5"
  >
    <MainContactImageModal />
    <div>
      <ul class="mb-3">
        <li class="text-xl text-mainColor font-bold">
          Худойбердиев Ҷаҳонгир Маҳмуродович
        </li>
        <li class="text-mainColor">Сармутахассиси раёсати илм ва инноватсия</li>
      </ul>
      <ul class="mb-3">
        <li class="mb-2">
          <a
            class="text-mainColor hover:text-green-600 transition"
            href="tel:(+992) 001.99.09.05"
          >
            <i class="bi bi-telephone"></i>
            +(992) 001-99-09-05
          </a>
        </li>
        <li class="mb-2">
          <a
            class="text-mainColor hover:text-green-600 transition"
            href="mailto:payom-ddmit@tgfeu.tj"
          >
            <i class="bi bi-envelope-at"></i>
            payom-ddmit@tgfeu.tj
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
