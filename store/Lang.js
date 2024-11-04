import { defineStore } from "pinia";
export const useLangStore = defineStore("lang", {
  state: () => ({
    variants: [
      {
        id: "tj",
        label: "TJ",
        avatar: { src: "/img/flags/tj.png" },
      },
      {
        id: "ru",
        label: "RU",
        avatar: { src: "/img/flags/ru.png" },
      },
      {
        id: "en",
        label: "EN",
        avatar: { src: "/img/flags/en.png" },
      },
    ],
  }),
  actions: {
    onSelect() {
      this.selected = this.variants[0];
    },
  },
});
