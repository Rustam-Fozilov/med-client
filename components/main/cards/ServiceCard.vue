<template>
  <div class="w-80 2xl:w-[32%] custom-card-shadow duration-300 service_card">
    <div class="bg-white rounded-lg">
      <div class="h-36">
        <img class="w-full h-full object-cover rounded-t-md" :src="service?.image" alt="Service image">
      </div>
      <div class="p-5">
        <div class="text-ellipsis overflow-hidden whitespace-nowrap">
          {{ service?.name }}
        </div>
        <div class="opacity-50 mt-2">
          {{ service?.price }} UZS
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ServiceType } from "~/core/types/service.type";
import type { PropType } from "vue";

defineProps({
  service: Object as PropType<ServiceType>,
});

</script>

<style scoped>

.custom-card-shadow:hover {
  box-shadow: 1px 37px 71px -41px rgba(56,56,56,0.30);
  -webkit-box-shadow: 1px 37px 71px -41px rgba(56,56,56,0.30);
  -moz-box-shadow: 1px 37px 71px -41px rgba(56,56,56,0.30);
}

@media screen and (max-width: 1280px){
  .service_card {
    width: 48.5%;
  }
}

@media screen and (max-width: 856px){
  .service_card {
    width: 100%;
  }
}

</style>