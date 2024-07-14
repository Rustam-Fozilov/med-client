<template>
  <div class="bg-soft-tiffany py-16 text-dark-green">
    <div class="my-container flex justify-between gap-5 h-full">
      <div class="flex flex-col gap-10 w-1/2">
        <div class="text-4xl">
          Kontakt
        </div>
        <div class="text-lg leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.In quis metus aliquet, suscipit odio id, sodales elit. Sed id est vel dolor pulvinar efficitur. Cras finibus dictum felis.
        </div>
        <div class="flex gap-12">
          <div class="flex flex-col gap-2">
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/phone.svg" alt="Phone icon">
              </div>
              <div>+998 (99) 999-19-99</div>
            </div>
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/phone.svg" alt="Phone icon">
              </div>
              <div>+998 (99) 999-19-99</div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/mail.svg" alt="Phone icon">
              </div>
              <div>example@gmail.com</div>
            </div>
            <div class="flex gap-1 items-center">
              <div>
                <img src="/assets/images/svg/location.svg" alt="Phone icon">
              </div>
              <div>Tashkent city, Yunusabad district, 17</div>
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <BtnPrimary @clicked="openEnrollmentModal">
            Qabulga yozilish
          </BtnPrimary>
          <BtnSecondary>
            Qo'ng'iroq qilish
          </BtnSecondary>
        </div>
      </div>
      <div id="map" class="w-1/2 bg-dark-green rounded-md">
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
