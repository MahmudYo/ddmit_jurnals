import { defineStore } from "pinia";
export const useResizeStore = defineStore("resize", {
  state: () => ({
    resize: {
      width: null,
      heigth: null,
    },
  }),
  actions: {
    getResize() {
      this.resize.heigth = window.innerHeight;
      this.resize.width = window.innerWidth;
      window.addEventListener("resize", (e) => {
        this.resize.heigth = window.innerHeight;
        this.resize.width = window.innerWidth;
      });
    },
  },
});
