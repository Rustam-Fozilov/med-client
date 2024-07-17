<template>
  <div>
    <div class="my-container pt-5 pb-12 lg:pt-0 sm:pb-7">
      <div class="flex flex-col gap-2 leading-normal w-full">
        <div class="text-4xl sm:text-2xl">
          Xizmatlar
        </div>
        <div class="w-1/2 text-lg leading-none lg:w-full md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis metus aliquet, suscipit odio id, sodales elit. Sed id est vel dolor pulvinar efficitur. Cras finibus dictum felis, et volutpat purus .
        </div>
      </div>
      <div class="flex flex-wrap gap-5 justify-start mt-12 md:mt-7">
        <service-card v-for="i in 5"/>
      </div>
      <div class="mt-7">
        <BtnSecondary class-name="w-full" @clicked="gotoServices">
          Barcha xizmatlar
        </BtnSecondary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "~/components/main/cards/ServiceCard.vue";

const router = useRouter();

const gotoServices = () => {
  router.push('/services')
}

</script>
