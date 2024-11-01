import { useUserStore } from "~/store/User";
const api = "https://crazy-gauss.89-253-237-222.plesk.page/api";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUserStore();
  const token = useCookie("token").value;

  // Если токен отсутствует, перенаправляем на 404
  if (!token) {
    console.log("No token found, redirecting to /404");
    user.user = {};
    return navigateTo("/404");
  }

  // Устанавливаем токен в хранилище пользователя
  user.token = token;

  try {
    // Делаем запрос для получения данных пользователя
    const res = await $fetch(`${api}/auth/me`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Устанавливаем данные пользователя в хранилище
    user.user = res;

    // Проверяем роль пользователя
    if (res.role !== ('super_admin' || "admin") ) {
      console.log("User is not admin, redirecting to /404");
      return navigateTo("/404");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    // В случае ошибки перенаправляем на 404
    return navigateTo("/404");
  }
});
