<template>
  <div>
    <button
        class="px-4 bg-transparent font-sf-regular border-dark-green border-[1px] flex items-center justify-center py-[10px] text-dark-green rounded-lg hover:bg-dark-green hover:text-white transition duration-300"
        :class="className"
        @click="handleEmit"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">

defineProps({
  className: String,
});

const emit = defineEmits(['clicked']);

const handleEmit = () => {
  emit('clicked');
}

</script>

<style scoped>

</style>