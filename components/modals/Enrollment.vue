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
          <VForm
              @submit="handleSubmitForm"
              :validation-schema="sendFormValidation"
              class="flex flex-col gap-6 px-10 pb-10"
          >
            <div class="flex flex-col gap-5">
              <div>
                <Field
                    type="text"
                    name="f_name"
                    placeholder="Ism"
                    autocomplete="off"
                    class="outline-none w-full rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5"
                />
                <ErrorMessage name="f_name" class="text-red-500 text-rg"/>
              </div>
              <div>
                <Field
                    name="l_name"
                    type="text"
                    placeholder="Familiya"
                    class="outline-none w-full rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5"
                />
                <ErrorMessage name="l_name" class="text-red-500 text-rg"/>
              </div>
              <div>
                <Field
                    v-model="phone"
                    v-maska
                    data-maska="+998(##)###-##-##"
                    placeholder="+998(00)000-00-00"
                    name="phone"
                    autocomplete="off"
                    type="phone"
                    class="outline-none w-full rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5"
                />
                <ErrorMessage name="phone" class="text-red-500 text-rg"/>
              </div>
              <div>
                <Field
                    as="select"
                    name="doctor_id"
                    class="w-full bg-transparent cursor-pointer rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5"
                >
                  <option value="" disabled class="opacity-50">Shifokorni tanlang</option>
                  <option v-for="doctor in allDoctors" :key="doctor.id" :value="doctor.id">
                    {{ doctor.user.name }}
                  </option>
                </Field>
                <ErrorMessage name="doctor_id" class="text-red-500 text-rg"/>
              </div>
              <div>
                <Field
                    as="select"
                    name="time"
                    class="w-full bg-transparent cursor-pointer rounded-md border border-black border-opacity-20 focus:border-dark-green py-2 px-5"
                >
                  <option value="" disabled class="opacity-50">Vaqtni belgilang</option>
                  <option v-for="doctor in allDoctors" :key="doctor.id" :value="doctor.id">
                    {{ doctor.user.name }}
                  </option>
                </Field>
                <ErrorMessage name="doctor_id" class="text-red-500 text-rg"/>
              </div>
            </div>
            <div class="text-dark-green leading-none text-rg">
              Qabulga yozilish tasdiqlangandan so’ng telegram bot orqali xabarnomani olasiz
            </div>
            <btn-primary class-name="w-full">
              Qabulga yozilish
            </btn-primary>
          </VForm>
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
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import { vMaska } from "maska/vue";

const isEnrollmentModalOpen = useIsEnrollmentModalOpen();
const isConfirmModalOpen = useIsConfirmModalOpen();
const config = useRuntimeConfig();
const allDoctors = ref<Array<DoctorType>>([]);
const phone = ref("");

onMounted(async () => {
  await getAllDoctors();
});

const sendFormValidation = Yup.object().shape({
  f_name: Yup.string().required("Ismingizni kiriting"),
  l_name: Yup.string().required("Familiyangizni kiriting"),
  phone: Yup.string().min(17, "To'g'ri telefon raqam kiriting").required("Telefon raqam kiritilishi shart"),
  doctor_id: Yup.string().required("Shifokorni tanlang"),
  time: Yup.string().required("Vaqtni belgilang"),
});

const getAllDoctors = async () => {
  await axios
      .get(config.public.baseApiURL + '/api/doctors')
      .then((res) => {
        allDoctors.value = res.data;
      });
};

const handleSubmitForm = (values: any) => {
  isEnrollmentModalOpen.value = false;
  isConfirmModalOpen.value = true;

  values.phone = values.phone.replace(/[^\d+]/g, '');
  values.time = "21:30";
  sessionStorage.setItem("application_data", JSON.stringify(values));
};

const closeModal = () => {
  isEnrollmentModalOpen.value = false;
};

</script>

<style scoped>

</style>