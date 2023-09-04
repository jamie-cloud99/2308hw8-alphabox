<template>
  <div class="pt-15 bg-primary-100 text-primary-600 lg:pt-16">
    <div class="container">
      <h2 class="text-10 tracking-1 mb-10 font-bold lg:mb-16 2xl:text-5xl">
        最新消息
      </h2>
      <hr class="mb-6 border-b-2 border-dotted border-white lg:mb-10" />
      <div class="grid grid-cols-3 gap-x-6">
        <div class="col-span-3 lg:col-span-1">
          <ul class="mb-6 space-y-4 font-medium">
            <li
              v-for="item in menuList"
              :key="item.code"
              class="border-primary-600 hover:border-b cursor-pointer"
              :class="{ 'border-b ': curMenuItem.code === item.code }"
            >
              {{ item.title }}
            </li>
          </ul>
          <hr class="border-b-2 border-dotted border-white lg:hidden" />
        </div>
        <div class="col-span-3 lg:col-span-2">
          <ul class="">
            <li
              v-for="item in curQuestionList"
              :key="item.title"
              class="border-b-2 border-dotted border-white pt-6 lg:pt-8 lg:first-of-type:pt-0"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between lg:-mt-2"
                :class="{ 'mb-2 ': isOpen === item.title }"
                @click="toggleAccordion(item)"
              >
                <h3 class="font-medium">{{ item.title }}</h3>
                <p class="text-8 h-10 flex items-center">
                  <span
                    v-if="isOpen !== item.title"
                    class="material-symbols-outlined"
                  >
                    add
                  </span>
                  <span v-else class="material-symbols-outlined"> remove </span>
                </p>
              </button>
              <p
                class="mb-6 max-h-0 overflow-hidden transition-all duration-500 lg:mb-8"
                :class="{ '!h-fit !max-h-[500px]': isOpen === item.title }"
              >
                {{ item.content }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuList = ref([
  {
    code: "problems",
    title: "ALPHABOX+ 使用問題",
  },
  {
    code: "order",
    title: "訂購與運送",
  },
  {
    code: "repair",
    title: "產品保養與維修",
  },
]);

const curMenuItem = ref(menuList.value[0]);

const curQuestionList = ref([
  {
    title: "ALPHABOX+ 的使用方式是什麼？",
    content:
      "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
  },
  {
    title: "ALPHABOX+ 需要什麼樣的環境來使用？",
    content:
      "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
  },
  {
    title: "ALPHABOX+ 支援哪些語言？",
    content:
      "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
  },
  {
    title: "ALPHABOX+ 的軟體更新方式為何？",
    content:
      "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
  },
  {
    title: "購買 ALPHABOX+ 後的售後服務如何？",
    content:
      "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
  },
  {
    title: "ALPHABOX+ 與其他智能家居設備的相容性如何？",
    content:
      "首先請確保機器人已安裝並連接至Wi-Fi，然後使用專屬的應用程式進行設定。隨後即可透過語音指令或應用程式與機器人進行互動。",
  },
]);

const isOpen = ref(curQuestionList.value[0].title);

const toggleAccordion = (item) => {
  isOpen.value = item.title === isOpen.value ? null : item.title;
};
</script>
