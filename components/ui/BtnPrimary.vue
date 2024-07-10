<template>
  <div>
    <button
        class="px-4 font-sf-regular border-dark-green border-[1px] flex items-center justify-center py-[10px] bg-dark-green text-white rounded-lg hover:bg-transparent hover:text-dark-green transition duration-300"
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