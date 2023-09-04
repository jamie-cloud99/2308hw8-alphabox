<template>
  <div
    class="container items-center justify-between py-10 font-bold text-black lg:flex"
  >
    <div>
      <h3 class="text-8 mb-2 font-shrik lg:mb-0">ALPHABOX+</h3>
      <p class="tracking-widest">Copyright © 2023 Hexschool.</p>
    </div>
    <p class="mb-2 lg:mb-0">
      <span class="material-symbols-outlined align-bottom text-[80px]">
        emergency
      </span>
    </p>
    <ul class="gap-6 lg:flex">
      <li v-for="item in menuList" :key="item.title" class="mb-2 lg:mb-0">
        <RouterLink :to="item.path" class="block">{{ item.title }}</RouterLink>
      </li>
    </ul>

    <p class="tracking-widest lg:hidden">Copyright © 2023 Hexschool.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuList = ref([
  {
    title: "關於我們",
    path: "",
  },
  {
    title: "產品資訊",
    path: "",
  },
  {
    title: "常見問題",
    path: "/faq",
  },
  {
    title: "隱私政策",
    path: "",
  },
]);
</script>

<style lang="scss" scoped></style>
