<template>
    <nav>
        <div class="container">
            <button @click="toggleNavbar" class="btn btn-nav btn-success">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul ref="nav_list" class="nav-list">
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
const nav_list = ref(null);
const toggleNavbar = () => {
    nav_list.value.classList.toggle('active')
}
</script>

<style scoped>
a {
    color: #fff;
    padding: 10px 20px;
}

nav {
    background: #00c322;
    background: linear-gradient(200deg, rgba(0, 195, 34, 1) 0%, rgba(10, 100, 164, 1) 100%);
}

.nav-list.active {
    display: block;
    margin-top: 10px;
}

.nav-list.active li a {
    display: block;
}

.nav-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    transition: .5s ease all;
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

.btn-nav {
    width: 45px;
    height: 45px;
    display: none;
}

.btn-nav span {
    display: block;
    background: #fff;
    width: 100%;
    height: 1px;
}

@media (max-width: 992px) {
    nav {
        padding: 10px 0;
    }

    .nav-list {
        display: none;
    }

    .btn-nav {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
</style>