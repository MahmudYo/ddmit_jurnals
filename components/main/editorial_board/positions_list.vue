<script setup>
defineProps({
  title: String,
  list: Array,
});
</script>

<template>
  <div class="mb-3">
    <div class="text-xl text-green-900 font-bold mb-1">{{ title }}</div>
    <ul>
      <li v-for="item in list" class="mb-1">
        <span class="font-bold">{{ item.person }}</span>
        <span>
          {{ item.personInfo }}
        </span>
      </li>
    </ul>
  </div>
</template>
