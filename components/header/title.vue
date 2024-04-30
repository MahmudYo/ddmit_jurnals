<template>
    <nav>
        <div class="container">
            <ul>
                <li>
                    <a href="http://tgfeu.tj/tj/">
                        <img src="@/assets/header/title/logo-2.png" alt="">
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
    background: #fff;
    padding: 10px 0;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul li a img {
    width: 200px;
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