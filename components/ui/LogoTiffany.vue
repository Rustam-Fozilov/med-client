<template>
  <div>
    <img :width="width" :height="height" src="/assets/images/brand/logo-tiffany.svg" alt="Logo">
  </div>
</template>

<script setup lang="ts">

defineProps({
  width: {
    required: false,
    default: 'auto',
  },
  height: {
    required: false,
    default: 'auto',
  }
});

</script>

<style scoped>

</style>