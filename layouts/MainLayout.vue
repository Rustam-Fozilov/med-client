<template>
  <div :style="'background-color: ' + bgColor">
    <the-navbar/>

    <div :style="navbarFloat ? 'padding-top: 6rem;' : ''">
      <slot/>
    </div>

    <the-footer v-if="footerVisible"/>

    <div>
      <enrollment/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "~/components/TheNavbar.vue";
import Enrollment from "~/components/modals/Enrollment.vue";

defineProps({
  footerVisible: {
    required: false,
    default: true,
  },
});

const navbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();

</script>
