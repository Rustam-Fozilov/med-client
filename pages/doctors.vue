<template>
  <div>
    <div class="my-container">
      <div class="my-12 xl:my-7">
        <div class="flex justify-between items-center leading-normal w-full lg:flex-col lg:items-start">
          <div class="text-4xl sm:text-2xl">
            Shifokorlar
          </div>
          <div class="w-1/2 lg:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis metus aliquet, suscipit odio id, sodales elit. Sed id est vel dolor pulvinar efficitur. Cras finibus dictum felis, et volutpat purus .
          </div>
        </div>
        <div class="flex justify-start gap-5 flex-wrap mt-5">
          <doctor-card v-for="i in 5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DoctorCard from "~/components/main/cards/DoctorCard.vue";

definePageMeta({
  layout: "main-layout",
});

const isNavbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();

onBeforeMount(() => {
  isNavbarFloat.value = true;
  bgColor.value = '#F5F5F7';
})

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