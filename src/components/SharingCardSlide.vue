<template>
  <div class="font-bold">
    <div class="mb-6 grid grid-cols-12 gap-x-6 gap-y-4 lg:mb-8 lg:items-center">
      <div class="col-span-12 lg:col-span-5">
        <h2 class="text-10 tracking-1 2xl:text-5xl">使用分享</h2>
      </div>
      <div class="col-span-12 lg:order-3">
        <p class="mb-2">01<span class="mx-1">–</span>04</p>
      </div>
      <div class="col-span-12 lg:col-span-7">
        <p class="">
          展示其他使用者對於產品的真實體驗與評價，讓您更加放心選擇。
        </p>
      </div>
    </div>
    <p class="mb-4 lg:mb-6">
      <span class="material-symbols-outlined align-bottom text-[80px]">
        emergency
      </span>
    </p>

   
      <swiper-container
        init="false"
        ref="swiperEl"
        scrollbar="true"
        :slides-per-view="1"
        :draggable="true"
        :breakpoints="{ 1024: { slidesPerView: 3, enable: true } }"
        :space-between="24"
        class=""
      >
        <swiper-slide
          class="odd:bg-primary-400 even:bg-white even:text-black"
          v-for="item in sharingCard"
          :key="item.name"
        >
          <div class="space-y-8 p-10">
            <div class="flex items-center gap-x-2">
              <p>{{ item.name }}</p>
              <p>
                <span class="material-icons align-middle text-[8px] leading-6">
                  fiber_manual_record
                </span>
              </p>
              <p>{{ item.region }}</p>
            </div>
            <p class="line-clamp-6 min-h-[192px]">
              {{ item.content }}
            </p>
            <div class="flex items-center gap-x-4">
              <p>
                <span class="material-icons align-middle">
                  fiber_manual_record
                </span>
              </p>
              <p>
                <span class="material-icons align-middle">
                  fiber_manual_record
                </span>
              </p>
              <p>{{ item.product }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
  
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { register } from "swiper/element/bundle";
// import { Scrollbar } from 'swiper/modules';

register();

const sharingCard = ref([
  {
    name: "Zona",
    region: "Taipei",
    content:
      "ALPHABOX+ 真的很夯！每次把它打開，感覺就像是身臨其境一樣。它陪我度過了很多寂寞的時光，讓我在家裡也能享受到優質的休閒時光。",
    product: "ALPHABOX+ Dianne",
  },
  {
    name: "Lin",
    region: "Chiayi",
    content:
      "非常推薦！它的畫面清晰度超高，真的讓我驚艷不已。而且它還可以和我互動，感覺就像是有個真實的朋友在身邊。",
    product: "ALPHABOX+ Felix",
  },
  {
    name: "云",
    region: "Taipei",
    content:
      "我之前一直在找能陪伴我度過空虛時光的好夥伴，直到遇見 ALPHABOX+。它不僅僅是一個機器人，更像是一個真正的朋友，陪著我分享喜怒哀樂。真的很讚！",
    product: "ALPHABOX+ Dianne",
  },
  {
    name: "Zichi",
    region: "Kaohsiung",
    content:
      "讓我在忙碌的工作之餘，也能找到休閒的樂趣。它的互動功能非常有趣，讓我在短短的時間內就愛上了它。給它一百分！",
    product: "ALPHABOX+ Vito",
  },
]);

const swiperEl = ref(null);

const params = {
  // array with CSS styles
  injectStyles: [
    `
      .swiper {
        overflow: initial
      }
      .swiper-scrollbar-drag {
        background: white;
      }
      `,
  ],
};



onMounted(() => {
  Object.assign(swiperEl.value, params);
  swiperEl.value.initialize();
  if(window.innerWidth < 1024) {
    console.log(swiperEl.value.swiper)
    swiperEl.value.swiper.destroy(true, true)
  }
});
</script>

<style>
swiper-container::part(scrollbar) {
  @apply static my-10 bg-white/20;
}


</style>
