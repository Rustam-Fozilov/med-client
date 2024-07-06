<template>
  <div>
    <button
        class="px-4 font-sf-regular border-dark-green border-[1px] flex items-center justify-center py-[10px] bg-dark-green text-white rounded-lg hover:bg-transparent hover:text-dark-green transition duration-300"
        :class="className"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">

defineProps({
  className: String,
})

</script>

<style scoped>

</style>