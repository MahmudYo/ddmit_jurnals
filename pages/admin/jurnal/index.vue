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

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => showFormAction("update", row),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => showFormAction("remove", row),
    },
  ],
];
const showFormAction = (formType, row) => {
  jurnal.formData = {};
  jurnal.formType = formType;
  jurnal.isOpenModal = true;
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
    <div>
      <UModal v-model="jurnal.isOpenModal">
        <UButton
          class="hidden max-sm:inline-block max-sm:m-3"
          @click="jurnal.isOpenModal = false"
          color="red"
          variant="ghost"
          >x</UButton
        >
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
      block
    />
    <TransitionGroup name="list">
      <UTable
        :loading="jurnal.isLoading"
        :rows="jurnal.jurnals"
        :columns="columns"
      >
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
      <div class="flex justify-end my-3 mr-5">
        <UiNavPaginate />
      </div>
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
  transform: translateY(100%);
}
</style>
