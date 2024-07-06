<template>
  <div>
    <the-navbar/>

    <div class="pt-24">
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
