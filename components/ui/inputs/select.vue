<script setup>
const emit = defineEmits();
const select = ref("");
const props = defineProps({
  title: String,
  selectData: String,
  name: String,
  placeholder: String,
  options: {
    type: Array,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  isDisebled: {
    type: Boolean,
    default: false,
  },
});
select.value = props.selectData;
const cahnge = (e) => {
  select.value = e.target.value;
  emit("VSelect", select.value, e.target.name);
};
</script>

<template>
  <div class="my-3">
    <h6>{{ title }}</h6>
    <!--  dark:bg-green-400 dark:hover:bg-green-500 -->
    <div class="relative">
      <select
        @change="cahnge"
        :class="
          select
            ? 'dark:bg-green-400 dark:hover:bg-green-500'
            : 'dark:bg-red-400 dark:hover:bg-red-500'
        "
        class="w-full appearance-none px-7 py-1 border-none outline-none transition forced-colors:appearance-auto border row-start-1 col-start-1 rounded bg-slate-50 dark:border-slate-600 text-slate-700 dark:text-white"
        :name="name"
      >
        <option selected disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :disabled="option.disabled"
          :selected="option.name === select"
          :value="option.name"
        >
          {{ option.value }}
        </option>
      </select>
      <i
        class="bi bi-filter-right absolute text-2xl font-bold text-white top-0 right-3"
      ></i>
    </div>
  </div>
</template>
