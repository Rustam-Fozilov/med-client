<template>
  <div>
    <div class="my-container">
      <div class="my-12 xl:my-7">
        <div class="flex justify-between items-center leading-normal w-full lg:flex-col lg:items-start">
          <div class="text-4xl sm:text-2xl">
            Shifokorlar
          </div>
          <div class="w-1/3 lg:w-full text-end">
            Ixtisoslashtirilgan tibbiy xizmatga muxtoj ftiziatrik va pulmonologik kasalliklari bilan ogrigan bemorlarni aniqlash
          </div>
        </div>
        <div class="flex justify-start gap-5 flex-wrap mt-5">
          <doctor-card v-for="doctor in allDoctors" :key="doctor.id" :doctor="doctor"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import DoctorCard from "~/components/main/cards/DoctorCard.vue";
import type {DoctorType} from "~/core/types/doctor.type";
import { onMounted } from "vue";
import axios from "axios";

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
  script: [
    {src: 'https://www.googletagmanager.com/gtag/js?id=G-34S81JYVR4', async: true},
    {innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-34S81JYVR4');
    `,tagPosition: 'head'
    },
    {innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NNDJSDNG');
    `,tagPosition: 'head'
    },
  ],
  noscript: [
    {body: true, innerHTML: `
        // Google Tag Manager (noscript)
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNDJSDNG" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        // End Google Tag Manager (noscript)
    `, tagPosition: 'bodyOpen'
    },
  ]
})

definePageMeta({
  layout: "main-layout",
});

const isNavbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();
const config = useRuntimeConfig();
const allDoctors = ref<Array<DoctorType>>([]);

onMounted(async () => {
  await getAllDoctors();
});

const getAllDoctors = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/doctors')
      .then((res) => {
        allDoctors.value = res.data;
      });
};

onBeforeMount(() => {
  isNavbarFloat.value = true;
  bgColor.value = '#F5F5F7';
})

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