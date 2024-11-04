<script setup>
import { useLangStore } from "~/store/Lang";

const lang = useLangStore();
onMounted(() => {
  lang.onSelect();
});
</script>

<template>
  <nav>
    <div class="container m-auto">
      <div
        class="flex items-center max-md:items-stretch max-md:px-5 max-md:flex-col gap-20 max-md:gap-3"
      >
        <div class="">
          <a href="http://tgfeu.tj/tj/">
            <img
              class="w-[200px] h-[50px] m-auto"
              src="@/assets/header/title/logo-2.png"
              alt=""
            />
          </a>
        </div>
        <div class="flex-auto">
          <div class="flex gap-20 max-md:gap-5">
            <HeaderSearch class="flex-auto" />
            <USelectMenu
              size="lg"
              v-model="lang.selected"
              :options="lang.variants"
            >
              <template #leading>
                <UIcon
                  v-if="lang.selected?.icon"
                  :name="lang.selected?.icon"
                  class="w-5 h-5"
                />
                <UAvatar
                  v-else-if="lang.selected?.avatar"
                  v-bind="lang.selected?.avatar"
                  size="2xs"
                />
              </template>
            </USelectMenu>
          </div>
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
