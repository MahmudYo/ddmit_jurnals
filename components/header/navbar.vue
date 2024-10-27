<script setup>
import { useUserStore } from "~/store/User";
const user = useUserStore();
const nav_list = ref(null);
const toggleNavbar = () => {
  nav_list.value.classList.toggle("active");
};
</script>

<template>
  <nav class="bg-mainColor">
    <div class="container m-auto">
      <button @click="toggleNavbar" class="btn btn-nav btn-success">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="flex justify-between items-center">
        <ul ref="nav_list" class="nav-list">
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
          <li class="bg-black" v-if="user.user.role === 'admin'">
            <router-link class="" to="/admin">ADMIN</router-link>
          </li>
        </ul>
        <div class="text-2xl text-white">ISSN 2663-0389</div>
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
  width: 45px;
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
