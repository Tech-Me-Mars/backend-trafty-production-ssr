<script setup lang="ts">
import CustomSelect from "~/elements/CustomSelect.vue";

import { useForm, useField } from "vee-validate"
import * as yup from "yup"

const genderOptions = [
    { title: "กรุณาเลือก", value: "" },
    { title: "ชาย", value: "male" },
    { title: "หญิง", value: "female" },
    { title: "อื่น ๆ", value: "other" },
];
// schema validation
const schema = yup.object({
    first_name: yup.string().required("กรุณากรอกชื่อ"),
    last_name: yup.string().required("กรุณากรอกนามสกุล"),
    cid: yup.string().required("กรุณากรอกเลขบัตรประชาชน").length(13, "เลขบัตรต้องมี 13 หลัก"),
    tel: yup.string().required("กรุณากรอกเบอร์โทร"),
    gender: yup.string().required("กรุณาเลือกเพศ"),
    birthdate: yup.date().required("กรุณาเลือกเพศ"),
})

// useForm
const { handleSubmit, meta, errors } = useForm({
    validationSchema: schema,
})

// useField (Composition API, ไม่ใช้ <Field>)
const { value: first_name } = useField<string>("first_name")
const { value: last_name } = useField<string>("last_name")
const { value: cid } = useField<string>("cid")
const { value: tel } = useField<string>("tel")
const { value: gender } = useField<string>("gender")
const { value: birthdate } = useField<string>("birthdate")

// submit handler
const onSubmit = handleSubmit((values) => {
    console.log("✅ ส่งข้อมูล", values)
})
</script>
<template>
  <div class="container mt-5">
    <h2 class="mb-4">ลงทะเบียนผู้ป่วย</h2>

    <form @submit.prevent="onSubmit" class="needs-validation">
      <!-- ชื่อ -->
      <div class="mb-3 row">
        <label class="col-lg-3 col-form-label">ชื่อ *</label>
        <div class="col-lg-6">
          <input v-model="first_name" type="text" class="form-control" :class="{ 'is-invalid': errors.first_name }" />
          <div class="invalid-feedback">{{ errors.first_name }}</div>
        </div>
      </div>

      <!-- นามสกุล -->
      <div class="mb-3 row">
        <label class="col-lg-3 col-form-label">นามสกุล *</label>
        <div class="col-lg-6">
          <input v-model="last_name" type="text" class="form-control" :class="{ 'is-invalid': errors.last_name }" />
          <div class="invalid-feedback">{{ errors.last_name }}</div>
        </div>
      </div>

      <!-- เลขบัตรประชาชน -->
      <div class="mb-3 row">
        <label class="col-lg-3 col-form-label">เลขบัตรประชาชน *</label>
        <div class="col-lg-6">
          <input v-model="cid" type="text" maxlength="13" class="form-control" :class="{ 'is-invalid': errors.cid }" />
          <div class="invalid-feedback">{{ errors.cid }}</div>
        </div>
      </div>

      <!-- เบอร์โทร -->
      <div class="mb-3 row">
        <label class="col-lg-3 col-form-label">เบอร์โทร *</label>
        <div class="col-lg-6">
          <input v-model="tel" type="tel" class="form-control" :class="{ 'is-invalid': errors.tel }" />
          <div class="invalid-feedback">{{ errors.tel }}</div>
        </div>
      </div>

      <!-- วันเกิด -->
      <div class="mb-3 row">
        <label class="col-lg-3 col-form-label">วันเกิด</label>
        <div class="col-lg-6">
          <input v-model="birthdate" type="date" class="form-control" />
          <div class="invalid-feedback">{{ errors.birthdate }}</div>
        </div>
      </div>

      <!-- เพศ -->
      <div class="mb-3 row">
        <label class="col-lg-3 col-form-label">เพศ *</label>
        <div class="col-lg-6">
          <CustomSelect v-model="gender" :options="genderOptions" :class="{ 'is-invalid': errors.gender }" />
          <div v-if="errors.gender" class="invalid-feedback">{{ errors.gender }}</div>
        </div>
      </div>

      <!-- ปุ่ม -->
      <div class="row">
        <div class="col-lg-9 offset-lg-3 text-end">
          <button class="btn btn-primary" type="submit">ลงทะเบียน</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.invalid-feedback {
    display: block;
}
</style>
