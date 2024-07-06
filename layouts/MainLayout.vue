<template>
  <div>
    <the-navbar/>

    <div class="">
      <slot/>
    </div>

    <the-footer v-if="footerVisible"/>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";

defineProps({
  footerVisible: {
    required: false,
    default: true,
  },
});

</script>

<style scoped>

</style>
