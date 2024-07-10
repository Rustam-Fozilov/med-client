<template>
  <div>
    <div>
      <hero-section/>
    </div>

    <div id="about-us">
      <about-us/>
    </div>

    <div id="doctors" class="bg-soft-white">
      <doctors/>
    </div>

    <div id="services" class="bg-soft-white">
      <services/>
    </div>

    <div id="contact">
      <contact/>
    </div>

<!--    Modals-->
    <div>
      <enrollment/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/main/HeroSection.vue";
import AboutUs from "~/components/main/AboutUs.vue";
import Doctors from "~/components/main/Doctors.vue";
import Services from "~/components/main/Services.vue";
import Contact from "~/components/main/Contact.vue";
import Enrollment from "~/components/modals/Enrollment.vue";

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>

</style>