<template>
  <div>
    <div>
      <hero-section/>
    </div>

    <div>
      <about-us/>
    </div>

    <div class="bg-soft-white">
      <doctors/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/main/HeroSection.vue";
import AboutUs from "~/components/main/AboutUs.vue";
import Doctors from "~/components/main/Doctors.vue";

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>

</style>