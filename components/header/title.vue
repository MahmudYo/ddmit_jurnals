<template>
  <nav>
    <div class="container">
      <div class="flex items-center gap-3 justify-between">
        <div class="">
          <a href="http://tgfeu.tj/tj/">
            <img class="w-[200px] h-[50px]" src="@/assets/header/title/logo-2.png" alt="" />
          </a>
        </div>
        <div class="flex gap-3 items-center">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <i class="bi bi-search font-bold text-mainColor"></i>
            </span>
            <input
              class="placeholder:italic   placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Ҷустуҷӯ..." type="text" name="search" />
          </label>
          <select class="form-select flex-[30%] text-uppercase" name="" id="">
            <option value="">tj</option>
            <option value="">ru</option>
            <option value="">en</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

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

ul>li {
  display: flex;
  align-items: center;
}
</style>
