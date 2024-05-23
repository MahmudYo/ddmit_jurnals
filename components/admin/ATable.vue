<script lang="ts" setup>
import { useJurnalStore } from "~/store/Jurnal";
interface Row {
  [key: string]: any;
}
interface Column {
  key: string;
  sortable?: boolean;
  sort?: (a: any, b: any, direction: "asc" | "desc") => number;
  direction?: "asc" | "desc";
  class?: string;
}

const props = defineProps({
  columns: {
    type: Array as () => Column[],
    required: true,
  },
  rows: {
    type: Array as () => Row[],
    required: true,
  },
  hasItems: {
    type: Boolean,
    defualt: false,
  },
  isWatch: {
    type: Object,
    required: true,
    default: () => ({
      view: false,
      prefix: "",
      icon: "i-heroicons-eye",
      isApi: false,
    }),
  },
  isPaginate: {
    type: Boolean,
    default: false,
  },
});
const config = useRuntimeConfig();
const jurnal = useJurnalStore();
const emit = defineEmits();
const formAction = (formParam: string, row?: any) => {
  jurnal.isOpenModal = true;
  return emit("showFormAction", formParam, row);
};

const items = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => formAction("update", row),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      click: () => formAction("remove", row),
    },
  ],
];
</script>

<template>
  <div>
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
          <slot name="form"></slot>
        </div>
      </UModal>
    </div>
    <UButton
      @click="formAction('store')"
      icon="i-heroicons-plus"
      color="primary"
      variant="ghost"
      block
    />
    <UTable :loading="jurnal.isLoading" :rows="rows" :columns="columns">
      <template #name-data="{ row }">
        <span>{{ row.name }}</span>
      </template>
      <template #actions-data="{ row }">
        <UButton
          v-if="isWatch.view"
          color="primary"
          variant="ghost"
          :icon="isWatch.icon"
          :to="
            isWatch.isApi
              ? `${config.public.apiUrl}/${isWatch.prefix}/${row.id}`
              : `${$route.path}/${row.id}`
          "
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
    <div v-if="isPaginate" class="flex justify-end my-3 mr-5">
      <UiNavPaginate />
    </div>
  </div>
</template>
