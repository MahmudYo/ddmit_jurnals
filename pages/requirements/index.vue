<script setup>
import { requirementStore } from "~/store/Requirement";
const requirement = requirementStore();
useHead({
  title: "Талабот",
});
definePageMeta({
  middleware: "has-user",
});
onMounted(() => {
  requirement.index();
});
</script>

<template>
  <div class="p-5">
    <div v-for="item in requirement.requirements">
      <div v-html="item.html_content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
