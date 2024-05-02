<template>
    <div class="magzine-database__card">
        <div class="magzine-database__card-img">
            <img src="@/assets/main/magzine-database/book_1.jpg" alt="...">
            <div class="card-img__buttons">
                <button class="btn btn-primary"><i class="bi bi-download"></i></button>
                <button class="btn btn-success"><i class="bi bi-book"></i></button>
            </div>
        </div>
        <div class="magzine-database__card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, quae.
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
    padding: 30px 25px;
    width: 70%;
    margin: 0 auto;
    transition: 0.3s ease;
}

.magzine-database__card:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: scale(1.1);
}

.magzine-database__card-img {
    flex: 1 1 40%;
    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: center;
    background: #000;
    position: relative;
}

.card-img__buttons {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #0000005e;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease;
}

.magzine-database__card-img:hover .card-img__buttons {
    visibility: visible;
    opacity: 1;
}

.magzine-database__card-img img {
    object-fit: cover;
    width: 100%;
}


.magzine-database__card-text {
    flex: 1 1 30%;
    text-align: center;
}
</style>