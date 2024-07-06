<template>
  <div @click="gotoHome" class="cursor-pointer">
    <img :width="width" :height="height" src="/assets/images/brand/logo-green.svg" alt="Logo">
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

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

const gotoHome = () => {
  router.push('/');
}

</script>

<style scoped>

</style>