<script setup>
import {
  editingPesonseStore,
  editingCategoryStore,
} from "~/store/EditingPerson";
import { useJurnalStore } from "~/store/Jurnal";
const jurnal = useJurnalStore();
const persone = editingPesonseStore();
const route = useRoute();
const category = editingCategoryStore();
const sendFormData = (answer) => {
  if (jurnal.formType === "store") {
    persone.store();
  } else if (jurnal.formType === "update") {
    persone.update(persone.formData.selectData);
  } else {
    persone.remove(persone.formData.selectData, answer);
  }
};
const model = (value, name) => {
  persone.formData.categoryId = route.params.id;
  if (name === "full_name") {
    persone.formData.fullName = value;
  } else if (name === "description") {
    persone.formData.description = value;
  } else if (name === "role") {
    if (value === "rector") {
      category.rector = true;
    }
    persone.formData.role = value;
  } else {
    persone.formData.image = value;
  }
};
const selectOptions = [
  { name: "rector", value: "Сармуҳаррир", disabled: Boolean(category.rector) },
  { name: "teacher", value: "Муҳарир" },
];
</script>

<template>
  <div>
    <form v-if="jurnal.formType !== 'remove'" @submit.prevent="sendFormData">
      <UiInputsMain
        placeholder="Мисолов А.М"
        icon="bi bi-file-earmark-person"
        type="text"
        title="ФИО"
        name="full_name"
        @model="model"
        :required="true"
        :value="persone.formData.fullName"
      />
      <UiInputsMain
        placeholder="Cармуҳаррир, номзади илмҳои иқтисодӣ, дотсент, ректори Донишгоҳи давлатии молия ва иқтисоди Тоҷикистон"
        icon="bi bi-card-text"
        type="textarea"
        title="Тавсиф"
        name="description"
        @model="model"
        :required="true"
        :value="persone.formData.description"
      />
      <UiInputsSelect
        name="role"
        @VSelect="model"
        :options="selectOptions"
        placeholder="Роли шахсро интихоб намоед"
        title="Role"
        :required="true"
        :selectData="persone.formData.role"
      />
      <UiInputsMain
        icon="bi bi-card-image"
        type="file"
        title="Суратро интихоб кунед (зарур нест)"
        name="iamge"
        @Vchange="model"
        accept="image/*"
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
