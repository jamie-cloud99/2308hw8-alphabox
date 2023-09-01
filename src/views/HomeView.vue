<template>
  <div
    class="border-t bg-gradient-to-b from-primary-200 to-primary-700 bg-contain bg-no-repeat pt-7 lg:pt-14 xl:bg-[url('../images/home_background.png')] min-[1960px]:bg-cover"
  >
    <div class="px-3 md:px-10 lg:px-20">
      <div
        class="flex-row-reverse justify-between pb-7 font-bold lg:flex lg:pb-14"
      >
        <div class="space-y-2">
          <hr class="w-full border-white lg:w-[416px]" />
          <p class="tracking-widest">ALPHABOX+ STUDIO</p>
        </div>
        <div class="my-8 flex justify-center lg:my-0">
          <img
            src="/images/circle.png"
            alt="ALPHABOX+"
            class="rotated-circle block h-[196px] w-[196px]"
          />
        </div>
        <div class="hidden space-y-2 self-end lg:block">
          <p>最新消息！新版本 v15.4 釋出，搶先體驗！</p>
          <hr class="w-[416px] border-white" />
        </div>
      </div>

      <BannerComponent />
    </div>
  </div>

  <div class="bg-radial relative -mt-[104px] lg:-mt-28 2xl:-mt-[104px]">
    <div
      class="pb-15 lg:pb-13 h-[791px] bg-[url('../images/carousel_background.png')] bg-cover bg-center pt-44 blur lg:h-[1020px] lg:w-1/2 xl:pt-36 2xl:h-[1080px]"
    ></div>
    <div class="absolute left-0 right-0 top-[136px] z-10 lg:top-36">
      <div class="px-3 md:px-10 lg:px-20">
        <div
          class="mb-4 h-10 w-full bg-gradient-to-r from-primary-200 to-primary-700 lg:mb-2"
        ></div>

        <h2
          class="lg:text-8 mb-5 break-words text-2xl font-bold tracking-[1em] lg:mb-4 2xl:text-5xl"
        >
          什麼是 <br /><span class="mt-2 block lg:mt-3">ALPHABOX+</span>
        </h2>
      </div>
      <hr class="mb-4 border-white lg:mb-8" />
      <div class="mb-8 md:px-10 lg:px-20">
        <IntroSlide />
      </div>
      <div class="px-3 md:px-10 lg:px-20">
        <div
          class="mb-4 h-10 w-full bg-gradient-to-r from-primary-700 to-primary-200 lg:mb-2"
        ></div>
      </div>
    </div>
  </div>

  <div class="bg-radial pt-15 pb-20 lg:pb-10 lg:pt-32 2xl:pt-40">
    <div class="container">
      <NewsComponent />
    </div>
  </div>

  <div class="bg-radial-500 pt-15 pb-20 lg:pb-10  overflow-hidden lg:pt-32 2xl:pt-40 relative">
    <div class="container ">
      <SharingCardSlide class="lg:pb-[136px]" />
      <p class="hidden lg:block font-bold">若您有任何疑問或建議，歡迎隨時與我們聯絡，我們將竭誠為您解答。</p>
    </div>

    <div class="absolute bottom-0 overflow-hidden">
      <p
        class="-mt-8 h-[128px] font-shrik text-9xl opacity-[4%] lg:h-[350px] lg:text-[400px]"
      >
        ALPHABOX+
      </p>
    </div>
  </div>

  <div class="bg-primary-600 pt-15 pb-20 lg:py-36">
    <div class="container">
      <ContactForm />
    </div>
  </div>

  <ProductCards />

  <FooterComponent />
</template>

<script setup>
import BannerComponent from "../components/BannerComponent.vue";
import IntroSlide from "../components/IntroSlide.vue";
import NewsComponent from "../components/NewsComponent.vue";
import SharingCardSlide from "../components/SharingCardSlide.vue";
import ContactForm from "../components/ContactForm.vue"
import ProductCards from '../components/ProductCards.vue'
import FooterComponent from "../components/FooterComponent.vue";


</script>

<style>
:root {
  --primary-400: #380c7e;
  --primary-500: #2a085c;
}

.rotated-circle {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.bg-radial {
  background: radial-gradient(closest-side, var(--primary-400), black);
}

.bg-radial-500 {
  background: radial-gradient(closest-side, black, var(--primary-500));
}
</style>
