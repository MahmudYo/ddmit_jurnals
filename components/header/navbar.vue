<template>
    <nav>
        <div class="container">
            <ul class="nav-list">
                <li>
                    <router-link to="/">Асосӣ</router-link>
                </li>
                <li>
                    <router-link to="/magzine_database">Махзани маҷалла</router-link>
                </li>
                <li>
                    <router-link to="/mechaniz_jurnale">Тартиби баррасӣ</router-link>
                </li>
                <li>
                    <router-link to="/rights">Ҳуқуқҳои муалиф</router-link>
                </li>
                <li>
                    <router-link to="/magazine">Маҷалла</router-link>
                </li>
                <li>
                    <router-link to="/contact">Тамос</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>

a {
    color: #fff;
    padding: 10px 20px;
}

nav {
    background: #0A64A4;
}

.nav-list {
    display: flex;
    align-items: center;
}

.nav-list li>a {
    display: inline-block;
    font-size: 20px;
    transition: 0.3s ease;
}

.nav-list li>a:hover {
    background: #03406A;
}

.router-link-active {
    background: #03406A;
}
</style>