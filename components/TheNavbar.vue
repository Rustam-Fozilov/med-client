<template>
  <div class="border-b-[1px] border-black border-opacity-20 bg-white bg-opacity-20 backdrop-blur-2xl fixed z-[100] w-full">
    <div class="my-container">
      <div class="flex justify-between items-center py-5">
        <div>
          <logo-green/>
        </div>
        <div class="flex gap-5 md:hidden">
          <RouterLink to="/#about-us" class="hover:opacity-60 duration-300">Biz haqimizda</RouterLink>
          <RouterLink to="/doctors" class="hover:opacity-60 duration-300">Shifokorlar</RouterLink>
          <RouterLink to="/services" class="hover:opacity-60 duration-300">Xizmatlar</RouterLink>
          <RouterLink to="/#contact" class="hover:opacity-60 duration-300">Kontakt</RouterLink>
        </div>
        <div class="md:hidden">
          <btn-primary class="text-sm" @clicked="openEnrollmentModal">
            Qabulga yozilish
          </btn-primary>
        </div>
        <div v-if="!isMobileNavOpen" @click="openMobileNav" class="cursor-pointer hidden md:inline-block">
          <img src="/assets/images/svg/menu-button.svg" alt="Menu button">
        </div>
        <div v-if="isMobileNavOpen" @click="closeMobileNav" class="cursor-pointer hidden md:inline-block">
          <img src="/assets/images/svg/exit-button.svg" alt="Exit button">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnPrimary from "./ui/BtnPrimary.vue";
import LogoGreen from "./ui/LogoGreen.vue";
import {useIsMobileNavOpen} from "~/composables/layout.composable";

const isEnrollmentModalOpen = useIsEnrollmentModalOpen();
const isMobileNavOpen = useIsMobileNavOpen();

const openEnrollmentModal = () => {
  isEnrollmentModalOpen.value = true;
};

const openMobileNav = () => {
  isMobileNavOpen.value = true;
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
}

</script>

<style scoped>

</style>