<template>
  <div class="my-container py-12">
    <div class="flex flex-col gap-12">
      <div class="flex justify-between items-center leading-normal w-full">
        <div class="text-4xl">
          Shifokorlar
        </div>
        <div class="w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis metus aliquet, suscipit odio id, sodales elit. Sed id est vel dolor pulvinar efficitur. Cras finibus dictum felis, et volutpat purus .
        </div>
      </div>
      <div class="flex justify-start gap-5 flex-wrap 2xl:justify-around">
        <div v-for="i in 4" class="w-[490px] flex h-80 bg-white rounded-md xl:w-[48.5%]">
          <div class="flex w-full justify-between">
            <div class="h-full p-8 w-[40%]">
              <div class="flex flex-col justify-between h-full w-full">
                <div>
                  <div class="text-[20px] leading-none">
                    Akkiev Muhiddin Isomiddinovich
                  </div>
                  <div class="opacity-50 leading-none text-rg mt-3">
                    Заведующий отделением лучевой диагностики
                  </div>
                </div>
                <div class="opacity-50 text-rg">
                  <div>+998 (99) 999-99-99</div>
                  <div>Год рождение: 1985 г</div>
                </div>
              </div>
            </div>
            <div class="w-[60%] flex h-full items-end justify-end">
              <img src="/assets/images/main/card-bg.png" alt="" class="w-full h-auto">
            </div>
          </div>
        </div>
      </div>
      <div>
        <BtnSecondary class-name="w-full" @clicked="gotoDoctors">
          Barcha xodimlar
        </BtnSecondary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnSecondary from "~/components/ui/BtnSecondary.vue";

const router = useRouter();

const gotoDoctors = () => {
  router.push('/doctors')
}

</script>
