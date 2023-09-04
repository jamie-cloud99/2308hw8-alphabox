<template>
  <div class="">
    <!-- <button type="button" class="hidden opacity-50 lg:block" disabled>
      <img
        class="w-24 rotate-180 2xl:w-[180px]"
        src="/images/line_end_arrow_notch.png"
        alt="arrow"
      />
    </button> -->
    <div class="container">
      <swiper-container
        class=""
        ref="swiperEl"
        :autoplay="{ delay: 3000 }"
        :breakpoints="{ 1024: { autoplay: { enabled: false } } }"
        slides-per-view="1"
      >
        <swiper-slide
          v-for="i in 3"
          :key="'i' + i"
          class="flex-grow bg-[url(../images/carousel.png)] bg-cover bg-center p-4 pt-36 lg:py-40 lg:text-right"
        >
          <p class="text-16 font-shrik lg:text-8xl">0 {{ i }}</p>
          <h3
            class="lg:text-8 mb-2 text-2xl font-bold tracking-[1em] lg:-mr-8 lg:mb-4"
          >
            立體投影技術
          </h3>
          <p class="font-bold">
            透過高科技立體投影技術，讓您感受真實的科技世界。
          </p>
        </swiper-slide>
        <div slot="container-end" class="absolute left-0 right-0 top-1/2 z-50">
          <button
            type="button"
            class="nav-prev hidden disabled:opacity-50 lg:block"
            @click="goback"
            :disabled="!slides.havePre"
          >
            <img
              class="w-24 rotate-180 min-[1920px]:w-[180px]"
              src="/images/line_end_arrow_notch.png"
              alt="arrow"
            />
          </button>
          <button
            type="button"
            class="nav-next w-30 hidden disabled:opacity-50 lg:block"
            @click="go"
            :disabled="!slides.haveNext"
          >
            <img
              class="w-24 min-[1920px]:w-[180px]"
              src="/images/line_end_arrow_notch.png"
              alt="arrow"
            />
          </button>
        </div>
      </swiper-container>
    </div>
  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import { ref, watch } from "vue";

register();

const swiperEl = ref(null);

const slides = ref({
  totalSlides: 3,
  curSlide: 1,
  haveNext: true,
  havePre: false,
});

watch(
  () => slides.value.curSlide,
  () => {
    slides.value.havePre = slides.value.curSlide <= 1 ? false : true;
    slides.value.haveNext =
      slides.value.curSlide >= slides.value.totalSlides ? false : true;
  },
);

const go = () => {
  swiperEl.value.swiper.slideNext();
  slides.value.curSlide++;
};

const goback = () => {
  swiperEl.value.swiper.slidePrev();
  slides.value.curSlide--;
};
</script>

<style>
swiper-container::part(wrapper),
swiper-container::part(container) {
  position: static;
}

.nav-prev {
  position: absolute;
  top: 50%;
  transform: translateX(-100%);
  left: -24px;
}

.nav-next {
  position: absolute;
  top: 50%;
  transform: translateX(100%);
  right: -24px;
}
</style>
