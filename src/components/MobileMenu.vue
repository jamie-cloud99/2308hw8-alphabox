<template>
  <div
    class="fixed top-[69px] z-50 h-[403px] w-screen bg-gradient-to-b from-primary-200 to-primary-700 lg:hidden"
  >
    <div class="container pb-8 pt-6 text-center font-medium">
      <ul class="space-y-1">
        <li v-for="item in menuList" :key="item.title">
          <RouterLink :to="item.path" class="block p-2">{{ item.title }}</RouterLink>
        </li>
      </ul>
      <ul class="gap-1 mb-1">
        <li><button type="button" class="p-2">註冊</button></li>
        <li><button type="button" class="p-2">登入</button></li>
      </ul>
      <div class="flex">
        <button
          type="button"
          class="mx-auto block rounded bg-white px-4 py-2 text-black"
        >
          <span class="material-symbols-outlined align-bottom">
            point_scan
          </span>
          訂閱
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  menuList: Array,
});

const { menuList } = toRefs(props);
</script>
