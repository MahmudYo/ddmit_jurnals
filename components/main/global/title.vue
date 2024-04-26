<template>
    <div class="shadow-sm py-4">
        <div class="container">
            <h2>{{ title }}</h2>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
})
</script>

<style scoped></style>