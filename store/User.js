import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    authUser: {
      role: null,
    },
  }),
  actions: {

  },
});
