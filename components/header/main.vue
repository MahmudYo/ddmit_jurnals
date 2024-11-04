<template>
  <div class="header__main">
    <div class="container m-auto px-4">
      <div class="header__main-content">
        <div class="header__main-title">
          <h1
            class="flex font-[Roboto] flex-col items-start text-4xl max-md:text-2xl max-sm:text-xl text-mainColor uppercase font-bold"
          >
            <template v-for="(text, i) in texts">
              <span
                :class="
                  i != 0
                    ? 'text-sm max-sm:text-xs font-[Roboto] text-teal-800 leading-6 uppercase'
                    : ``
                "
              >
                {{ text.label }}
              </span>
            </template>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const texts = reactive([
  {
    id: "tj",
    label: "Паёми молия ва иқтисод",
  },
  {
    id: "ru",
    label: "ФИНАНСОВО ЭКОНОМИЧЕСКИЙ ВЕСТНИК",
  },
  {
    id: "en",
    label: "THE FINANCE AND ECONOMIC BULLETIN",
  },
]);
onMounted(() => {
  texts.value = sortedLang(texts);
});
</script>

<style scoped>
.header__main {
  background: url("@/assets/header/main_poster.png") no-repeat center/cover;
  height: calc(100px + 50 * (100vw / 1336));
}

.header__main-title {
  padding: 2rem 0 0 0;
}
</style>
