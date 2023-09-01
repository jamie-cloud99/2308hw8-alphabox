<template>
  <ol class="grid grid-cols-4">
    <li
      v-for="(item, index) in products"
      :key="item.title"
      class="col-span-2 lg:col-span-1"
    >
      <div class="relative">
        <img
          class="object-cover w-full min-h-[406px] lg:h-[876px]"
          :src="`/images/${item.title.toLowerCase()}_vertical.png`"
          :alt="item.title"
        />
        <div class="absolute inset-0 bg-black/50 lg:bg-black hover:bg-black/20">
          <div class="px-3 py-6 md:px-10">
            <p class="font-saira mb-4 text-center text-9xl leading-normal md:text-[250px] lg:text-[400px] 2xl:mb-5">{{ index+1 }}</p>
            <h3 class="mb-[18px] text-center font-shrik text-2xl md:text-3xl lg:text-8 md:mb-10 2xl:mb-20">
              {{ item.title }}
            </h3>
            <h4 class="font-bold">{{ item.type }}</h4>
            <div class="min-[1920px]:flex justify-between">
              <p>{{ item.functions }}</p>
              <img src="/images/line_end_arrow_notch3.png" alt="right arrow" class="">
            </div>
          </div>
        </div>
      </div>
    </li>
  </ol>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    title: "Diane",
    type: "知識型",
    functions: "學術領導/知識分享/智能問答",
  },
  {
    title: "Felix",
    type: "娛樂型",
    functions: "音樂播放/語音互動/遊戲陪伴",
  },
  {
    title: "Karina",
    type: "生活型",
    functions: "健康提醒/日程安排/智能家居",
  },
  {
    title: "Vito",
    type: "情感型",
    functions: "情感識別/心情分析/心靈支持",
  },
]);
</script>

<style lang="scss" scoped></style>
