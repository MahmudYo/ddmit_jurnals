<script setup></script>

<template>
  <nav>
    <div class="container m-auto">
      <div class="flex items-center max-md:flex-col gap-3 justify-between">
        <div class="">
          <a href="http://tgfeu.tj/tj/">
            <img
              class="w-[200px] h-[50px]"
              src="@/assets/header/title/logo-2.png"
              alt=""
            />
          </a>
        </div>
        <div class="flex gap-3 items-center">
          <HeaderSearch />
          <!-- <select class="form-select flex-[30%] text-uppercase" name="" id="">
            <option value="tj">tj</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select> -->
        </div>
      </div>
    </div>
  </nav>
</template>

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

ul > li {
  display: flex;
  align-items: center;
}
</style>
