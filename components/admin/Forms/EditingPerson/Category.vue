<script setup>
import { editingCategoryStore } from "~/store/EditingPerson";
import { useJurnalStore } from "~/store/Jurnal";

const jurnal = useJurnalStore();
const category = editingCategoryStore();
const sendFormData = (answer) => {
  if (jurnal.formType === "store") {
    category.store();
  } else if (jurnal.formType === "update") {
    category.update(category.formData.selectData);
  } else {
    category.remove(category.formData.selectData, answer);
  }
};
const model = (value, name) => {
  category.formData.category = value;
};
</script>

<template>
  <div>
    <form v-if="jurnal.formType !== 'remove'" @submit.prevent="sendFormData">
      <UiInputsMain
        placeholder="Сармуҳаррир"
        icon="bi bi-list-nested"
        type="text"
        title="Номи категория"
        name="category"
        @model="model"
        :required="true"
        :value="category.formData.category"
      />
      <Transition>
        <UiFormLoading v-if="jurnal.progress.loading > 0" />
      </Transition>

      <UButton
        :loading="jurnal.isLoading"
        class="mt-3"
        type="submit"
        icon="bi bi-save"
      >
        Гузоштан
      </UButton>
    </form>
    <UiYesOrNo v-else @yesOrNo="sendFormData" />
  </div>
</template>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
