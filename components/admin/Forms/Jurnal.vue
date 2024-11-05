<script setup>
import { useJurnalStore } from "~/store/Jurnal";
const jurnal = useJurnalStore();
const sendFormData = (answer) => {
  if (jurnal.formType === "store") {
    jurnal.store();
  } else if (jurnal.formType === "update") {
    jurnal.update(jurnal.formData.selectData);
  } else {
    jurnal.remove(jurnal.formData.selectData, answer);
  }
};
const model = (value, name) => {
  if (name === "jurnal") {
    jurnal.formData.jurnal = value;
    console.log(value);
    
  } else if (name === "image") {
    jurnal.formData.image = value;
  } else if (name === "title") {
    jurnal.formData.title = value;
  } else {
    jurnal.formData.year = Number(value);
  }
};
</script>

<template>
  <div>
    <form v-if="jurnal.formType !== 'remove'" @submit.prevent="sendFormData">
      <UiInputsMain
        type="file"
        title="Китоб (.pdf)"
        icon="bi bi-journal-album"
        name="jurnal"
        accept=".pdf, .epub, .mobi, .docx"
        @Vchange="model"
      />
      <UiInputsMain
        accept="image/*"
        type="file"
        icon="bi bi-journal"
        title="Муковаи китоб (.jpg) 175x260px"
        name="image"
        @Vchange="model"
      />
      <UiInputsMain
        type="text"
        icon="bi bi-vector-pen"
        title="Тавсифи"
        placeholder="Паёми молия ва иқтисод"
        name="title"
        @model="model"
        :required="true"
        :value="jurnal.formData.title"
      />
      <UiInputsMain
        placeholder="2024"
        icon="bi bi-calendar-date"
        type="number"
        title="Санаи чоп"
        name="year"
        @model="model"
        :required="true"
        :min="1901"
        :max="2155"
        :value="jurnal.formData.year"
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
