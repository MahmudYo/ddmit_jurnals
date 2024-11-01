<script setup>
import { editingPesonseStore } from "~/store/EditingPerson";
import { useJurnalStore } from "~/store/Jurnal";
const persone = editingPesonseStore();
const jurnal = useJurnalStore();
const route = useRoute();
definePageMeta({
  middleware: "auth",
});
onMounted(() => {
  persone.index(route.params.id);
});
const columns = [
  {
    key: "id",
    label: "Id",
    sortable: true,
  },
  {
    key: "full_name",
    label: "Full Name",
    sortable: true,
  },
  {
    key: "description",
    label: "Description",
  },
  {
    key: "role",
    label: "Role",
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
  persone.formData = {};
  console.log(formType);
  jurnal.formType = formType;
  console.log(row);
  if (row !== undefined) {
    persone.formData.selectData = row;
    persone.formData.fullName = row.full_name;
    persone.formData.description = row.description;
    persone.formData.role = row.role;
    persone.formData.categoryId = row.category_id;
  }
};
</script>

<template>
  <NuxtLayout name="admin">
    <AdminATable
      :rows="persone.persone"
      @showFormAction="showFormAction"
      :columns="columns"
      :isWatch="{
        view: false,
      }"
    >
      <template #form>
        <AdminFormsEditingPersonPersone />
      </template>
    </AdminATable>
  </NuxtLayout>
</template>
