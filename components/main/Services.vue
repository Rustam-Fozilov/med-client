<template>
  <div>
    <div class="my-container pt-5 pb-12 lg:pt-0 sm:pb-7">
      <div class="flex flex-col gap-2 leading-normal w-full">
        <div class="text-4xl sm:text-2xl">
          Xizmatlar
        </div>
        <div class="w-1/2 text-lg leading-none lg:w-full md:text-md">
          Ko‘krak qafasi va ko‘ks a’zolari kasalliklari bilan kasallangan bemorlarda klinik tashxisni belgilash maqsadida tashxislash va differensial tashxislash, davolash tadbirlari majmuasini o‘tkazadi
        </div>
      </div>
      <div class="flex flex-wrap gap-5 justify-start mt-12 md:mt-7">
        <service-card v-for="service in allServices" :key="service?.id" :service="service"/>
      </div>
      <div class="mt-7">
        <BtnSecondary class-name="w-full" @clicked="gotoServices">
          Barcha xizmatlar
        </BtnSecondary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "~/components/main/cards/ServiceCard.vue";
import type {ServiceType} from "~/core/types/service.type";
import { onMounted } from "vue";
import axios from "axios";

const router = useRouter();
const config = useRuntimeConfig();
const allServices = ref<Array<ServiceType>>([]);

onMounted(async () => {
  await getAllServices();
});

const getAllServices = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/services?limit=12')
      .then((res) => {
        allServices.value = res.data;
      });
};

const gotoServices = () => {
  router.push('/services')
}

</script>
