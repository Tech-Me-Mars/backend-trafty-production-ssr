<script setup>
import { useFieldArray, useForm, Form, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { useRouter } from 'vue-router';
import * as dataApi from "./api/data.js";
import { useEncryptedCookie, useDecryptedCookie, useClearEncryptedCookie } from '~/composables/useEncryptedCookie'
const { showToast, success, error, warning, info } = useToast();

// สร้าง ref สำหรับ show/hide password
const show = ref(false);


const requireValue = ('กรุณาระบุข้อมูลให้ถูกต้อง');
// *************  VARIDATOR
const validationSchema = toTypedSchema(
  zod.object({
    username: zod.string()
      .nonempty(requireValue).default(""),
    password: zod.string()
      .nonempty(requireValue).default(""),
  })
);
const { handleSubmit, handleReset, errors } = useForm({
  validationSchema,
});


onMounted(() => {

})
const isSubmitting = ref(false);
const { value: username } = useField('username')
const { value: password } = useField('password')

// ฟังก์ชันที่ใช้ส่งฟอร์ม
const onSubmit = handleSubmit(async (values) => {
  try {
    isSubmitting.value = true
    const payload = {
      "username": username.value,
      "password": password.value,
    }
    const res = await dataApi.login(payload)
    useEncryptedCookie("token", res.data.data.access_token);
    useEncryptedCookie("name", res.data.data?.user?.name || '');

    navigateTo(`/`);
  } catch (error) {
    showToast({
      color: "error",
      title: "ผิดพลาด!",
      msg: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ",
      isError: true,
      life: false
    });
    console.error(error)
  } finally {
    // Reset the form after submission
    isSubmitting.value = false;
  }


});

// ฟังก์ชันสำหรับ toggle password visibility
const togglePasswordVisibility = () => {
  show.value = !show.value;
};

// กำหนด page meta
definePageMeta({
  layout: "utility",
});
</script>



<template>
  <div class="authincation vh-100">
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
          <div class="login-form">
            <div class="text-center">
              <h3 class="title">Sign In</h3>
              <p>Sign in to your account to start using W3CRM</p>
            </div>

            <Form @submit="onSubmit">
              <!-- Username Field -->
              <div class="mb-4">
                <label class="mb-1 text-dark">ชื่อผู้ใช้</label>
                <input type="text" v-model="username" class="form-control form-control" />
                <div class="invalid" v-if="errors?.username">{{ errors.username }}</div>

              </div>

              <!-- Password Field -->
              <div class="mb-4 ">
                <div class="position-relative">
                  <label class="mb-1 text-dark">Password</label>
                  <input v-model="password" :type="show ? 'text' : 'password'" id="dz-password" class="form-control" />
                  <span :class="`show-pass eye ${show ? 'active' : ''}`" @click="show = !show">
                    <i :class="`fa fa-eye-slash`"></i>
                    <i class="fa fa-eye"></i>
                  </span>
                </div>
                <div class="invalid" v-if="errors?.password">{{ errors.password }}</div>

              </div>

              <!-- Submit Button -->
              <div class="text-center mb-4">
                <button type="submit" :disabled="isSubmitting" class="btn btn-primary btn-block">
                  <span v-if="isSubmitting">
                    <i class="fa fa-spinner fa-spin me-2"></i>
                    กำลังเข้าสู่ระบบ...
                  </span>
                  <span v-else>เข้าสู่ระบบ</span>
                </button>
              </div>

              <!-- Social Login Section -->
              <h6 class="login-title"><span>Or continue with</span></h6>
              <div class="mb-3">
                <ul class="d-flex align-self-center justify-content-center">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/" class="fab fa-facebook-f btn-facebook"
                      aria-label="เข้าสู่ระบบด้วย Facebook"></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.google.com/" class="fab fa-google-plus-g btn-google-plus mx-2"
                      aria-label="เข้าสู่ระบบด้วย Google"></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/" class="fab fa-linkedin-in btn-linkedin me-2"
                      aria-label="เข้าสู่ระบบด้วย LinkedIn"></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/" class="fab fa-twitter btn-twitter"
                      aria-label="เข้าสู่ระบบด้วย Twitter"></a>
                  </li>
                </ul>
              </div>

              <!-- Register Link -->
              <p class="text-center">
                ยังไม่ได้สมัครสมาชิก?
                <NuxtLink class="btn-link text-primary" to="/page-register">
                  สมัครสมาชิก
                </NuxtLink>
              </p>
            </Form>
          </div>
        </div>

        <!-- Right Side Content -->
        <div class="col-xl-6 col-lg-6">
          <div class="pages-left h-100">
            <div class="login-content">
              <NuxtLink to="/">
                <img src="../../assets/images/logo-full.png" class="mb-3 logo-dark" alt="W3CRM Logo" />
              </NuxtLink>
              <NuxtLink to="/">
                <img src="../../assets/images/logi-white.png" class="mb-3 logo-light" alt="W3CRM Logo" />
              </NuxtLink>
              <p>CRM dashboard uses line charts to visualize customer-related metrics and trends over time.</p>
            </div>
            <div class="login-media text-center">
              <img src="../../assets/images/login.png" alt="Login illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>