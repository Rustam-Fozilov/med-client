<template>
  <div class="bg-dark-green pt-12 pb-24 text-soft-tiffany sm:pt-7 sm:pb-16">
    <div class="my-container">
      <div class="w-full">
        <logo-tiffany/>
      </div>
      <div class="flex footer_content__container gap-36 xl:flex-wrap xl:gap-12">
        <div class="font-sf-medium">
          <RouterLink to="/#about-us" class="mt-5 block">Biz haqimizda</RouterLink>
          <RouterLink to="/doctors">Shifokorlar</RouterLink>
        </div>
        <div class="mt-5 xsm:mt-0">
          <div>
            <div class="font-sf-medium">Xizmatlar</div>
            <div class="flex gap-12">
              <div class="text-wrap">
                <div v-for="service1 in servicesPartOne" :key="service1?.id">
                  {{ service1?.name }}
                </div>
              </div>
              <div>
                <div v-for="service2 in servicesPartTwo" :key="service2?.id">
                  {{ service2?.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 flex gap-12 md:mt-0 xs:flex-col xs:gap-7">
          <div>
            <div class="font-sf-medium">Kontakt</div>
            <div>+998 (71)288-23-17</div>
            <div>+998 (71)288-23-18</div>
            <div class="mt-2">Chilonzor tumani 7 mavze <br> Lutfiy kuchsi 33/1 uy. <br> Indeks: 100096</div>
          </div>
          <div>
            <div class="font-sf-medium">Ish soatlari</div>
            <div>Du ― Sha</div>
            <div>09:00 ― 18:00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ServiceType} from "~/core/types/service.type";
import {onMounted} from "vue";
import axios from "axios";

const config = useRuntimeConfig();
const allServices = ref<Array<ServiceType>>([]);
const servicesPartOne = ref<Array<ServiceType>>([]);
const servicesPartTwo = ref<Array<ServiceType>>([]);

onMounted(async () => {
  await getAllServices();
});

const getAllServices = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/services')
      .then((res) => {
        allServices.value = res.data;
        sliceArray(allServices.value);
        // console.log(servicesPartOne.value)
      });
};

const sliceArray = (array: Array<ServiceType>) => {
  const middleIndex = Math.ceil(array.length / 2);
  servicesPartOne.value = array.slice(0, middleIndex);
  servicesPartTwo.value = array.slice(middleIndex);
}

</script>

<style scoped>

@media screen and (max-width: 457px){
  .footer_content__container {
    gap: 2rem;
  }
}

</style>