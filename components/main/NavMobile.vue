<template>
  <div v-if="isMobileNavOpen" class="hidden pt-24 md:block fixed w-full z-10">
    <div class="bg-dark-green pt-12">
      <div class="h-screen my-container">
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-3 text-white text-xl">
            <RouterLink @click="isMobileNavOpen = false" to="/#about-us" class="hover:opacity-60 duration-300">Biz haqimizda</RouterLink>
            <RouterLink @click="isMobileNavOpen = false" to="/doctors" class="hover:opacity-60 duration-300">Shifokorlar</RouterLink>
            <RouterLink @click="isMobileNavOpen = false" to="/services" class="hover:opacity-60 duration-300">Xizmatlar</RouterLink>
            <RouterLink @click="isMobileNavOpen = false" to="/#contact" class="hover:opacity-60 duration-300">Kontakt</RouterLink>
          </div>
          <div class="flex w-full gap-3 mt-12 xs:flex-col xs:w-full">
            <BtnPrimary class-name="xs:w-full bg-white text-gray-900" @clicked="openEnrollmentModal">
              Qabulga yozilish
            </BtnPrimary>
            <BtnSecondary class-name="xs:w-full border-white text-white">
              Qo'ng'iroq qilish
            </BtnSecondary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useIsMobileNavOpen} from "~/composables/layout.composable";

definePageMeta({
  layout: "main-layout",
});

const isEnrollmentModalOpen = useIsEnrollmentModalOpen();
const isMobileNavOpen = useIsMobileNavOpen();

const openEnrollmentModal = () => {
  isEnrollmentModalOpen.value = true;
};

</script>

<style lang="scss" scoped>

</style>