import { useUserStore } from "~/store/User";
import Cookies from "js-cookie";
const api = "http://127.0.0.1:8000/api";
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore();
  const token = Cookies.get("token");
  if (token) {
    user.token = token;
    $fetch(`${api}/auth/me`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      user.user = res;
    });
  }
});
