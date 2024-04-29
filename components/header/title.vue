<template>
    <nav>
        <div class="container">
            <ul>
                <li>
                    <a href="">
                        <img src="@/assets/logo.png" alt="">
                        ДОНИШГОҲИ ДАВЛАТИИ
                        МОЛИЯ ВА ИҚТИСОД
                    </a>
                </li>
                <li>
                    <select class="form-select text-uppercase" name="" id="">
                        <option value="">tj</option>
                        <option value="">ru</option>
                        <option value="">en</option>
                    </select>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script setup>

</script>

<style scoped>

nav {
    background: #0A64A4;
    padding: 10px 0;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul li a img {
    width: 60px;
    height: 50px;
    margin: 0 15px 0 0;
    text-transform: uppercase;
}

ul>li {
    display: flex;
    align-items: center;
}

ul li a {
    color: #fff;
}
</style>