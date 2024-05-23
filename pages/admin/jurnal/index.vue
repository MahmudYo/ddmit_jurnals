<script setup>
import { useJurnalStore } from "~/store/Jurnal";
definePageMeta({
  middleware: "auth",
});
const jurnal = useJurnalStore();
const columns = [
  {
    key: "id",
    label: "Id",
    sortable: true,
  },
  {
    key: "title",
    label: "Title",
    sortable: true,
  },
  {
    key: "jurnal",
    label: "Jurnal",
  },
  {
    key: "year",
    label: "Year",
    sortable: true,
  },
  {
    key: "image",
    label: "Image",
  },
  {
    key: "actions",
  },
];
const showFormAction = (formType, row) => {
  jurnal.formData = {};
  jurnal.formType = formType;
  if (row !== undefined) {
    jurnal.formData.selectData = row;
    jurnal.formData.title = row.title;
    jurnal.formData.year = row.year;
  }
};
onMounted(() => {
  jurnal.Index();
});
</script>
<template>
  <NuxtLayout name="admin">
    <AdminATable
      :isPaginate="true"
      :rows="jurnal.jurnals"
      @showFormAction="showFormAction"
      :columns="columns"
      :isWatch="{
        view: true,
        prefix: 'jurnals/document',
        icon: 'i-heroicons-eye',
        isApi: true,
      }"
    >
      <template #form><AdminFormsJurnal /></template>
    </AdminATable>
  </NuxtLayout>
</template>
