<template>
  <CustomBreadcrumb :items="[
    { label: 'Home', icon: 'HomeIcon', to: '/' },
    { label: 'Business I18n ', icon: 'UsersIcon', to: '/business_i18n' }
  ]" title="จัดการข้อมูลธุรกิจ" />
  <div class="container-fluid">
    <pre>
      {{ errors }}
    </pre>
    <div class="row justify-content-center w-100">
      <div class="col-lg-12">
        <div class="card shadow-sm">
          <div class="card-header bg-info text-white">
            <h2 class="card-title mb-0">
              <i class="fas fa-building me-2"></i>
              สร้างธุรกิจใหม่ - Create New Business
            </h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm" novalidate>
              <!-- Service & Business Type Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-cogs me-2"></i>
                  ข้อมูลประเภทธุรกิจ
                </h3>
                <div class="row">
                  <div class="col-md-4">
                    <label class="form-label">ประเภทบริการ <span class="text-danger">*</span></label>
                    <!-- <select
                      v-model="form.service_type_id"
                      class="form-select"
                      :class="{ 'is-invalid': errors.service_type_id }"
                      required
                    >
                      <option value="">เลือกประเภทบริการ</option>
                      <option value="56050013-a67b-40f8-b6ca-d0675d840804">บริการอาหาร</option>
                      <option value="other">อื่นๆ</option>
                    </select> -->
                    <CustomSelect v-model="form.service_type_id" :class="{ 'is-invalid': errors.service_type_id }"
                      placeholder="เลือกประเภทบริการ" :options="[
                        { label: '56050013-a67b-40f8-b6ca-d0675d840804', value: 'บริการอาหาร' },
                        { label: '中other文', value: 'อื่นๆ' },
                      ]" label-field="label" value-field="value" />
                    <div class="invalid">{{ errors.service_type_id }}</div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">ประเภทธุรกิจ <span class="text-danger">*</span></label>
                    <!-- <select
                      v-model="form.business_type_id"
                      class="form-select"
                      :class="{ 'is-invalid': errors.business_type_id }"
                      required
                    >
                      <option value="">เลือกประเภทธุรกิจ</option>
                      <option value="0e7ebeb2-398d-40fd-9df6-2365a2a0f149">ร้านอาหาร</option>
                      <option value="other">อื่นๆ</option>
                    </select> -->
                    <CustomSelect v-model="form.business_type_id" :class="{ 'is-invalid': errors.business_type_id }"
                      placeholder="เลือกประเภทธุรกิจ" :options="[
                        { label: 'ร้านอาหาร', value: '0e7ebeb2-398d-40fd-9df6-2365a2a0f149' },
                        { label: 'อื่นๆ', value: 'other' },
                      ]" label-field="label" value-field="value" />
                    <div class="invalid" v-if="errors.business_type_id">{{ errors.business_type_id }}</div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">รูปแบบธุรกิจ <span class="text-danger">*</span></label>
                    <!-- <select v-model="form.business_model_id" class="form-select"
                      :class="{ 'is-invalid': errors.business_model_id }" required>
           
                      <option value="6ce4c318-7c60-4951-acb4-e001107f9013">ร้านค้าปลีก</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                    <div class="invalid" v-if="errors.business_model_id">{{ errors.business_model_id }}</div> -->
                    <CustomSelect v-model="form.business_model_id" :class="{ 'is-invalid': errors.business_model_id }"
                      placeholder="ประเภทธุรกิจ" :options="[
                        { label: 'เลือกรูปแบบธุรกิจ', value: '' },
                        { label: 'ร้านอาหาร', value: '0e7ebeb2-398d-40fd-9df6-2365a2a0f149' },
                        { label: 'อื่นๆ', value: 'other' },
                      ]" label-field="label" value-field="value" />
                    <div class="invalid" v-if="errors.business_model_id">{{ errors.business_model_id }}</div>
                  </div>
                </div>
              </div>

              <!-- Business Information Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-building me-2"></i>
                  ข้อมูลบริษัท
                </h3>
                <!-- <div class="language-tabs">
                  <div v-for="lang in languages" :key="lang.code" class="language-tab"
                    :class="{ active: currentLang === lang.code }" @click="currentLang = lang.code">
                    {{ lang.name }}
                  </div>
                </div> -->
                <div class="w-100 language-tabs">
                  <!-- <select v-model="currentLang" class="form-select" required>
                    <option value="" disabled>เลือกภาษา</option>
                    <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                      {{ lang.name }}
                    </option>
                  </select> -->
                  <CustomSelect v-model="currentLang" placeholder="ประเภทธุรกิจ" :options="languages" label-field="name"
                    value-field="code" />

                </div>

                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">ชื่อบริษัท <span class="text-danger">*</span></label>
                    <input v-model="form.business_name[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.business_name }" :placeholder="getPlaceholder('business_name')"
                      required />
                    <div class="invalid" v-if="errors.business_name">{{ errors.business_name }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">ผู้ติดต่อ <span class="text-danger">*</span></label>
                    <input v-model="form.business_person[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.business_person }" :placeholder="getPlaceholder('business_person')"
                      required />
                    <div class="invalid" v-if="errors.business_person">{{ errors.business_person }}</div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="form-label">ที่อยู่บริษัท <span class="text-danger">*</span></label>
                    <textarea v-model="form.business_address[currentLang]" class="form-control"
                      :class="{ 'is-invalid': errors.business_address }" rows="3"
                      :placeholder="getPlaceholder('business_address')" required></textarea>
                    <div class="invalid" v-if="errors.business_address">{{ errors.business_address }}</div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="form-label">เบอร์ติดต่อ <span class="text-danger">*</span></label>
                    <input v-model="form.business_contact[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.business_contact }"
                      :placeholder="getPlaceholder('business_contact')" required />
                    <div class="invalid" v-if="errors.business_contact">{{ errors.business_contact }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">อีเมล <span class="text-danger">*</span></label>
                    <input v-model="form.business_email[currentLang]" type="email" class="form-control"
                      :class="{ 'is-invalid': errors.business_email }" :placeholder="getPlaceholder('business_email')"
                      required />
                    <div class="invalid" v-if="errors.business_email">{{ errors.business_email }}</div>
                  </div>
                </div>
              </div>

              <!-- Shop Information Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-store me-2"></i>
                  ข้อมูลร้านค้า
                </h3>
                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">ชื่อร้าน <span class="text-danger">*</span></label>
                    <input v-model="form.shop_name[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.shop_name }" :placeholder="getPlaceholder('shop_name')" required />
                    <div class="invalid" v-if="errors.shop_name">{{ errors.shop_name }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">เบอร์ร้าน <span class="text-danger">*</span></label>
                    <input v-model="form.shop_phone[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.shop_phone }" :placeholder="getPlaceholder('shop_phone')"
                      required />
                    <div class="invalid" v-if="errors.shop_phone">{{ errors.shop_phone }}</div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="form-label">ที่อยู่ร้าน <span class="text-danger">*</span></label>
                    <textarea v-model="form.shop_address[currentLang]" class="form-control"
                      :class="{ 'is-invalid': errors.shop_address }" rows="3"
                      :placeholder="getPlaceholder('shop_address')" required></textarea>
                    <div class="invalid" v-if="errors.shop_address">{{ errors.shop_address }}</div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="form-label">เวลาทำการ <span class="text-danger">*</span></label>
                    <input v-model="form.shop_time[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.shop_time }" placeholder="08:00 - 18:00" required />
                    <div class="invalid" v-if="errors.shop_time">{{ errors.shop_time }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">รายละเอียดร้าน <span class="text-danger">*</span></label>
                    <input v-model="form.shop_details[currentLang]" type="text" class="form-control"
                      :class="{ 'is-invalid': errors.shop_details }" :placeholder="getPlaceholder('shop_details')"
                      required />
                    <div class="invalid" v-if="errors.shop_details">{{ errors.shop_details }}</div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="form-label">ละติจูด <span class="text-danger">*</span></label>
                    <input v-model="form.latitude" type="number" class="form-control"
                      :class="{ 'is-invalid': errors.latitude }" step="0.000001" placeholder="13.2" required />
                    <div class="invalid" v-if="errors.latitude">{{ errors.latitude }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">ลองจิจูด <span class="text-danger">*</span></label>
                    <input v-model="form.longitude" type="number" class="form-control"
                      :class="{ 'is-invalid': errors.longitude }" step="0.000001" placeholder="13.2" required />
                    <div class="invalid" v-if="errors.longitude">{{ errors.longitude }}</div>
                  </div>
                </div>
              </div>

              <!-- Images Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-images me-2"></i>
                  รูปภาพ
                </h3>
                <!-- รูปปก -->
                <div class="row">
                  
                  <div class="col-md-6">
                    {{ errors?.image_cover }}
                    <label class="form-label">รูปปก <span class="text-danger">*</span></label>
                    <CustomUpload v-model="form.image_cover" :multiple="false" accept="image/*" label="เลือกรูปปก" />
                    <div class="invalid" >{{ errors?.image_cover || "" }}</div>
                  </div>
                  <!-- รูปโปรไฟล์ -->
                  <div class="col-md-6">
                    <label class="form-label">รูปโปรไฟล์ <span class="text-danger">*</span></label>
                    <CustomUpload v-model="form.image_profile" :multiple="false" accept="image/*"
                      label="เลือกรูปโปรไฟล์" />
                    <div class="invalid" v-if="errors.image_profile">{{ errors.image_profile }}</div>
                  </div>
                </div>
                <!-- รูปภาพธุรกิจ -->
                <div class="mt-4">
                  <label class="form-label">รูปภาพธุรกิจ <span class="text-danger">*</span></label>
                  <CustomUpload v-model="form.business_img" :multiple="true" accept="image/*"
                    label="เลือกรูปภาพธุรกิจ (หลายรูป)" />
                  <div class="invalid" v-if="errors.business_img">{{ errors.business_img }}</div>
                </div>
                <!-- เอกสารธุรกิจ -->
                <div class="mt-4">
                  <label class="form-label">เอกสารธุรกิจ <span class="text-danger">*</span></label>
                  <CustomUpload v-model="form.business_documents" :multiple="true" accept="image/*,.pdf,.doc,.docx"
                    label="เลือกเอกสารธุรกิจ" />
                  <div class="invalid " v-if="errors.business_documents">{{ errors.business_documents
                  }}</div>
                </div>
              </div>

              <!-- Business List Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-list me-2"></i>
                  รายการสินค้า/บริการ
                </h3>
                <div v-for="(item, index) in businessList" :key="index" class="business-list-item">
                  <div class="row">
                    <div class="col-md-8">
                      <label class="form-label">ชื่อสินค้า/บริการ <span class="text-danger">*</span></label>
                      <input v-model="item.name[currentLang]" type="text" class="form-control"
                        :placeholder="getPlaceholder('product_name')" required />
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">ราคา <span class="text-danger">*</span></label>
                      <input v-model="item.price" type="number" class="form-control" placeholder="ราคา" required />
                    </div>
                  </div>
                  <div class="mt-2">
                    <button v-if="businessList.length > 1" type="button" class="btn btn-danger btn-sm"
                      @click="removeBusinessItem(index)">
                      ลบรายการ
                    </button>
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" @click="addBusinessItem">
                  <i class="fas fa-plus me-2"></i>เพิ่มรายการ
                </button>
              </div>

              <!-- Social Media Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-share-alt me-2"></i>
                  โซเชียลมีเดีย
                </h3>
                <div v-for="(social, index) in socialMedia" :key="index" class="social-media-item">
                  <div class="row">
                    <div class="col-md-4">
                      <label class="form-label">ประเภทโซเชียล <span class="text-danger">*</span></label>
                      <select v-model="social.type" class="form-select" required>
                        <option value="">เลือกประเภท</option>
                        <option value="8eb5b102-4c6c-445b-9cb9-b52f3cf4fb01">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="line">Line</option>
                        <option value="twitter">Twitter</option>
                      </select>
                    </div>
                    <div class="col-md-8">
                      <label class="form-label">ลิงก์ <span class="text-danger">*</span></label>
                      <input v-model="social.link[currentLang]" type="url" class="form-control"
                        :placeholder="getSocialPlaceholder(currentLang)" required />
                    </div>
                  </div>
                  <div class="mt-2">
                    <button v-if="socialMedia.length > 1" type="button" class="btn btn-danger btn-sm"
                      @click="removeSocialItem(index)">
                      ลบโซเชียล
                    </button>
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" @click="addSocialItem">
                  <i class="fas fa-plus me-2"></i>เพิ่มโซเชียล
                </button>
              </div>

              <!-- Open Days Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-calendar me-2"></i>
                  วันที่เปิดทำการ
                </h3>
                <div class="row">
                  <div class="col-md-12">
                    <label class="form-label">เลือกวันที่เปิดทำการ <span class="text-danger">*</span></label>
                    <div v-for="day in weekDays" :key="day.value" class="day-checkbox">
                      <input v-model="form.open_days" type="checkbox" :value="day.value" class="form-check-input"
                        :id="day.value" />
                      <label :for="day.value" class="form-check-label">
                        {{ day.label }}
                      </label>
                    </div>
                    <div class="invalid" v-if="errors.open_days">{{ errors.open_days }}</div>
                  </div>
                </div>
              </div>

              <!-- Status Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-toggle-on me-2"></i>
                  สถานะ
                </h3>
                <div class="form-check form-switch">
                  <input v-model="form.status" class="form-check-input" type="checkbox" id="status" />
                  <label class="form-check-label" for="status">
                    เปิดใช้งาน
                  </label>
                </div>
              </div>

              <!-- Submit Section -->
              <div class="submit-section">
                <button type="submit" class="btn btn-primary btn-lg">
                  <i class="fas fa-save me-2"></i>
                  สร้างธุรกิจ
                </button>
                <button type="button" class="btn btn-secondary btn-lg ms-3" @click="resetForm">
                  <i class="fas fa-redo me-2"></i>
                  รีเซ็ต
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'

// Language settings
const currentLang = ref('th')
const languages = [
  { code: "th", name: "🇹🇭 ไทย" },
  { code: "en", name: "🇺🇸 English" },
  { code: "cn", name: "🇨🇳 中文" },
];

// Week days with i18n mapping
const weekDays = [
  {
    value: 'monday',
    label: 'จันทร์ (Monday)',
    i18n: {
      th: "จันทร์",
      en: "Monday",
      cn: "星期一"
    }
  },
  {
    value: 'tuesday',
    label: 'อังคาร (Tuesday)',
    i18n: {
      th: "อังคาร",
      en: "Tuesday",
      cn: "星期二"
    }
  },
  {
    value: 'wednesday',
    label: 'พุธ (Wednesday)',
    i18n: {
      th: "พุธ",
      en: "Wednesday",
      cn: "星期三"
    }
  },
  {
    value: 'thursday',
    label: 'พฤหัสบดี (Thursday)',
    i18n: {
      th: "พฤหัสบดี",
      en: "Thursday",
      cn: "星期四"
    }
  },
  {
    value: 'friday',
    label: 'ศุกร์ (Friday)',
    i18n: {
      th: "ศุกร์",
      en: "Friday",
      cn: "星期五"
    }
  },
  {
    value: 'saturday',
    label: 'เสาร์ (Saturday)',
    i18n: {
      th: "เสาร์",
      en: "Saturday",
      cn: "星期六"
    }
  },
  {
    value: 'sunday',
    label: 'อาทิตย์ (Sunday)',
    i18n: {
      th: "อาทิตย์",
      en: "Sunday",
      cn: "星期日"
    }
  }
]

// Form data
const form = reactive({
  service_type_id: '',
  business_type_id: '',
  business_model_id: '',
  business_name: { th: '', en: '', cn: '' },
  business_person: { th: '', en: '', cn: '' },
  business_address: { th: '', en: '', cn: '' },
  business_contact: { th: '', en: '', cn: '' },
  business_email: { th: '', en: '', cn: '' },
  shop_name: { th: '', en: '', cn: '' },
  shop_phone: { th: '', en: '', cn: '' },
  shop_address: { th: '', en: '', cn: '' },
  shop_time: { th: '', en: '', cn: '' },
  shop_details: { th: '', en: '', cn: '' },
  latitude: '',
  longitude: '',
  image_cover: null,
  image_profile: null,
  business_img: null,
  business_documents: null,
  open_days: [],
  status: true
})

// Business list
const businessList = ref([
  {
    name: { th: '', en: '', cn: '' },
    price: ''
  }
])

// Social media
const socialMedia = ref([
  {
    type: '',
    link: { th: '', en: '', cn: '' }
  }
])

// Computed errors - จะอัพเดททันทีที่ข้อมูลเปลี่ยน
const errors = computed(() => {
  const validationErrors = {}

  // ตรวจสอบ field ที่จำเป็น
  const mustFields = ['service_type_id', 'business_type_id', 'business_model_id']
  mustFields.forEach(field => {
    if (!form[field]) {
      validationErrors[field] = 'กรุณากรอกข้อมูลในฟิลด์นี้'
    }
  })

  // ตรวจสอบ business_name ในภาษาไทย
  if (!form.business_name.th || form.business_name.th.trim() === '') {
    validationErrors.business_name = 'กรุณากรอกชื่อธุรกิจ (ภาษาไทย)'
  }

  // ตรวจสอบ business_person ในภาษาไทย
  if (!form.business_person.th || form.business_person.th.trim() === '') {
    validationErrors.business_person = 'กรุณากรอกผู้ติดต่อ (ภาษาไทย)'
  }

  // ตรวจสอบ business_address ในภาษาไทย
  if (!form.business_address.th || form.business_address.th.trim() === '') {
    validationErrors.business_address = 'กรุณากรอกที่อยู่บริษัท (ภาษาไทย)'
  }

  // ตรวจสอบ business_contact ในภาษาไทย
  if (!form.business_contact.th || form.business_contact.th.trim() === '') {
    validationErrors.business_contact = 'กรุณากรอกเบอร์ติดต่อ (ภาษาไทย)'
  }

  // ตรวจสอบ business_email ในภาษาไทย
  if (!form.business_email.th || form.business_email.th.trim() === '') {
    validationErrors.business_email = 'กรุณากรอกอีเมล (ภาษาไทย)'
  } else {
    // ตรวจสอบรูปแบบอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.business_email.th)) {
      validationErrors.business_email = 'รูปแบบอีเมลไม่ถูกต้อง'
    }
  }

  // ตรวจสอบ shop_name ในภาษาไทย
  if (!form.shop_name.th || form.shop_name.th.trim() === '') {
    validationErrors.shop_name = 'กรุณากรอกชื่อร้าน (ภาษาไทย)'
  }

  // ตรวจสอบ shop_phone ในภาษาไทย
  if (!form.shop_phone.th || form.shop_phone.th.trim() === '') {
    validationErrors.shop_phone = 'กรุณากรอกเบอร์ร้าน (ภาษาไทย)'
  }

  // ตรวจสอบ shop_address ในภาษาไทย
  if (!form.shop_address.th || form.shop_address.th.trim() === '') {
    validationErrors.shop_address = 'กรุณากรอกที่อยู่ร้าน (ภาษาไทย)'
  }

  // ตรวจสอบ shop_time ในภาษาไทย
  if (!form.shop_time.th || form.shop_time.th.trim() === '') {
    validationErrors.shop_time = 'กรุณากรอกเวลาทำการ (ภาษาไทย)'
  }

  // ตรวจสอบ shop_details ในภาษาไทย
  if (!form.shop_details.th || form.shop_details.th.trim() === '') {
    validationErrors.shop_details = 'กรุณากรอกรายละเอียดร้าน (ภาษาไทย)'
  }

  // ตรวจสอบ latitude
  if (!form.latitude) {
    validationErrors.latitude = 'กรุณากรอกละติจูด'
  } else if (form.latitude < -90 || form.latitude > 90) {
    validationErrors.latitude = 'ละติจูดต้องอยู่ระหว่าง -90 ถึง 90'
  }

  // ตรวจสอบ longitude
  if (!form.longitude) {
    validationErrors.longitude = 'กรุณากรอกลองจิจูด'
  } else if (form.longitude < -180 || form.longitude > 180) {
    validationErrors.longitude = 'ลองจิจูดต้องอยู่ระหว่าง -180 ถึง 180'
  }

  // ตรวจสอบรูปภาพ
  if (!form.image_cover) {
    validationErrors.image_cover = 'กรุณาเลือกรูปปก'
  }

  if (!form.image_profile) {
    validationErrors.image_profile = 'กรุณาเลือกรูปโปรไฟล์'
  }

  if (!form.business_img || (form.business_img && form.business_img.length === 0)) {
    validationErrors.business_img = 'กรุณาเลือกรูปภาพธุรกิจอย่างน้อย 1 รูป'
  }

  if (!form.business_documents || (form.business_documents && form.business_documents.length === 0)) {
    validationErrors.business_documents = 'กรุณาเลือกเอกสารธุรกิจอย่างน้อย 1 ไฟล์'
  }

  // ตรวจสอบรายการสินค้า/บริการ
  businessList.value.forEach((item, index) => {
    if (!item.name.th || item.name.th.trim() === '') {
      validationErrors[`business_list_${index}`] = `กรุณากรอกชื่อสินค้า/บริการในรายการที่ ${index + 1}`
    }

    if (!item.price || item.price <= 0) {
      validationErrors[`business_list_price_${index}`] = `กรุณากรอกราคาที่ถูกต้องในรายการที่ ${index + 1}`
    }
  })

  // ตรวจสอบโซเชียลมีเดีย
  socialMedia.value.forEach((item, index) => {
    if (!item.type) {
      validationErrors[`social_media_type_${index}`] = `กรุณาเลือกประเภทโซเชียลในรายการที่ ${index + 1}`
    }

    if (!item.link.th || item.link.th.trim() === '') {
      validationErrors[`social_media_link_${index}`] = `กรุณากรอกลิงก์โซเชียลในรายการที่ ${index + 1}`
    } else {
      // ตรวจสอบรูปแบบ URL
      const urlRegex = /^https?:\/\/.+/
      if (!urlRegex.test(item.link.th)) {
        validationErrors[`social_media_link_${index}`] = `รูปแบบ URL ไม่ถูกต้องในรายการที่ ${index + 1}`
      }
    }
  })

  // ตรวจสอบวันที่เปิดทำการ
  if (form.open_days.length === 0) {
    validationErrors.open_days = 'กรุณาเลือกวันที่เปิดทำการอย่างน้อย 1 วัน'
  }

  return validationErrors
})

// Computed สำหรับเช็คว่าฟอร์มถูกต้องหรือไม่
const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0
})

// Helper functions
const getPlaceholder = (field) => {
  const placeholders = {
    th: {
      business_name: 'ชื่อบริษัท',
      business_person: 'ผู้ติดต่อ',
      business_address: 'ที่อยู่บริษัท',
      business_contact: 'เบอร์ติดต่อ',
      business_email: 'อีเมล',
      shop_name: 'ชื่อร้าน',
      shop_phone: 'เบอร์ร้าน',
      shop_address: 'ที่อยู่ร้าน',
      shop_details: 'รายละเอียดร้าน',
      product_name: 'ชื่อสินค้า/บริการ'
    },
    en: {
      business_name: 'Company Name',
      business_person: 'Contact Person',
      business_address: 'Company Address',
      business_contact: 'Contact Number',
      business_email: 'Email',
      shop_name: 'Shop Name',
      shop_phone: 'Shop Phone',
      shop_address: 'Shop Address',
      shop_details: 'Shop Details',
      product_name: 'Product/Service Name'
    },
    cn: {
      business_name: '公司名称',
      business_person: '联系人',
      business_address: '公司地址',
      business_contact: '联系电话',
      business_email: '邮箱',
      shop_name: '商店名称',
      shop_phone: '商店电话',
      shop_address: '商店地址',
      shop_details: '商店详情',
      product_name: '产品/服务名称'
    }
  }
  return placeholders[currentLang.value]?.[field] || ''
}

const getSocialPlaceholder = (lang) => {
  const placeholders = {
    th: 'https://facebook.com/mypage',
    en: 'https://facebook.com/mypage-en',
    cn: 'https://facebook.com/mypage-cn'
  }
  return placeholders[lang] || placeholders.th
}

// Business list management
const addBusinessItem = () => {
  businessList.value.push({
    name: { th: '', en: '', cn: '' },
    price: ''
  })
}

const removeBusinessItem = (index) => {
  if (businessList.value.length > 1) {
    businessList.value.splice(index, 1)
  }
}

// Social media management
const addSocialItem = () => {
  socialMedia.value.push({
    type: '',
    link: { th: '', en: '', cn: '' }
  })
}

const removeSocialItem = (index) => {
  if (socialMedia.value.length > 1) {
    socialMedia.value.splice(index, 1)
  }
}

// Submit form
const submitForm = async () => {
  if (!isFormValid.value) {
    console.log('Form validation failed:', errors.value)
    return
  }

  try {
    const formData = new FormData()

    // Basic fields
    formData.append('service_type_id', form.service_type_id)
    formData.append('business_type_id', form.business_type_id)
    formData.append('business_model_id', form.business_model_id)

    // I18n fields
    formData.append('business_name_i18n', JSON.stringify(form.business_name))
    formData.append('business_person_i18n', JSON.stringify(form.business_person))
    formData.append('business_address_i18n', JSON.stringify(form.business_address))
    formData.append('business_contact_i18n', JSON.stringify(form.business_contact))
    formData.append('business_email_i18n', JSON.stringify(form.business_email))
    formData.append('shop_name_i18n', JSON.stringify(form.shop_name))
    formData.append('shop_address_i18n', JSON.stringify(form.shop_address))
    formData.append('shop_time_i18n', JSON.stringify(form.shop_time))
    formData.append('shop_phone_i18n', JSON.stringify(form.shop_phone))
    formData.append('shop_details_i18n', JSON.stringify(form.shop_details))

    // Latitude and longitude as i18n (same value for all languages)
    const latLngData = {
      th: parseFloat(form.latitude),
      en: parseFloat(form.latitude),
      cn: parseFloat(form.latitude)
    }
    const lonLngData = {
      th: parseFloat(form.longitude),
      en: parseFloat(form.longitude),
      cn: parseFloat(form.longitude)
    }
    formData.append('latitude_i18n', JSON.stringify(latLngData))
    formData.append('longitude_i18n', JSON.stringify(lonLngData))

    // Images
    if (form.image_cover) {
      formData.append('image_cover', form.image_cover)
    }
    if (form.image_profile) {
      formData.append('image_profile', form.image_profile)
    }

    // Business images (multiple)
    if (form.business_img) {
      if (form.business_img.length) {
        Array.from(form.business_img).forEach(file => {
          formData.append('business_img', file)
        })
      } else {
        formData.append('business_img', form.business_img)
      }
    }

    // Business documents (multiple)
    if (form.business_documents) {
      if (form.business_documents.length) {
        Array.from(form.business_documents).forEach(file => {
          formData.append('business_documents', file)
        })
      } else {
        formData.append('business_documents', form.business_documents)
      }
    }

    // Business list
    const businessListData = businessList.value.map(item => ({
      business_list_name_i18n: item.name,
      business_list_price_i18n: {
        th: parseFloat(item.price),
        en: parseFloat(item.price),
        cn: parseFloat(item.price)
      }
    }))
    formData.append('business_list', JSON.stringify(businessListData))

    // Social media
    const socialMediaData = socialMedia.value.map(item => ({
      social_media_id: item.type,
      social_media_link_i18n: item.link
    }))
    formData.append('business_social_media', JSON.stringify(socialMediaData))

    // Open days
    const openDaysData = form.open_days.map(dayValue => {
      const dayInfo = weekDays.find(day => day.value === dayValue)
      return {
        day_name_i18n: dayInfo.i18n
      }
    })
    formData.append('business_open_date', JSON.stringify(openDaysData))

    // Status
    formData.append('Status', form.status.toString())

    // Submit the form (replace with actual API call)
    console.log('Submitting form data:', formData)
    formData.forEach((value, key) => {
      console.log(`${key}:`, value)
    })

    alert('Form submitted successfully! Check console for data.')

  } catch (error) {
    console.error('Error submitting form:', error)
    alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
  }
}

// Reset form
const resetForm = () => {
  // Reset form data
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'object' && form[key] !== null && !Array.isArray(form[key])) {
      // Reset i18n objects
      Object.keys(form[key]).forEach(lang => {
        form[key][lang] = ''
      })
    } else if (Array.isArray(form[key])) {
      form[key] = []
    } else if (key === 'status') {
      form[key] = true
    } else {
      form[key] = key.includes('latitude') || key.includes('longitude') ? '' : ''
    }
  })

  // Reset business list
  businessList.value = [{
    name: { th: '', en: '', cn: '' },
    price: ''
  }]

  // Reset social media
  socialMedia.value = [{
    type: '',
    link: { th: '', en: '', cn: '' }
  }]

  // Reset language
  currentLang.value = 'th'
}
</script>