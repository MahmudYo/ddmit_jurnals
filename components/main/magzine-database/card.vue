<template>
    <div class="magzine-database__card shadow">
        <div class="magzine-database__card-img">
            <img src="@/assets/main/magzine-database/book_1.jpg" alt="...">
        </div>
        <div class="magzine-database__card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quae.
        </div>
        <div class="magzine-database__card-btn">
            <button>Гузарондан</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.magzine-database__card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 25px;
}

.magzine-database__card-img {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
}

.magzine-database__card-img img {
    object-fit: cover;
    max-width: 60%;
}


.magzine-database__card-text {
    flex: 1 1 30%;
}

.magzine-database__card-btn {
    flex: 1 1 30%;
}

.magzine-database__card-btn button {
    background: #0A64A4;
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    transition: 0.3s ease;
}

.magzine-database__card-btn button:hover {
    background: #03406A;
}
</style>