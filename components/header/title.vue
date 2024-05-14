<template>
  <nav>
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="">
          <a href="http://tgfeu.tj/tj/">
            <img
              class="w-[200px] h-[50px]"
              src="@/assets/header/title/logo-2.png"
              alt=""
            />
          </a>
        </div>
        <div class="flex gap-5">
          <UInput
            color="primary"
            variant="outline"
            class="bg-white rounded-lg"
            placeholder="ҷустуҷӯ..."
          />
          <select class="form-select text-uppercase" name="" id="">
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

ul > li {
  display: flex;
  align-items: center;
}

ul li a {
  color: #fff;
}
</style>
