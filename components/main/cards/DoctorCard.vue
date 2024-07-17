<template>
  <div class="w-[490px] flex bg-white rounded-md xl:w-[48.5%] doctor_card">
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
      <div class="w-[60%] flex h-full items-end justify-end pt-12">
        <img src="/assets/images/main/card-bg.png" alt="" class="w-full h-auto md:h-full md:object-cover">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

@media screen and (max-width: 1536px){
  .doctor_card {
    width: 32%;
  }
}

@media screen and (max-width: 1280px){
  .doctor_card {
    width: 48.5%;
  }
}

@media screen and (max-width: 1024px){
  .doctor_card {
    width: 100%;
  }
}

</style>