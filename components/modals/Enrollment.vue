<template>
  <div>
    <div v-if="isEnrollmentModalOpen" @click="closeModal" class="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-black opacity-50 z-[1000]"></div>
    <div v-if="isEnrollmentModalOpen" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[1000] rounded-2xl sm:w-11/12 w-[500px]">
      <div id="auth-dialog" class="outline-none overscroll-none">
        <div class="flex flex-col gap-6">
          <div class="text-center text-md px-10 pt-7">
            Qabulga yozilish
          </div>
          <div class="w-full h-px bg-black bg-opacity-20"></div>
          <form @submit.prevent="handleSubmitForm" class="flex flex-col gap-6 px-10 pb-10 ">
            <div class="flex flex-col gap-5">
              <div>
                <input type="text" required placeholder="Ism" class="outline-none w-full rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5">
              </div>
              <div>
                <input type="text" required placeholder="Familiya" class="outline-none w-full rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5">
              </div>
              <div>
                <input type="text" required placeholder="Telefon" class="outline-none w-full rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5">
              </div>
              <div>
                <select class="w-full bg-transparent cursor-pointer rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5">
                  <option selected disabled class="opacity-50">Shifokorni tanlang</option>
                  <option v-for="doctor in allDoctors" :key="doctor.id" :value="doctor.id">
                    {{ doctor.user.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="text-dark-green leading-none text-rg">
              Qabulga yozilish tasdiqlangandan so’ng telegram bot orqali xabarnomani olasiz
            </div>
            <btn-primary class-name="w-full">
              Qabulga yozilish
            </btn-primary>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useIsConfirmModalOpen } from "~/composables/confirm.composable";
import { useIsEnrollmentModalOpen } from "~/composables/enrollment.composable";
import type { DoctorType } from "~/core/types/doctor.type";
import { onMounted } from "vue";
import axios from "axios";

const isEnrollmentModalOpen = useIsEnrollmentModalOpen();
const isConfirmModalOpen = useIsConfirmModalOpen();
const config = useRuntimeConfig();
const allDoctors = ref<Array<DoctorType>>([]);

onMounted(async () => {
  await getAllDoctors();
});

const getAllDoctors = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/doctors')
      .then((res) => {
        allDoctors.value = res.data;
      });
}

const closeModal = () => {
  isEnrollmentModalOpen.value = false;
}

const handleSubmitForm = () => {
  isEnrollmentModalOpen.value = false;
  isConfirmModalOpen.value = true;
}

</script>

<style scoped>

</style>