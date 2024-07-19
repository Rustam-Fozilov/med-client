<template>
  <div class="bg-soft-tiffany py-16 text-dark-green lg:py-5">
    <div id="contact" class="relative -top-24">.</div>
    <div class="my-container flex justify-between gap-5 h-full xl:flex-col">
      <div class="flex flex-col gap-7 w-1/2 lg:w-full lg:gap-5">
        <div class="text-4xl sm:text-2xl">
          Kontakt
        </div>
        <div class="text-md leading-none sm:text-md">
          Toshkent shahar ftiziatriya va pulmonologiya markazi Sog‘liqni saqlash vazirligi, Respublika ixtisoslashtirilgan ftiziatriya va pulmonologiya ilmiy amaliy tekshirish markaziga, Toshkent shahar sog‘liqni saqlash bosh boshqarmasi va Chilonzor tumani tibbiyot birlashmasiga bo‘ysunadi.
        </div>
        <div class="flex gap-12 sm:flex-col sm:gap-5">
          <div class="flex flex-col gap-2">
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/phone.svg" alt="Phone icon">
              </div>
              <div>+998 (71)288-23-17</div>
            </div>
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/phone.svg" alt="Phone icon">
              </div>
              <div>+998 (71)288-23-18</div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/mail.svg" alt="Phone icon">
              </div>
              <div>tashfipcentr@mail.ru</div>
            </div>
            <div class="flex gap-1 items-start">
              <div>
                <img src="/assets/images/svg/location.svg" alt="Phone icon">
              </div>
              <div>Chilonzor tumani 7 mavze Lutfiy kuchsi 33/1 uy. <br> Indeks: 100096</div>
            </div>
          </div>
        </div>
        <div class="flex xsm:flex-col gap-5 xsm:gap-3">
          <BtnPrimary class-name="xsm:w-full" @clicked="openEnrollmentModal">
            Qabulga yozilish
          </BtnPrimary>
          <a href="tel:+998712882317" class="px-4 bg-transparent font-sf-regular border-dark-green border-[1px] flex items-center justify-center py-[10px] text-dark-green rounded-lg hover:bg-dark-green hover:text-white transition duration-300">
            Qo'ng'iroq qilish
          </a>
        </div>
      </div>
      <div id="map" class="w-1/2 bg-dark-green rounded-md xl:w-full">
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/org/15698772654/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкентский городской центр фтизиатрии и пульмонологии</a><a href="https://yandex.uz/maps/10335/tashkent/category/dispensary/184105988/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Диспансер в Ташкенте</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.209586%2C41.297256&mode=poi&poi%5Bpoint%5D=69.208311%2C41.297728&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D15698772654&z=17.63" width="100%" height="420px" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
<!--        <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/org/9154925407/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкентская городская клиническая больница туберкулеза и пульмонологии</a><a href="https://yandex.uz/maps/10335/tashkent/category/specialized_hospital/53437260559/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Специализированная больница в Ташкенте</a><iframe src="https://yandex.uz/map-widget/v1/org/9154925407/?ll=69.232759%2C41.352582&z=16" width="100%" height="450px" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isEnrollmentModalOpen = useIsEnrollmentModalOpen();

const openEnrollmentModal = () => {
  isEnrollmentModalOpen.value = true;
};

</script>
