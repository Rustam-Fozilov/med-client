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

    <div class="bg-soft-white">
      <services/>
    </div>

    <div>
      <contact/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/main/HeroSection.vue";
import AboutUs from "~/components/main/AboutUs.vue";
import Doctors from "~/components/main/Doctors.vue";
import Services from "~/components/main/Services.vue";
import Contact from "~/components/main/Contact.vue";

useHead({
  title: 'Toshkent shahar ftiziatriya va pulmonologiya markazi',
  meta: [
    {name: 'description', content: 'Toshkent shahar ftiziatriya va pulmonologiya markazi'},
    {name: 'robots', content: 'index, follow'},
    {name: 'keywords', content: 'Toshkent shahar ftiziatriya va pulmonologiya markazi, Ташкентский городской центр фтизиатрии и пульмонологии, Туберкулезный диспансер, Sil kasalligi dispanseri, Toshkent shaxar'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
    {name: 'content-type', content: 'text/html; charset=utf-8'},
    {name: 'application-name', content: 'Toshkent shahar ftiziatriya va pulmonologiya markazi'},
    {property: 'og:title', content: 'Toshkent shahar ftiziatriya va pulmonologiya markazi'},
    {property: 'og:description', content: 'Toshkent shahar ftiziatriya va pulmonologiya markazi'},
    {property: 'og:url', content: 'https://tshfpm.uz'},
  ],
  link: [
    {rel: 'icon', href: '/gerb.ico'}
  ],
})

definePageMeta({
  layout: "main-layout"
});

</script>

<style scoped>

</style>