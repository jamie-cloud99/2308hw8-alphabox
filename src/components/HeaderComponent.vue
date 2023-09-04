<template>
  <header class="bg-primary py-3 font-medium lg:py-5">
    <nav class="container flex items-center justify-between">
      <h1 class="font-shrik text-2xl">
        <a href="#" class="block">ALPHABOX+</a>
      </h1>

      <ul class="hidden gap-6 lg:flex">
        <li v-for="item in menuList" :key="item.title">
          <RouterLink :to="item.path" class="block p-2">{{ item.title }}</RouterLink>
        </li>
      </ul>
      <div class="hidden gap-6 lg:flex">
        <ul class="flex gap-2">
          <li><button type="button" class="p-2">註冊</button></li>
          <li><button type="button" class="p-2">登入</button></li>
        </ul>
        <button
          type="button"
          class="block rounded bg-white px-4 py-2 text-black"
        >
          <span class="material-symbols-outlined align-bottom">
            point_scan
          </span>
          訂閱
        </button>
      </div>
      <div class="lg:hidden">
        <button type="button" class="hover:text-white/70" @click="toggleMenu">
          <span class="material-icons p-2.5 align-bottom"> menu </span>
        </button>
      </div>
    </nav>
  </header>
  <MobileMenu
    :menu-list="menuList"
    class="max-h-0 overflow-hidden transition-all duration-500"
    :class="{ '!max-h-[403px]': isOpen }"
  />
</template>

<script setup>
import { ref } from "vue";
import MobileMenu from "../components/MobileMenu.vue";

const menuList = ref([
  {
    title: "產品",
    path: "",
  },
  {
    title: "關於我們",
    path: "",
  },
  {
    title: "最新消息",
    path: "",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "聯絡我們",
    path: "",
  },
]);

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
