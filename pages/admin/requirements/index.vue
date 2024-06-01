<script setup>
import { requirementStore } from "@/store/Requirement";
import { useJurnalStore } from "~/store/Jurnal";
const requirement = requirementStore();
const jurnal = useJurnalStore();
const showFormAction = () => {
  if (requirement.requirements.length) {
    requirement.update();
  } else {
    requirement.store();
  }
};
onMounted(() => {
  requirement.index();
});
</script>

<template>
  <NuxtLayout name="admin">
    <UButton
      icon="i-heroicons-pencil-square"
      size="sm"
      class="mb-3"
      color="indigo"
      variant="solid"
      label="Гузоштан"
      :trailing="false"
      :loading="jurnal.isLoading"
      @click="showFormAction"
    />
    <AdminTinyMCE v-model="requirement.formData.content" />
  </NuxtLayout>
</template>

<style scuped></style>
