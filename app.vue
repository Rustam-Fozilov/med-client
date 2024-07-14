<template>
  <div>
    <!-- PAGE LOADER ANIMATION -->
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-[15px] w-full z-50 bg-soft-blue drop-shadow-md"
    ></div>

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref(false)

nuxtApp.hook("page:start", () => {
  loading.value = true;
})

nuxtApp.hook("page:finish", () => {
  loading.value = false;
})
</script>

<style>
select {
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}
</style>
