<template>
  <div class="w-[490px] flex bg-white rounded-md xl:w-[48.5%] doctor_card overflow-hidden">
    <div class="flex w-full justify-between">
      <div class="h-full p-8 w-[40%] xsm:p-4">
        <div class="flex flex-col justify-between h-full w-full">
          <div>
            <div class="text-[20px] leading-none xsm:text-rg">
              {{ doctor?.user.name }}
            </div>
            <div class="opacity-50 leading-none text-rg mt-3 xsm:mt-1">
              {{ doctor?.specialization }}
            </div>
          </div>
          <div class="opacity-50 text-rg">
            <div>
              {{ doctor?.user.phone }}
            </div>
            <div class="">Tug'ilgan yili: {{ doctor?.birth_year }}</div>
          </div>
        </div>
      </div>
      <div class="w-[60%] flex h-full items-end justify-end pt-7">
        <img :src="config.public?.baseApiURL + doctor?.image" alt="" class="w-full h-auto object-contain md:h-full md:object-cover">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DoctorType } from "~/core/types/doctor.type";
import type { PropType } from "vue";

defineProps({
  doctor: Object as PropType<DoctorType>,
});

const config = useRuntimeConfig();

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