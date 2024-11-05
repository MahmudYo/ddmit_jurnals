<script setup>
import { useLangStore } from "~/store/Lang";

const lang = useLangStore();
const logos = reactive([
  {
    id: "tj",
    src: "/img/logos/logo-tj.png",
    alt: "Logo Tajik Variant",
  },
  {
    id: "ru",
    src: "/img/logos/logo-ru.png",
    alt: "Logo Russian Variant",
  },
  {
    id: "en",
    src: "/img/logos/logo-en.png",
    alt: "Logo England Variant",
  },
]);
let selentedLogo = reactive({
  id: "tj",
  src: "/img/logos/logo-tj.png",
  alt: "Logo Tajik Variant",
});
watch(
  () => lang.selected,
  (select) => {
    if (select && select.id) {
      selentedLogo = logos.find((item) => item.id == select.id);
    }
  }
);
</script>

<template>
  <nav>
    <div class="container m-auto">
      <div
        class="flex items-center justify-between max-md:items-stretch max-md:px-5 max-md:flex-col max-md:gap-3"
      >
        <div>
          <a href="http://tgfeu.tj/tj/">
            <img
              class="max-w-[250px] h-[50px] m-auto"
              :src="selentedLogo.src"
              :alt="selentedLogo.alt"
            />
          </a>
        </div>
        <div>
          <div class="flex gap-10 max-md:gap-5">
            <HeaderSearch class="w-[350px]" />
            <!-- <USelectMenu
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
            </USelectMenu> -->
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
