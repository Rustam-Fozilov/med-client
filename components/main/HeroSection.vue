<template>
  <div class="w-full bg-soft-tiffany h-screen lg:pt-32 lg:h-auto lg:pb-12">
    <div class="my-container h-full flex justify-between items-center lg:flex-col lg:justify-around lg:gap-7">
      <div class="w-1/2 lg:w-full lg:flex lg:flex-col lg:items-center lg:text-center lg:order-2">
        <div id="hero-title" class="text-4xl text-dark-green leading-none tracking-tight sm:text-3xl">
          Toshkent shahar ftiziatriya va pulmonologiya markazi
        </div>
        <div class="flex gap-5 mt-12 sm:mt-5 xs:flex-col xs:w-full">
          <BtnPrimary class-name="xs:w-full" @clicked="openEnrollmentModal">
            Qabulga yozilish
          </BtnPrimary>
          <a href="tel:+998712882317" class="px-4 bg-transparent font-sf-regular border-dark-green border-[1px] flex items-center justify-center py-[10px] text-dark-green rounded-lg hover:bg-dark-green hover:text-white transition duration-300">
            Qo'ng'iroq qilish
          </a>
        </div>
      </div>
      <div id="hero-image_container" class="mt-12 animate-in slide-in-from-bottom fade-in-0 duration-1000 h-auto lg:order-1 lg:w-auto lg:h-[55%] lg:mt-0">
        <div class="w-auto h-auto lg:h-full lg:w-full">
          <img id="hero-image" class="w-full h-full object-cover lg:object-contain" src="/assets/images/main/hero-merge.png" alt="Hero image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isEnrollmentModalOpen = useIsEnrollmentModalOpen();

const openEnrollmentModal = () => {
  isEnrollmentModalOpen.value = true;
};

</script>

<style scoped>

@media screen and (max-width: 640px) {
  #hero-image {
    height: 400px;
  }
}

@media screen and (max-width: 457px) {
  #hero-title {
    font-size: 32px;
  }
}

</style>
