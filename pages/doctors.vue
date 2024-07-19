<template>
  <div>
    <div class="my-container">
      <div class="my-12 xl:my-7">
        <div class="flex justify-between items-center leading-normal w-full lg:flex-col lg:items-start">
          <div class="text-4xl sm:text-2xl">
            Shifokorlar
          </div>
          <div class="w-1/3 lg:w-full text-end">
            Ixtisoslashtirilgan tibbiy xizmatga muxtoj ftiziatrik va pulmonologik kasalliklari bilan ogrigan bemorlarni aniqlash
          </div>
        </div>
        <div class="flex justify-start gap-5 flex-wrap mt-5">
          <doctor-card v-for="doctor in allDoctors" :key="doctor.id" :doctor="doctor"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import DoctorCard from "~/components/main/cards/DoctorCard.vue";
import type {DoctorType} from "~/core/types/doctor.type";
import { onMounted } from "vue";
import axios from "axios";

definePageMeta({
  layout: "main-layout",
});

const isNavbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();
const config = useRuntimeConfig();
const allDoctors = ref<Array<DoctorType>>([]);

onMounted(async () => {
  await getAllDoctors();
});

const getAllDoctors = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/doctors')
      .then((res) => {
        allDoctors.value = res.data;
      });
};

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