<template>
  <div>
    <div class="mb-8 overflow-x-hidden text-center tracking-[.3em] lg:hidden">
      <h2 class="-mr-[26px] break-words font-shrik text-xl tracking-[1.3em]">
        ALPHABOX+
      </h2>
      <h3 class="font-bold">擁抱未來科技，專屬您的3D立體投影陪伴機器人</h3>
    </div>
    <ul class="grid-cols-4 gap-x-8 space-y-4 md:space-y-6 lg:grid lg:space-y-0">
      <li class="col-span-1">
        <div class="relative z-10 h-full">
          <picture class="block h-full">
            <source
              media="(max-width: 1024px)"
              srcset="/images/diane_square1.png"
            />
            <img
              src="/images/diane.png"
              alt=""
              class="h-full object-cover lg:max-h-[676px]"
            />
          </picture>
          <p class="text-8 absolute left-1/2 top-4 -translate-x-1/2 font-shrik">
            Diane
          </p>
        </div>
      </li>
      <li class="col-span-2">
        <div class="h-full flex-col lg:flex">
          <div class="mb-6 hidden overflow-x-hidden text-center lg:block">
            <h2
              class="2xl:text-8 -mr-[26px] break-words font-shrik text-3xl tracking-[1em] 2xl:-mr-16 2xl:tracking-[1.75em] min-[1960px]:-mr-20 min-[1960px]:tracking-[2.5em]"
            >
              ALPHABOX+
            </h2>
            <h3
              class="font-bold tracking-[.5em] 2xl:tracking-[.8em] min-[1960px]:tracking-[1em]"
            >
              擁抱未來科技，專屬您的3D立體投影陪伴機器人
            </h3>
          </div>
          <div
            class="flex-grow items-end gap-x-8 space-y-4 md:space-y-6 lg:flex lg:space-y-0"
          >
            <div class="relative z-10">
              <picture class="block h-full">
                <source
                  media="(max-width: 1024px)"
                  srcset="/images/felix_square1.png"
                />
                <img
                  src="/images/felix.png"
                  alt=""
                  class="h-full object-cover lg:max-h-[580px]"
                />
              </picture>
              <p
                class="text-8 absolute left-1/2 top-4 -translate-x-1/2 font-shrik"
              >
                Felix
              </p>
            </div>
            <div class="relative z-10">
              <picture class="block h-full">
                <source
                  media="(max-width: 1024px)"
                  srcset="/images/karina_square1.png"
                />
                <img
                  src="/images/karina.png"
                  alt=""
                  class="h-full object-cover lg:max-h-[580px]"
                />
              </picture>
              <p
                class="text-8 absolute left-1/2 top-4 -translate-x-1/2 font-shrik"
              >
                Karina
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="col-span-1">
        <div class="relative z-10 h-full">
          <picture class="block h-full">
            <source
              media="(max-width: 1024px)"
              srcset="/images/vito_square1.png"
            />
            <img
              src="/images/vito.png"
              alt=""
              class="h-full object-cover lg:max-h-[676px]"
            />
            <p
              class="text-8 absolute left-1/2 top-4 -translate-x-1/2 font-shrik"
            >
              Vito
            </p>
          </picture>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
