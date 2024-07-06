<template>
  <div class="border-b-[1px] border-black border-opacity-20 fixed z-10 w-full">
    <div class="my-container backdrop-blur-2xl">
      <div class="flex justify-between items-center p-5">
        <div>
          <logo-green/>
        </div>
        <div class="flex gap-5">
          <RouterLink to="/" class="hover:opacity-60 duration-300">Biz haqimizda</RouterLink>
          <RouterLink to="/" class="hover:opacity-60 duration-300">Shifokorlar</RouterLink>
          <RouterLink to="/" class="hover:opacity-60 duration-300">Xizmatlar</RouterLink>
          <RouterLink to="/" class="hover:opacity-60 duration-300">Kontakt</RouterLink>
        </div>
        <div>
          <btn-primary class="text-sm">
            Qabulga yozilish
          </btn-primary>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>