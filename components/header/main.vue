<template>
  <div class="header__main">
    <div class="container">
      <div class="header__main-content">
        <div class="header__main-title">
          <h1
            class="flex flex-col items-start text-4xl max-md:text-2xl max-sm:text-xl text-mainColor uppercase font-bold"
          >
            Паёми молия ва иқтисод
            <span class="text-[15px] text-gray-800 leading-4 uppercase"
              >ФИНАНСОВО-ЭКОНОМИЧЕСКИЙ ВЕСТНИК</span
            >
            <span class="text-[15px] text-gray-800 leading-4 uppercase"
              >THE FINANCE AND ECONOMIC BULLETIN</span
            >
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.header__main {
  background: url("@/assets/header/main_poster.png") no-repeat center/cover;
  height: calc(100px + 50 * (100vw / 1336));
}

.header__main-title {
  padding: 2rem 0 0 0;
}
</style>
