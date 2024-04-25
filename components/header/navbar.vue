<template>
    <nav>
        <div class="container">
            <ul class="nav-list">
                <li><a href="">Асосӣ</a></li>
                <li><a href="">Махзани маҷалла</a></li>
                <li><a href="">Тартиби баррасӣ</a></li>
                <li><a href="">Ҳуқуқҳои муалиф</a></li>
                <li><a href="">Маҷалла</a></li>
                <li><a href="">Тамос</a></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
ul,
li {
    padding: 0;
    margin: 0;
    list-style: none;
}

a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
}

nav {
    background: #0A64A4;
}

.nav-list {
    display: flex;
    align-items: center;
    gap: 10px;
}

.nav-list li>a {
    display: inline-block;
    font-size: 20px;
    transition: 0.3s ease;
}

.nav-list li>a:hover {
    background: #03406A;
}
</style>