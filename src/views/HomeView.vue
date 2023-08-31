<template>
  <div
    class="h-[1846px] border-t bg-gradient-to-b from-primary-200 to-primary-700 pt-7 lg:h-[960px] lg:bg-[url('./images/home_background.png')] lg:pt-14"
  >
    <div
      class="flex-row-reverse justify-between px-3 pb-7 font-bold lg:flex lg:px-20 lg:pb-14"
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

    <div class="px-3 lg:px-20">
      <div class="mb-8 overflow-x-hidden text-center tracking-[.3em] lg:hidden">
        <h2 class="-mr-[26px] break-words font-shrik text-xl tracking-[1.3em]">
          ALPHABOX+
        </h2>
        <h3 class="font-bold">擁抱未來科技，專屬您的3D立體投影陪伴機器人</h3>
      </div>
      <div class="lg:grid grid-cols-4 gap-8">
        <div class="w-full">
          <picture>
            <source media="(max-width: 1024px)" srcset="/images/diane_square1.png">
            <img src="/images/diane.png" alt="" class="">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
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
</style>
