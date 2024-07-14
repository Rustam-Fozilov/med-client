<template>
  <div>
    <div v-if="isConfirmModalOpen" @click="closeModal" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div v-if="isConfirmModalOpen" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[1000] rounded-2xl sm:w-11/12 w-[500px]">
      <div id="auth-dialog" class="outline-none overscroll-none">
        <div class="flex flex-col gap-6">
          <div class="text-center flex items-center justify-between text-md px-10 pt-7">
            <div @click="handleBack" class="cursor-pointer">
              <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5449 9.5L10 17.4169L8.50919 19L0.308691 10.2916C0.111036 10.0816 0 9.79688 0 9.5C0 9.20312 0.111036 8.91839 0.308691 8.70843L8.50919 0L10 1.58315L2.5449 9.5Z" fill="black"/>
              </svg>
            </div>
            <div>
              Tasdiqlash
            </div>
            <!-- FOR ALIGNMENT -->
            <div></div>
          </div>
          <div class="w-full h-px bg-black bg-opacity-20"></div>
          <div class="flex flex-col gap-6 px-10 pb-10 ">
            <div class="text-center text-md text-dark-green">
              <span><a href="https://t.me/tshfpmbot" class="underline underline-offset-4">@tshfpmbot</a></span>
              botiga kiring va murojaatingiz tasdiqlanganligi haqida xabarnomani kuting
            </div>
            <btn-primary class-name="w-full" @clicked="confirmApplication">
              Tasdiqlash
            </btn-primary>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const isConfirmModalOpen = useIsConfirmModalOpen();
const isEnrollmentModalOpen = useIsEnrollmentModalOpen();
const config = useRuntimeConfig();

const closeModal = () => {
  isConfirmModalOpen.value = false;
}

const handleBack = () => {
  isConfirmModalOpen.value = false;
  isEnrollmentModalOpen.value = true;
}

const confirmApplication = async () => {
  const data = sessionStorage.getItem('application_data');

  if (data) {
    await axios
        .post(config.public.baseApiURL + '/api/applications', JSON.parse(data))
        .then((res) => {
          isConfirmModalOpen.value = false;
        });
  }
}

</script>

<style scoped>

</style>