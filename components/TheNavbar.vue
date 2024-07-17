<template>
  <div class="border-b-[1px] border-black border-opacity-20 bg-white bg-opacity-20 backdrop-blur-2xl fixed z-[100] w-full">
    <div class="my-container">
      <div class="flex justify-between items-center py-5">
        <div>
          <logo-green/>
        </div>
        <div class="flex gap-5 md:hidden">
          <RouterLink to="/#about-us-test" class="hover:opacity-60 duration-300">Biz haqimizda</RouterLink>
          <RouterLink to="/doctors" class="hover:opacity-60 duration-300">Shifokorlar</RouterLink>
          <RouterLink to="/services" class="hover:opacity-60 duration-300">Xizmatlar</RouterLink>
          <RouterLink to="/#contact-test" class="hover:opacity-60 duration-300">Kontakt</RouterLink>
        </div>
        <div class="md:hidden">
          <btn-primary class="text-sm" @clicked="openEnrollmentModal">
            Qabulga yozilish
          </btn-primary>
        </div>
        <div class="cursor-pointer hidden md:inline-block">
          <img src="/assets/images/svg/menu-button.svg" alt="Menu button">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnPrimary from "./ui/BtnPrimary.vue";
import LogoGreen from "./ui/LogoGreen.vue";

const isEnrollmentModalOpen = useIsEnrollmentModalOpen();

const openEnrollmentModal = () => {
  isEnrollmentModalOpen.value = true;
};

</script>

<style scoped>

</style>