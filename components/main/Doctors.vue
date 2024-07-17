<template>
  <div class="my-container py-12 lg:py-8">
    <div class="flex flex-col gap-12 xsm:gap-5">
      <div class="flex justify-between items-center leading-normal w-full md:flex-col md:items-start">
        <div class="text-4xl sm:text-2xl">
          Shifokorlar
        </div>
        <div class="w-1/2 md:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis metus aliquet, suscipit odio id, sodales elit. Sed id est vel dolor pulvinar efficitur. Cras finibus dictum felis, et volutpat purus .
        </div>
      </div>
      <div class="flex justify-start gap-5 flex-wrap">
        <doctor-card v-for="i in 5"/>
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
import DoctorCard from "~/components/main/cards/DoctorCard.vue";

const router = useRouter();

const gotoDoctors = () => {
  router.push('/doctors')
}

</script>

<style scoped>

</style>
