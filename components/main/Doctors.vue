<template>
  <div class="my-container py-12 lg:py-8">
    <div class="flex flex-col gap-12 xsm:gap-5">
      <div class="flex justify-between items-center leading-normal w-full md:flex-col md:items-start md:justify-start">
        <div class="text-4xl sm:text-2xl">
          Shifokorlar
        </div>
        <div class="w-1/3 md:w-full text-end md:text-start">
          Ixtisoslashtirilgan tibbiy xizmatga muxtoj ftiziatrik va pulmonologik kasalliklari bilan ogrigan bemorlarni aniqlash
        </div>
      </div>
      <div class="flex justify-start gap-5 flex-wrap">
        <doctor-card v-for="doctor in allDoctors" :key="doctor.id" :doctor="doctor"/>
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
// @ts-ignore
import DoctorCard from "~/components/main/cards/DoctorCard.vue";
import axios from "axios";
import type { DoctorType } from "~/core/types/doctor.type";
import { onMounted } from "vue";

const router = useRouter();
const config = useRuntimeConfig();
const allDoctors = ref<Array<DoctorType>>([]);

onMounted(async () => {
  await getAllDoctors();
});

const getAllDoctors = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/doctors?limit=9')
      .then((res) => {
        allDoctors.value = res.data;
      })
      .catch(e => {
        console.error(e.message);
        console.error(config.public);
      })
};

const gotoDoctors = () => {
  router.push('/doctors')
}

</script>

<style scoped>

</style>
