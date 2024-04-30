<template>
    <div>
        <MainGlobalTitle :title="'Махзани маҷалла'" />
        <div class="container">
            <div class="magzine-database__cards">
                <MainMagzineDatabaseCard v-for="item in 9" />
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Махзани маҷалла',
})
</script>

<style scoped>
.magzine-database__cards {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    gap: 30px 20px;
    margin: 2rem 0 2rem 0;
}
</style>