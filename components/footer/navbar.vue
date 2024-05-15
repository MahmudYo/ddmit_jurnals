<template>
    <nav class="flex justify-center md:order-2 mb-3">
        <nuxt-link to="/" class="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium">Махзани
            маҷалла</nuxt-link>
        <nuxt-link to="/editorial_board" class="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium">Ҳайати
            таҳририя</nuxt-link>
        <nuxt-link to="/requirements"
            class="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium">Талабот</nuxt-link>
        <nuxt-link to="/contact" class="text-gray-400 hover:text-white px-3 py-2 text-sm font-medium">Тамос</nuxt-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active {
    color: #fff;
}
</style>