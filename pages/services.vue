<template>
  <div>
    <div class="my-container">
      <div class="my-12 xl:my-7">
        <div class="flex flex-col gap-2 leading-normal w-full">
          <div class="text-4xl sm:text-2xl">
            Xizmatlar
          </div>
          <div class="w-1/2 text-lg leading-none xl:w-full md:text-md">
            Ko‘krak qafasi va ko‘ks a’zolari kasalliklari bilan kasallangan bemorlarda klinik tashxisni belgilash maqsadida tashxislash va differensial tashxislash, davolash tadbirlari majmuasini o‘tkazadi
          </div>
        </div>
        <div class="flex flex-wrap gap-5 justify-start mt-12 md:mt-7">
          <service-card v-for="service in allServices" :key="service?.id" :service="service"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "~/components/main/cards/ServiceCard.vue";
import type {ServiceType} from "~/core/types/service.type";
import {onMounted, onBeforeMount } from "vue";
import axios from "axios";

definePageMeta({
  layout: "main-layout"
});

const isNavbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();
const config = useRuntimeConfig();
const allServices = ref<Array<ServiceType>>([]);

onBeforeMount(() => {
  isNavbarFloat.value = true;
  bgColor.value = '#F5F5F7';
});

onMounted(async () => {
  await getAllServices();
});

const getAllServices = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/services')
      .then((res) => {
        allServices.value = res.data;
      });
};
</script>
