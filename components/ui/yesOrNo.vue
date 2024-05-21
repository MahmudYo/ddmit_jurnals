<script setup>
import { useJurnalStore } from "~/store/Jurnal";
const jurnal = useJurnalStore();
</script>

<template>
  <div class="my-5">
    <div class="text-center mb-3">
      <h4>Амалҳои худро тасдиқ кунед</h4>
    </div>
    <div class="flex justify-center gap-5">
      <UButton
        @click="$emit('yesOrNo', true)"
        color="red"
        icon="bi bi-exclamation-triangle-fill"
        variant="soft"
        :loading="jurnal.isLoading"
        >Ха
      </UButton>
      <UButton
        @click="$emit('yesOrNo', false)"
        color="green"
        icon="bi bi-sign-no-left-turn-fill"
        variant="solid"
        >Не
      </UButton>
    </div>
  </div>
</template>
