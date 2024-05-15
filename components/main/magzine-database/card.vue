<script setup></script>
<template>
  <a class=" text-mainColor font-bold hover:shadow-lg hover:scale-110 pt-3 mx-14 transition " href="#">
    <div class="flex flex-col items-center">
      <div class="w-[175px] relative hover:group-hover:hidden group mb-3">
        <div
          class="absolute top-0 left-0 bg-black transition w-full h-full bg-opacity-50 items-center justify-center gap-1 group-hover:flex hidden">
          <a class="btn btn-primary" href="#"><i class="bi bi-book"></i></a>
          <a class="btn btn-success" href="#"><i class="bi bi-download"></i></a>
        </div>
        <img src="@/assets/main/magzine-database/book_1.jpg" class="w-full h-full" alt="book_1" />
      </div>
      <div>
        <p>Паёми молия ва иқтисод</p>
      </div>
    </div>
  </a>
</template>