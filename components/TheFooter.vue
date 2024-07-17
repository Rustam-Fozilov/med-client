<template>
  <div class="bg-dark-green pt-12 pb-24 text-soft-tiffany sm:pt-7 sm:pb-16">
    <div class="my-container">
      <div class="w-full">
        <logo-tiffany/>
      </div>
      <div class="flex footer_content__container gap-36 xl:flex-wrap xl:gap-12">
        <div class="font-sf-medium">
          <RouterLink to="#about-us" class="mt-5 block">Biz haqimizda</RouterLink>
          <RouterLink to="/doctors">Shifokorlar</RouterLink>
        </div>
        <div class="mt-5 xsm:mt-0">
          <div>
            <div class="font-sf-medium">Xizmatlar</div>
            <div class="flex gap-12">
              <div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
              </div>
              <div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
                <div>Blood analysis</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 flex gap-12 md:mt-0 xs:flex-col xs:gap-7">
          <div>
            <div class="font-sf-medium">Kontakt</div>
            <div>+998 (90) 123-45-67</div>
            <div>+998 (90) 123-45-67</div>
            <div>Tashkent city, <br> Oqtepa street 10A</div>
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

</script>

<style scoped>

@media screen and (max-width: 457px){
  .footer_content__container {
    gap: 2rem;
  }
}

</style>