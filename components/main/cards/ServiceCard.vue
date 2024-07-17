<template>
  <div class="w-80 2xl:w-[32%] custom-card-shadow duration-300 service_card">
    <div class="bg-white rounded-lg h-auto">
      <div>
        <img src="/assets/images/main/about-us.png" alt="Service image">
      </div>
      <div class="p-5">
        <div>
          Рақамли рентген текширув (пленка билан)
        </div>
        <div class="opacity-50 mt-2">
          59 000 UZS
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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