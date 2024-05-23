<script setup>
import { useJurnalStore } from "~/store/Jurnal";
import { editingCategoryStore } from "~/store/EditingPerson";
const jurnal = useJurnalStore();
const category = editingCategoryStore();
const columns = [
  {
    key: "id",
    label: "Id",
    sortable: true,
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
  },
  {
    key: "persons.length",
    label: "Persons",
    sortable: true,
  },
  {
    key: "actions",
  },
];
const showFormAction = (formType, row) => {
  category.formData = {};
  console.log(formType);
  jurnal.formType = formType;
  if (row !== undefined) {
    category.formData.selectData = row;
    category.formData.category = row.category;
  }
};
onMounted(() => {
  category.index();
});
</script>

<template>
  <NuxtLayout name="admin">
    <AdminATable
      :rows="category.category"
      @showFormAction="showFormAction"
      :columns="columns"
      :isWatch="{
        view: true,
        isApi: false,
        icon: 'i-heroicons-link',
      }"
    >
      <template #form><AdminFormsEditingPersonCategory /></template>
    </AdminATable>
  </NuxtLayout>
</template>
