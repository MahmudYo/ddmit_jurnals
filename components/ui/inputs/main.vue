<script setup>
const input = ref(null);
const iconInputPssword = ref("bi bi-eye-fill");
defineProps({
  placeholder: String,
  icon: String,
  type: String,
  name: String,
  required: {
    type: Boolean,
    default: false,
  },
  value: String,
  title: String,
  accept: String,
  min: Number,
  max: Number,
});
const isShowPassword = () => {
  if (input.value.type === "password") {
    iconInputPssword.value = "bi bi-eye-slash-fill";
    input.value.type = "text";
  } else {
    iconInputPssword.value = "bi bi-eye-fill";
    input.value.type = "password";
  }
};
</script>

<template>
  <h6 v-if="title" class="my-3">{{ title }}</h6>
  <lable class="relative block">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <i :class="`${icon} text-mainColor`"></i>
    </span>
    <span
      v-if="type === 'password'"
      class="absolute inset-y-0 left-[92%] flex items-center pl-2"
    >
      <i
        @click="isShowPassword"
        :class="`${iconInputPssword} text-mainColor cursor-pointer transition hover:text-opacity-40`"
      ></i>
    </span>
    <input
      ref="input"
      :required="required"
      class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :value="value"
      :accept="accept"
      @input="$emit('model', $event.target.value, name)"
      @change="$emit('Vchange', $event.target.files[0], name)"
      :min="min"
      :max="max"
    />
  </lable>
</template>
