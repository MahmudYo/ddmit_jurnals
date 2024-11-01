import { defineStore } from "pinia";
const api = "https://crazy-gauss.89-253-237-222.plesk.page/api";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
    token: {},
    admin: "",
  }),
  actions: {
    async logout() {
      await $fetch(`${api}/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
        .then((res) => {
          if (res) {
            this.admin = "";
            return true;
          }
        })
        .catch((err) => {
          console.error(err);
          return false;
        });
    },
    async me(token) {
      return $fetch(`${api}/auth/me`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        this.user = res;
        res;
      });
    },
  },
});
