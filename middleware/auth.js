import { useUserStore } from "~/store/User";
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore();
  if (user.authUser.role !== "admin") {
    return navigateTo("/admin");
  }
});
