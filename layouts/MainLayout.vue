<template>
  <div :style="'background-color: ' + bgColor">
    <the-navbar/>
    <nav-mobile/>

    <div :style="navbarFloat ? 'padding-top: 6rem;' : ''">
      <slot/>
    </div>

    <the-footer v-if="footerVisible"/>

    <div>
      <enrollment/>
      <confirm-code/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "~/components/TheNavbar.vue";
import NavMobile from "~/components/main/NavMobile.vue";
import Enrollment from "~/components/modals/Enrollment.vue";
import ConfirmCode from "~/components/modals/ConfirmCode.vue";

defineProps({
  footerVisible: {
    required: false,
    default: true,
  },
});

const navbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();

</script>
