<script setup>
import { useJurnalStore } from "~/store/Jurnal";
const config = useRuntimeConfig();

definePageMeta({
  middleware: "auth",
});
const jurnal = useJurnalStore();
const columns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "jurnal",
    label: "Jurnal",
  },
  {
    key: "year",
    label: "Year",
  },
  {
    key: "image",
    label: "Image",
  },
  {
    key: "actions",
  },
];

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => showFormAction("update"),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];
const showFormAction = (formType) => {
  jurnal.formType = formType;
  jurnal.isOpenModal = true;
};
onMounted(() => {
  jurnal.Index();
});
</script>
<template>
  <NuxtLayout name="admin">
    <div>
      <UModal v-model="jurnal.isOpenModal">
        <div class="p-4">
          <AdminFormsJurnal />
        </div>
      </UModal>
    </div>
    <UButton
      @click="showFormAction('store')"
      icon="i-heroicons-plus"
      color="primary"
      variant="ghost"
    />
    <TransitionGroup name="list">
      <UTable :rows="jurnal.jurnals" :columns="columns">
        <template #name-data="{ row }">
          <span>{{ row.name }}</span>
        </template>
        <template #actions-data="{ row }">
          <UButton
            color="primary"
            variant="ghost"
            icon="i-heroicons-eye"
            :to="`${config.public.apiUrl}/jurnals/document/${row.id}/${row.jurnal}`"
          />
          <UDropdown :ui="{ background: 'bg-black' }" :items="items(row)">
            <UButton
              color="green"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
              target="_blank"
            />
          </UDropdown>
        </template>
      </UTable>
    </TransitionGroup>
  </NuxtLayout>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
