<script setup>

</script>
<template>
    <div class="flex  items-center justify-center gap-5">
        <a href="https://www.elibrary.ru/title_about_new.asp?id=69851">
            <img class="w-[150px] logo" src="@/assets/main/logo Elibrary.png" alt="logo Elibrary">
        </a>
        <a href="https://elibrary.ru/projects/science_index/science_index_org_info.asp">
            <img class="w-[150px] logo" src="@/assets/main/logo Index.png" alt="logo Index">
        </a>
    </div>
</template>

<style scoped>
.logo {
    transition: all ease 0.4s;
    filter: grayscale(100%);
}

.logo:hover {
    filter: grayscale(0%);
}

@media (max-width: 765px) {
    .logo {
        filter: grayscale(0%);
    }
}
</style>