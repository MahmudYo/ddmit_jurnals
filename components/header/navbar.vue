<script setup>
import { useResizeStore } from "~/store/Resize";
import { useUserStore } from "~/store/User";
const user = useUserStore();
const nav_list = ref(null);
const resize = useResizeStore();
const toggleNavbar = () => {
  nav_list.value.classList.toggle("active");
};
watch(
  () => resize.resize.width,
  (newVal) => {
    if (newVal > 1000) {
      nav_list.value.classList.remove("active");
    }
  }
);
</script>

<template>
  <nav class="bg-mainColor">
    <div class="container m-auto px-5">
      <div class="flex items-center justify-between gap-5">
        <button
          @click="toggleNavbar"
          class="btn hover:rotate-90 transition-transform btn-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          v-if="resize.resize.width < 992"
          class="text-2xl text-white flex items-center gap-5"
        >
          <span>ISSN 2663-0389</span>
          <main-friend-logos />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <ul ref="nav_list" class="nav-list w-full text-center">
          <li>
            <router-link to="/">Махзани маҷалла</router-link>
          </li>
          <li>
            <router-link to="/editorial_board">Ҳайати таҳририя</router-link>
          </li>
          <li>
            <router-link to="/requirements">Талабот</router-link>
          </li>
          <li>
            <router-link to="/contact">Тамос</router-link>
          </li>
          <li class="bg-black" v-if="user.user.role === 'super_admin' || 'admin'">
            <router-link class="" to="/admin">ADMIN</router-link>
          </li>
          <li
            v-if="resize.resize.width < 992"
            class="flex justify-center w-full my-5"
          >
            <ui-jurnal-wrning />
          </li>
        </ul>
        <div
          v-if="resize.resize.width > 1025"
          class="text-2xl text-white flex-[20%]"
        >
          ISSN 2663-0389
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  color: #fff;
  padding: 10px 20px;
}

.nav-list.active {
  display: block;
  margin-top: 10px;
}

.nav-list.active li a {
  display: block;
}

.nav-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  transition: 0.5s ease all;
}

.nav-list li > a {
  display: inline-block;
  font-size: 20px;
  transition: 0.3s ease;
}

.nav-list li > a:hover {
  background: #00a67c;
}

.router-link-active {
  background: #00a67c;
}

.btn-nav {
  width: 30px;
  height: 45px;
  display: none;
}

.btn-nav span {
  display: block;
  background: #fff;
  width: 100%;
  height: 1px;
}

@media (max-width: 992px) {
  nav {
    padding: 10px 0;
  }

  .nav-list {
    display: none;
  }
  .btn-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
