<script setup>
const links = ref([
  {
    link: "/admin/jurnal",
    label: "Маҷаллахо",
    icon: "bi bi-journal-bookmark",
  },
  {
    link: "/admin/people",
    label: "Ҳайати таҳририя",
    icon: "bi bi-card-checklist",
  },
]);
</script>
<template>
  <div class="flex justify-between  flex-col">
    <div>
      <NuxtLink to="/admin">
        <h2 class="text-mainColor text-center mb-3">Admin</h2>
      </NuxtLink>
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
<!-- <template #leading>
            <UAvatar
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              size="2xs"
            />
          </template> -->
