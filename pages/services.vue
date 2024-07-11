<template>
  <div>
    <div class="my-container">
      <div class="my-12">
        <div class="flex flex-col gap-2 leading-normal w-full">
          <div class="text-4xl">
            Xizmatlar
          </div>
          <div class="w-1/2 text-lg leading-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis metus aliquet, suscipit odio id, sodales elit. Sed id est vel dolor pulvinar efficitur. Cras finibus dictum felis, et volutpat purus .
          </div>
        </div>
        <div class="flex flex-wrap gap-5 justify-between mt-12">
          <service-card v-for="i in 5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "~/components/main/cards/ServiceCard.vue";

definePageMeta({
  layout: "main-layout"
});

const isNavbarFloat = useIsNavbarFloat();
const bgColor = useBgColor();

onBeforeMount(() => {
  isNavbarFloat.value = true;
  bgColor.value = '#F5F5F7';
})
</script>
