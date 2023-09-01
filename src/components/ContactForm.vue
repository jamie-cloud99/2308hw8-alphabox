<template>
  <div class="font-bold">
    <div class="grid-cols-12 gap-x-6 space-y-4 lg:grid">
      <div class="col-span-5">
        <h2 class="text-10 tracking-1 mb-3 lg:mb-5 2xl:text-5xl">聯絡我們</h2>
        <div class="mb-9 flex items-center gap-2 lg:mb-[54px]">
          <div class="h-3 w-3 rounded-full bg-white"></div>
          <div class="h-3 w-[124px] rounded-full bg-white"></div>
        </div>
        <div class="space-y-1">
          <p>讓科技成為您的最佳夥伴</p>
          <p>立即體驗神奇功能並享限時優惠！</p>
        </div>
      </div>
      <div class="col-span-7">
        <p class="mb-4">
          <span class="material-symbols-outlined align-bottom text-[80px]">
            emergency
          </span>
        </p>
        <form action="" class="space-y-4 uppercase">
          <div class="relative">
            <input
              type="email"
              id="email"
              class=" peer block w-full appearance-none bg-white p-2  focus:border-primary-200 focus:outline-none focus:ring-0 text-black"
              placeholder=" "
            />
            <label
              for="email"
              class="absolute left-1 top-1/2 z-10 origin-[0] transform px-2 text-black duration-300 -translate-y-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary-600 "
              >Email</label
            >
          </div>
          <div class="relative">
            <textarea
              type="text"
              id="comments"
              class=" peer block w-full appearance-none bg-white p-2  focus:border-primary-200 focus:outline-none focus:ring-0 text-black"
              placeholder=" "
            />
            <label
              for="comments"
              class="absolute left-1 top-2 z-10 origin-[0] transform px-2 text-black duration-300   peer-focus:top-2 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary-600 "
              >Comments</label
            >
          </div>
        </form>
      </div>
      <div class=" col-span-4 col-start-9">
        <button type="button" class="block w-full bg-primary rounded py-2">
             <span class="material-symbols-outlined align-bottom mr-1">
            point_scan
          </span>
          送出
          </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
