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
    background: rgb(0,195,34);
background: linear-gradient(200deg, rgba(0,195,34,1) 0%, rgba(10,100,164,1) 100%);
    /* background: rgb(0, 127, 22);
    background: radial-gradient(circle, rgba(0, 127, 22, 1) 25%, rgba(10, 100, 164, 1) 100%); */
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