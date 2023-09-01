<template>
  <h2
    class="text-10 tracking-1 mb-8 text-center font-bold lg:mb-10 lg:text-left 2xl:text-5xl"
  >
    最新消息
  </h2>
  <hr class="border-white" />
  <ul class="mb-[56px] grid-cols-2 font-bold lg:mb-[92px] lg:grid">
    <li class="col-span-2">
      <div class="border-b border-white px-4 py-8 lg:py-10">
        <p class="tracking-1 mb-2">
          <span class="material-symbols-outlined align-bottom">
            emergency
          </span>
          2023.06.30
        </p>
        <h3 class="tracking-1 mb-3 text-xl">產品升級公告</h3>
        <div class="grid-cols-12 gap-x-6 lg:grid">
          <div class="col-span-9">
            <p class="mb-3 lg:line-clamp-2">
              榮幸地宣布，ALPHABOX+
              已成功完成最新一代的升級！本次升級包括提升投影解析度、優化語音辨識技術，以及擴充情感識別功能。歡迎您了解本次升級帶來的更為卓越的性能！
            </p>
          </div>
          <div class="col-span-3 justify-self-end">
            <a href="#">
              <img
                src="/images/line_end_arrow_notch2.png"
                alt="arrow"
                class=""
              />
            </a>
          </div>
        </div>
      </div>
    </li>
    <li class="col-span-1">
      <div class="border-b border-white px-4 py-8 lg:py-10">
        <p class="tracking-1 mb-2">
          <span class="material-symbols-outlined align-bottom">
            emergency
          </span>
          2023.06.30
        </p>
        <h3 class="tracking-1 mb-3 text-xl">限時優惠活動</h3>
        <p class="mb-3 lg:line-clamp-2">
          為答謝廣大用戶的支持，本月將舉辦一場限時優惠活動。訂閱 ALPHABOX+
          的顧客，皆可享受九折優惠。機會難得，請勿錯過此良機！
        </p>
        <a href="#">
          <img src="/images/line_end_arrow_notch2.png" alt="arrow" class="" />
        </a>
      </div>
    </li>
    <li class="col-span-1">
      <div class="border-b border-white px-4 py-8 lg:border-l lg:py-10">
        <p class="tracking-1 mb-2">
          <span class="material-symbols-outlined align-bottom">
            emergency
          </span>
          2023.06.30
        </p>
        <h3 class="tracking-1 mb-3 text-xl">新功能上線</h3>
        <p class="mb-3 lg:line-clamp-2">
          為使您的 ALPHABOX+
          更趨完善，我們不懈地研發創新功能。近期，我們新推出智慧家居控制功能，使您的機器人能更便利地協助您操作家中各類智能設備。
        </p>
        <a href="#">
          <img src="/images/line_end_arrow_notch2.png" alt="arrow" class="" />
        </a>
      </div>
    </li>
  </ul>
  <div class="flex justify-center lg:mb-28">
    <MoreCircle class="h-[132px] w-[132px]" />
  </div>
  <p class="hidden text-right font-bold lg:block">
    為環保盡一份心力，我們的包裝盒和紙質說明書都使用環保材料
  </p>
</template>

<script setup>
import MoreCircle from "./MoreCircle.vue";
</script>
