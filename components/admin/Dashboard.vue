<script setup>
const links = ref([
  {
    link: "/admin/jurnal",
    label: "Маҷаллахо",
    icon: "bi bi-journal-bookmark",
  },
  {
    link: "/admin/editing_person",
    label: "Ҳайати таҳририя",
    icon: "bi bi-card-checklist",
  },
]);
const burgerHide = ref(100);
</script>
<template>
  <div
    :class="
      Boolean(burgerHide)
        ? `max-md:translate-x-[${burgerHide}%]`
        : `max-md:translate-x-[-100%]`
    "
    class="flex relative justify-between transition bg-black max-md:w-1/2 max-sm:w-[80%] max-md:h-screen max-md:fixed max-md:p-5 top-0 left-0 z-50 flex-col"
  >
    <div>
      <div class="flex justify-center items-center">
        <NuxtLink to="/admin">
          <h2 class="text-mainColor mb-3">Admin</h2>
        </NuxtLink>
        <button
          @click="Boolean(burgerHide) ? (burgerHide = 0) : (burgerHide = 100)"
          class="max-md:absolute top-[7%] right-[-20%] hidden max-md:block"
        >
          burger
        </button>
      </div>

      <ul class="flex flex-col">
        <li class="mb-3" v-for="item in links">
          <UButton
            block
            :icon="item.icon"
            size="xl"
            :label="item.label"
            variant="outline"
            :to="item.link"
            color="green"
            activeClass="active"
          >
          </UButton>
        </li>
      </ul>
    </div>

    <UButton
      icon="bi bi-door-open-fill"
      size="xl"
      label="Баромадан"
      variant="outline"
      to="/"
      color="violet"
    >
    </UButton>
  </div>
</template>
<style scoped>
.active {
  font-weight: bold;
  box-shadow: 0px 0px 7px #00a67c;
}
</style>