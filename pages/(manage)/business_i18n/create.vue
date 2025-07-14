<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
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
                    <select
                      v-model="form.service_type_id"
                      class="form-select"
                      :class="{ 'is-invalid': errors.service_type_id }"
                      required
                    >
                      <option value="">เลือกประเภทบริการ</option>
                      <option value="56050013-a67b-40f8-b6ca-d0675d840804">บริการอาหาร</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                    <div class="error-message" v-if="errors.service_type_id">{{ errors.service_type_id }}</div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">ประเภทธุรกิจ <span class="text-danger">*</span></label>
                    <select
                      v-model="form.business_type_id"
                      class="form-select"
                      :class="{ 'is-invalid': errors.business_type_id }"
                      required
                    >
                      <option value="">เลือกประเภทธุรกิจ</option>
                      <option value="0e7ebeb2-398d-40fd-9df6-2365a2a0f149">ร้านอาหาร</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                    <div class="error-message" v-if="errors.business_type_id">{{ errors.business_type_id }}</div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">รูปแบบธุรกิจ <span class="text-danger">*</span></label>
                    <select
                      v-model="form.business_model_id"
                      class="form-select"
                      :class="{ 'is-invalid': errors.business_model_id }"
                      required
                    >
                      <option value="">เลือกรูปแบบธุรกิจ</option>
                      <option value="6ce4c318-7c60-4951-acb4-e001107f9013">ร้านค้าปลีก</option>
                      <option value="other">อื่นๆ</option>
                    </select>
                    <div class="error-message" v-if="errors.business_model_id">{{ errors.business_model_id }}</div>
                  </div>
                </div>
              </div>

              <!-- Business Information Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-building me-2"></i>
                  ข้อมูลบริษัท
                </h3>
                <div class="language-tabs">
                  <div
                    v-for="lang in languages"
                    :key="lang.code"
                    class="language-tab"
                    :class="{ active: currentLang === lang.code }"
                    @click="currentLang = lang.code"
                  >
                    {{ lang.name }}
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">ชื่อบริษัท <span class="text-danger">*</span></label>
                    <input
                      v-model="form.business_name[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_name }"
                      :placeholder="getPlaceholder('business_name')"
                      required
                    />
                    <div class="error-message" v-if="errors.business_name">{{ errors.business_name }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">ผู้ติดต่อ <span class="text-danger">*</span></label>
                    <input
                      v-model="form.business_person[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_person }"
                      :placeholder="getPlaceholder('business_person')"
                      required
                    />
                    <div class="error-message" v-if="errors.business_person">{{ errors.business_person }}</div>
                  </div>
                </div>
                
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="form-label">ที่อยู่บริษัท <span class="text-danger">*</span></label>
                    <textarea
                      v-model="form.business_address[currentLang]"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_address }"
                      rows="3"
                      :placeholder="getPlaceholder('business_address')"
                      required
                    ></textarea>
                    <div class="error-message" v-if="errors.business_address">{{ errors.business_address }}</div>
                  </div>
                </div>
                
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="form-label">เบอร์ติดต่อ <span class="text-danger">*</span></label>
                    <input
                      v-model="form.business_contact[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_contact }"
                      :placeholder="getPlaceholder('business_contact')"
                      required
                    />
                    <div class="error-message" v-if="errors.business_contact">{{ errors.business_contact }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">อีเมล <span class="text-danger">*</span></label>
                    <input
                      v-model="form.business_email[currentLang]"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_email }"
                      :placeholder="getPlaceholder('business_email')"
                      required
                    />
                    <div class="error-message" v-if="errors.business_email">{{ errors.business_email }}</div>
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
                    <input
                      v-model="form.shop_name[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.shop_name }"
                      :placeholder="getPlaceholder('shop_name')"
                      required
                    />
                    <div class="error-message" v-if="errors.shop_name">{{ errors.shop_name }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">เบอร์ร้าน <span class="text-danger">*</span></label>
                    <input
                      v-model="form.shop_phone[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.shop_phone }"
                      :placeholder="getPlaceholder('shop_phone')"
                      required
                    />
                    <div class="error-message" v-if="errors.shop_phone">{{ errors.shop_phone }}</div>
                  </div>
                </div>
                
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="form-label">ที่อยู่ร้าน <span class="text-danger">*</span></label>
                    <textarea
                      v-model="form.shop_address[currentLang]"
                      class="form-control"
                      :class="{ 'is-invalid': errors.shop_address }"
                      rows="3"
                      :placeholder="getPlaceholder('shop_address')"
                      required
                    ></textarea>
                    <div class="error-message" v-if="errors.shop_address">{{ errors.shop_address }}</div>
                  </div>
                </div>
                
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="form-label">เวลาทำการ <span class="text-danger">*</span></label>
                    <input
                      v-model="form.shop_time[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.shop_time }"
                      placeholder="08:00 - 18:00"
                      required
                    />
                    <div class="error-message" v-if="errors.shop_time">{{ errors.shop_time }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">รายละเอียดร้าน <span class="text-danger">*</span></label>
                    <input
                      v-model="form.shop_details[currentLang]"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.shop_details }"
                      :placeholder="getPlaceholder('shop_details')"
                      required
                    />
                    <div class="error-message" v-if="errors.shop_details">{{ errors.shop_details }}</div>
                  </div>
                </div>
                
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="form-label">ละติจูด <span class="text-danger">*</span></label>
                    <input
                      v-model="form.latitude"
                      type="number"
                      class="form-control"
                      :class="{ 'is-invalid': errors.latitude }"
                      step="0.000001"
                      placeholder="13.2"
                      required
                    />
                    <div class="error-message" v-if="errors.latitude">{{ errors.latitude }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">ลองจิจูด <span class="text-danger">*</span></label>
                    <input
                      v-model="form.longitude"
                      type="number"
                      class="form-control"
                      :class="{ 'is-invalid': errors.longitude }"
                      step="0.000001"
                      placeholder="13.2"
                      required
                    />
                    <div class="error-message" v-if="errors.longitude">{{ errors.longitude }}</div>
                  </div>
                </div>
              </div>

              <!-- Images Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-images me-2"></i>
                  รูปภาพ
                </h3>
                <div class="row">
                  <div class="col-md-6">
                    <label class="form-label">รูปปก <span class="text-danger">*</span></label>
                    <div class="file-upload-area">
                      <input
                        type="file"
                        class="form-control"
                        :class="{ 'is-invalid': errors.image_cover }"
                        accept="image/*"
                        @change="handleFileUpload($event, 'image_cover')"
                        required
                      />
                      <div class="mt-2">
                        <i class="fas fa-cloud-upload-alt fa-2x text-muted"></i>
                        <p class="text-muted mt-2">เลือกรูปปก</p>
                      </div>
                    </div>
                    <div class="error-message" v-if="errors.image_cover">{{ errors.image_cover }}</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">รูปโปรไฟล์ <span class="text-danger">*</span></label>
                    <div class="file-upload-area">
                      <input
                        type="file"
                        class="form-control"
                        :class="{ 'is-invalid': errors.image_profile }"
                        accept="image/*"
                        @change="handleFileUpload($event, 'image_profile')"
                        required
                      />
                      <div class="mt-2">
                        <i class="fas fa-cloud-upload-alt fa-2x text-muted"></i>
                        <p class="text-muted mt-2">เลือกรูปโปรไฟล์</p>
                      </div>
                    </div>
                    <div class="error-message" v-if="errors.image_profile">{{ errors.image_profile }}</div>
                  </div>
                </div>
                
                <div class="mt-4">
                  <label class="form-label">รูปภาพธุรกิจ <span class="text-danger">*</span></label>
                  <div class="file-upload-area">
                    <input
                      type="file"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_img }"
                      accept="image/*"
                      multiple
                      @change="handleFileUpload($event, 'business_img')"
                      required
                    />
                    <div class="mt-2">
                      <i class="fas fa-cloud-upload-alt fa-2x text-muted"></i>
                      <p class="text-muted mt-2">เลือกรูปภาพธุรกิจ (สามารถเลือกหลายรูปได้)</p>
                    </div>
                  </div>
                  <div class="error-message" v-if="errors.business_img">{{ errors.business_img }}</div>
                </div>
                
                <div class="mt-4">
                  <label class="form-label">เอกสารธุรกิจ <span class="text-danger">*</span></label>
                  <div class="file-upload-area">
                    <input
                      type="file"
                      class="form-control"
                      :class="{ 'is-invalid': errors.business_documents }"
                      accept="image/*,.pdf,.doc,.docx"
                      multiple
                      @change="handleFileUpload($event, 'business_documents')"
                      required
                    />
                    <div class="mt-2">
                      <i class="fas fa-cloud-upload-alt fa-2x text-muted"></i>
                      <p class="text-muted mt-2">เลือกเอกสารธุรกิจ (รูปภาพ, PDF, Word)</p>
                    </div>
                  </div>
                  <div class="error-message" v-if="errors.business_documents">{{ errors.business_documents }}</div>
                </div>
              </div>

              <!-- Business List Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-list me-2"></i>
                  รายการสินค้า/บริการ
                </h3>
                <div
                  v-for="(item, index) in businessList"
                  :key="index"
                  class="business-list-item"
                >
                  <div class="row">
                    <div class="col-md-8">
                      <label class="form-label">ชื่อสินค้า/บริการ <span class="text-danger">*</span></label>
                      <input
                        v-model="item.name[currentLang]"
                        type="text"
                        class="form-control"
                        :placeholder="getPlaceholder('product_name')"
                        required
                      />
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">ราคา <span class="text-danger">*</span></label>
                      <input
                        v-model="item.price"
                        type="number"
                        class="form-control"
                        placeholder="ราคา"
                        required
                      />
                    </div>
                  </div>
                  <div class="mt-2">
                    <button
                      v-if="businessList.length > 1"
                      type="button"
                      class="btn btn-danger btn-sm"
                      @click="removeBusinessItem(index)"
                    >
                      ลบรายการ
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="addBusinessItem"
                >
                  <i class="fas fa-plus me-2"></i>เพิ่มรายการ
                </button>
              </div>

              <!-- Social Media Section -->
              <div class="form-section">
                <h3 class="section-title">
                  <i class="fas fa-share-alt me-2"></i>
                  โซเชียลมีเดีย
                </h3>
                <div
                  v-for="(social, index) in socialMedia"
                  :key="index"
                  class="social-media-item"
                >
                  <div class="row">
                    <div class="col-md-4">
                      <label class="form-label">ประเภทโซเชียล <span class="text-danger">*</span></label>
                      <select
                        v-model="social.type"
                        class="form-select"
                        required
                      >
                        <option value="">เลือกประเภท</option>
                        <option value="8eb5b102-4c6c-445b-9cb9-b52f3cf4fb01">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="line">Line</option>
                        <option value="twitter">Twitter</option>
                      </select>
                    </div>
                    <div class="col-md-8">
                      <label class="form-label">ลิงก์ <span class="text-danger">*</span></label>
                      <input
                        v-model="social.link[currentLang]"
                        type="url"
                        class="form-control"
                        :placeholder="getSocialPlaceholder(currentLang)"
                        required
                      />
                    </div>
                  </div>
                  <div class="mt-2">
                    <button
                      v-if="socialMedia.length > 1"
                      type="button"
                      class="btn btn-danger btn-sm"
                      @click="removeSocialItem(index)"
                    >
                      ลบโซเชียล
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="addSocialItem"
                >
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
                    <div
                      v-for="day in weekDays"
                      :key="day.value"
                      class="day-checkbox"
                    >
                      <input
                        v-model="form.open_days"
                        type="checkbox"
                        :value="day.value"
                        class="form-check-input"
                        :id="day.value"
                      />
                      <label :for="day.value" class="form-check-label">
                        {{ day.label }}
                      </label>
                    </div>
                    <div class="error-message" v-if="errors.open_days">{{ errors.open_days }}</div>
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
                  <input
                    v-model="form.status"
                    class="form-check-input"
                    type="checkbox"
                    id="status"
                  />
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
  { code: 'th', name: 'ไทย' },
  { code: 'en', name: 'English' },
  { code: 'cn', name: '中文' }
]

// Week days
const weekDays = [
  { value: 'monday', label: 'จันทร์ (Monday)' },
  { value: 'tuesday', label: 'อังคาร (Tuesday)' },
  { value: 'wednesday', label: 'พุธ (Wednesday)' },
  { value: 'thursday', label: 'พฤหัสบดี (Thursday)' },
  { value: 'friday', label: 'ศุกร์ (Friday)' },
  { value: 'saturday', label: 'เสาร์ (Saturday)' },
  { value: 'sunday', label: 'อาทิตย์ (Sunday)' }
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

// Errors
const errors = ref({})

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

// File upload handler
const handleFileUpload = (event, field) => {
  const files = event.target.files
  if (files.length > 0) {
    form[field] = field === 'business_img' || field === 'business_documents' ? files : files[0]
  }
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

// Validation
// Validation
const validateForm = () => {
//   errors.value = {}
  
//   // Required field validation
//   const requiredFields = [
//     'service_type_id',
//     'business_type_id',
//     'business_model_id',
//     'latitude',
//     'longitude'
//   ]
  
//   const requiredI18nFields = [
//     'business_name',
//     'business_person',
//     'business_address',
//     'business_contact',
//     'business_email',
//     'shop_name',
//     'shop_phone',
//     'shop_address',
//     'shop_time',
//     'shop_details'
//   ]
  
//   // Check required fields
//   requiredFields.forEach(field => {
//     if (!form[field]) {
//       errors.value[field] = 'กรุณากรอกข้อมูลในฟิลด์นี้'
//     }
//   })
  
//   // Check i18n required fields
//   requiredI18nFields.forEach(field => {
//     if (!form[field][currentLang.value]) {
//       errors.value[field] = 'กรุณากรอกข้อมูลในฟิลด์นี้'
//     }
//   })
  
//   // Email validation
//   const emailRegex = /^
}
</script>