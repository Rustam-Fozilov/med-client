<template>
  <div class="border-b-[1px] border-black border-opacity-20 bg-white bg-opacity-20 backdrop-blur-2xl fixed z-[100] w-full">
    <div class="my-container">
      <div class="flex justify-between items-center py-5">
        <div>
          <logo-green/>
        </div>
        <div class="flex gap-5">
          <RouterLink to="/#about-us" class="hover:opacity-60 duration-300">Biz haqimizda</RouterLink>
          <RouterLink to="/doctors" class="hover:opacity-60 duration-300">Shifokorlar</RouterLink>
          <RouterLink to="/services" class="hover:opacity-60 duration-300">Xizmatlar</RouterLink>
          <RouterLink to="/#contact" class="hover:opacity-60 duration-300">Kontakt</RouterLink>
        </div>
        <div>
          <btn-primary class="text-sm" @clicked="openEnrollmentModal">
            Qabulga yozilish
          </btn-primary>
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