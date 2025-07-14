<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="table-container">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-primary">จัดการข้อมูลธุรกิจ</h2>
                        <button class="btn btn-success" @click="loadBusinessData">
                            <i class="fas fa-refresh"></i> โหลดข้อมูล
                        </button>
                    </div>

                    <div v-if="loading" class="loading-spinner">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p class="mt-2">กำลังโหลดข้อมูล...</p>
                    </div>

                    <div v-if="error" class="error-message">
                        <div class="alert alert-danger">
                            {{ error }}
                        </div>
                    </div>

                    <div v-if="!loading && !error">
                        <!-- Search Box -->
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="fas fa-search"></i>
                                    </span>
                                    <input type="text" class="form-control" placeholder="ค้นหาธุรกิจ..."
                                        v-model="searchValue">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <select v-model="selectedLanguage" class="form-select">
                                    <option value="th">ภาษาไทย</option>
                                    <option value="en">English</option>
                                    <option value="cn">中文</option>
                                </select>
                            </div>
                        </div>

                        <EasyDataTable :headers="headers" :items="businessData" :rows-per-page="10"
                            :search-value="searchValue" show-index alternating buttons-pagination class="table-striped"
                            :loading="loading">
                            <!-- Basic Info Headers -->
                            <template #header-business_name="header">
                                <div class="fw-bold text-primary">{{ header.text }}</div>
                            </template>

                            <!-- Business Basic Info -->
                            <template #item-business_name="item">
                                <div class="fw-bold text-primary">{{ getI18nText(item.business_name_i18n) }}</div>
                            </template>

                            <template #item-business_person="item">
                                <div>{{ getI18nText(item.business_person_i18n) }}</div>
                            </template>

                            <template #item-business_address="item">
                                <div class="text-truncate" style="max-width: 200px;"
                                    :title="getI18nText(item.business_address_i18n)">
                                    {{ getI18nText(item.business_address_i18n) }}
                                </div>
                            </template>

                            <template #item-business_contact="item">
                                <div>{{ getI18nText(item.business_contact_i18n) }}</div>
                            </template>

                            <template #item-business_email="item">
                                <div>{{ getI18nText(item.business_email_i18n) }}</div>
                            </template>

                            <!-- Service & Business Type -->
                            <template #item-service_type="item">
                                <span class="badge bg-info">{{ getI18nText(item.service_type.service_type_name_i18n)
                                    }}</span>
                            </template>

                            <template #item-business_type="item">
                                <span class="badge bg-secondary">{{
                                    getI18nText(item.business_type.business_type_name_i18n) }}</span>
                            </template>

                            <template #item-business_model="item">
                                <span class="badge bg-warning">{{
                                    getI18nText(item.business_model.business_model_name_i18n) }}</span>
                            </template>

                            <!-- Shop Info -->
                            <template #item-shop_name="item">
                                <div class="fw-semibold">{{ getI18nText(item.shop_name_i18n) }}</div>
                            </template>

                            <template #item-shop_address="item">
                                <div class="text-truncate" style="max-width: 200px;"
                                    :title="getI18nText(item.shop_address_i18n)">
                                    {{ getI18nText(item.shop_address_i18n) }}
                                </div>
                            </template>

                            <template #item-shop_time="item">
                                <div class="text-success fw-bold">{{ getI18nText(item.shop_time_i18n) }}</div>
                            </template>

                            <template #item-shop_phone="item">
                                <div>{{ getI18nText(item.shop_phone_i18n) }}</div>
                            </template>

                            <template #item-shop_details="item">
                                <div class="text-truncate" style="max-width: 250px;"
                                    :title="getI18nText(item.shop_details_i18n)">
                                    {{ getI18nText(item.shop_details_i18n) }}
                                </div>
                            </template>

                            <!-- Images -->
                            <template #item-image_cover="item">
                                <!-- <img v-if="item.image_cover"
                                    :src="'https://your-api-domain.com/uploads/' + item.image_cover"
                                    :alt="getI18nText(item.business_name_i18n)" class="image-preview"
                                    @click="showImageModal(item.image_cover)" @error="handleImageError">
                                <span v-else class="text-muted">ไม่มีรูปภาพ</span> -->
                            </template>

                            <template #item-image_profile="item">
                                <!-- <img v-if="item.image_profile"
                                    :src="'https://your-api-domain.com/uploads/' + item.image_profile"
                                    :alt="getI18nText(item.business_name_i18n)" class="image-preview"
                                    @click="showImageModal(item.image_profile)" @error="handleImageError">
                                <span v-else class="text-muted">ไม่มีรูปภาพ</span> -->
                            </template>

                            <!-- Rating & Stats -->
                            <template #item-star="item">
                                <div class="star-rating">
                                    <span v-for="i in 5" :key="i" class="star">
                                        {{ i <= item.star ? '★' : '☆' }} </span>
                                            <small class="text-muted ms-1">({{ item.star }}/5)</small>
                                </div>
                            </template>

                            <template #item-visit_count="item">
                                <span class="badge bg-primary">{{ item.visit_count?.toLocaleString() || 0 }}</span>
                            </template>

                            <!-- Location -->
                            <template #item-latitude="item">
                                <div class="text-info">{{ getI18nText(item.latitude_i18n) }}</div>
                            </template>

                            <template #item-longitude="item">
                                <div class="text-info">{{ getI18nText(item.longitude_i18n) }}</div>
                            </template>

                            <!-- Status & User Info -->
                            <template #item-status="item">
                                <span :class="['status-badge', item.status ? 'status-active' : 'status-inactive']">
                                    {{ item.status ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
                                </span>
                            </template>

                            <template #item-by_user_id="item">
                                <span class="badge bg-dark">User ID: {{ item.by_user_id }}</span>
                            </template>

                            <!-- Dates -->
                            <template #item-created_at="item">
                                <div class="text-muted small">{{ formatDate(item.created_at) }}</div>
                            </template>

                            <template #item-updated_at="item">
                                <div class="text-muted small">{{ formatDate(item.updated_at) }}</div>
                            </template>

                            <!-- Business Lists Count -->
                            <template #item-business_list_count="item">
                                <span class="badge bg-success">{{ item.business_list?.length || 0 }} รายการ</span>
                            </template>

                            <!-- Social Media Count -->
                            <template #item-social_media_count="item">
                                <span class="badge bg-info">{{ item.business_social_media?.length || 0 }}
                                    แพลตฟอร์ม</span>
                            </template>

                            <!-- Open Days Count -->
                            <template #item-open_days_count="item">
                                <span class="badge bg-warning">{{ item.business_open_date?.length || 0 }} วัน</span>
                            </template>

                            <!-- Documents Count -->
                            <template #item-documents_count="item">
                                <span class="badge bg-secondary">{{ item.business_documents?.length || 0 }}
                                    เอกสาร</span>
                            </template>

                            <!-- Actions -->
                            <template #item-actions="item">
                                <div class="btn-group" role="group">
                                    <button class="btn btn-sm btn-outline-primary" @click="viewDetails(item)">
                                        <i class="fas fa-eye"></i> ดู
                                    </button>
                                    <button class="btn btn-sm btn-outline-warning" @click="editBusiness(item)">
                                        <i class="fas fa-edit"></i> แก้ไข
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger" @click="deleteBusiness(item)">
                                        <i class="fas fa-trash"></i> ลบ
                                    </button>
                                </div>
                            </template>
                        </EasyDataTable>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detail Modal -->
        <CustomModal v-model="detailModal" title="รายละเอียดธุรกิจ" size="xl">
            <div class="modal-body" v-if="selectedBusiness">
                        <div class="row">
                            <!-- Business Information -->
                            <div class="col-md-6">
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <h6 class="mb-0">ข้อมูลธุรกิจ</h6>
                                    </div>
                                    <div class="card-body">
                                        <p><strong>ID:</strong> {{ selectedBusiness.id }}</p>
                                        <p><strong>ชื่อธุรกิจ:</strong> {{
                                            getI18nText(selectedBusiness.business_name_i18n) }}
                                        </p>
                                        <p><strong>ผู้ติดต่อ:</strong> {{
                                            getI18nText(selectedBusiness.business_person_i18n) }}
                                        </p>
                                        <p><strong>ที่อยู่:</strong> {{
                                            getI18nText(selectedBusiness.business_address_i18n) }}
                                        </p>
                                        <p><strong>ติดต่อ:</strong> {{
                                            getI18nText(selectedBusiness.business_contact_i18n) }}
                                        </p>
                                        <p><strong>อีเมล:</strong> {{ getI18nText(selectedBusiness.business_email_i18n)
                                            }}</p>
                                        <p><strong>ประเภทบริการ:</strong> {{
                                            getI18nText(selectedBusiness.service_type.service_type_name_i18n) }}</p>
                                        <p><strong>ประเภทธุรกิจ:</strong> {{
                                            getI18nText(selectedBusiness.business_type.business_type_name_i18n) }}</p>
                                        <p><strong>รูปแบบธุรกิจ:</strong> {{
                                            getI18nText(selectedBusiness.business_model.business_model_name_i18n) }}</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Shop Information -->
                            <div class="col-md-6">
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <h6 class="mb-0">ข้อมูลร้าน</h6>
                                    </div>
                                    <div class="card-body">
                                        <p><strong>ชื่อร้าน:</strong> {{ getI18nText(selectedBusiness.shop_name_i18n) }}
                                        </p>
                                        <p><strong>ที่อยู่ร้าน:</strong> {{
                                            getI18nText(selectedBusiness.shop_address_i18n) }}
                                        </p>
                                        <p><strong>เวลาเปิด-ปิด:</strong> {{
                                            getI18nText(selectedBusiness.shop_time_i18n) }}</p>
                                        <p><strong>เบอร์โทร:</strong> {{ getI18nText(selectedBusiness.shop_phone_i18n)
                                            }}</p>
                                        <p><strong>รายละเอียด:</strong> {{
                                            getI18nText(selectedBusiness.shop_details_i18n) }}
                                        </p>
                                        <p><strong>คะแนน:</strong> {{ selectedBusiness.star }}/5</p>
                                        <p><strong>จำนวนเข้าชม:</strong> {{
                                            selectedBusiness.visit_count?.toLocaleString() }}
                                        </p>
                                        <p><strong>พิกัด:</strong> ละติจูด:{{ getI18nText(selectedBusiness.latitude_i18n) }}, ลองจิจูด{{
                                            getI18nText(selectedBusiness.longitude_i18n) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Business List -->
                        <div class="row mt-3"
                            v-if="selectedBusiness.business_list && selectedBusiness.business_list.length > 0">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">รายการสินค้า/บริการ</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-sm table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>ชื่อสินค้า/บริการ</th>
                                                        <th>ราคา</th>
                                                        <th>สถานะ</th>
                                                        <th>ผู้สร้าง</th>
                                                        <th>วันที่สร้าง</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in selectedBusiness.business_list" :key="item.id">
                                                        <td>{{ item.id }}</td>
                                                        <td>{{ getI18nText(item.business_list_name_i18n) }}</td>
                                                        <td>{{ getI18nText(item.business_list_price_i18n) }} บาท</td>
                                                        <td>
                                                            <span
                                                                :class="['badge', item.status ? 'bg-success' : 'bg-danger']">
                                                                {{ item.status ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
                                                            </span>
                                                        </td>
                                                        <td>{{ item.by_user_id }}</td>
                                                        <td>{{ formatDate(item.created_at) }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="row mt-3"
                            v-if="selectedBusiness.business_social_media && selectedBusiness.business_social_media.length > 0">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">โซเชียลมีเดีย</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-sm table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>ชื่อแพลตฟอร์ม</th>
                                                        <th>ลิงก์</th>
                                                        <th>สถานะ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="social in selectedBusiness.business_social_media"
                                                        :key="social.id">
                                                        <td>{{ social.id }}</td>
                                                        <td>{{ getI18nText(JSON.parse(social.social_media_name_i18n)) }}
                                                        </td>
                                                        <td>
                                                            <a :href="getI18nText(social.social_media_link_i18n)"
                                                                target="_blank" class="text-primary">
                                                                {{ getI18nText(social.social_media_link_i18n) }}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <span
                                                                :class="['badge', social.status ? 'bg-success' : 'bg-danger']">
                                                                {{ social.status ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Open Days -->
                        <div class="row mt-3"
                            v-if="selectedBusiness.business_open_date && selectedBusiness.business_open_date.length > 0">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">วันเปิดทำการ</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6" v-for="day in selectedBusiness.business_open_date"
                                                :key="day.id">
                                                <div class="form-check">
                                                    <span
                                                        :class="['badge', day.status ? 'bg-success' : 'bg-secondary']">
                                                        {{ getI18nText(day.day_name_i18n) }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Documents -->
                        <div class="row mt-3"
                            v-if="selectedBusiness.business_documents && selectedBusiness.business_documents.length > 0">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">เอกสาร</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3" v-for="doc in selectedBusiness.business_documents"
                                                :key="doc.id">
                                                <div class="card">
                                                    <!-- <img :src="'https://your-api-domain.com/uploads/' + doc.business_documents_img"
                                                        class="card-img-top" style="height: 150px; object-fit: cover;"
                                                        @error="handleImageError"> -->
                                                    <div class="card-body p-2">
                                                        <small class="text-muted">{{ formatDate(doc.created_at)
                                                            }}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- System Info -->
                        <div class="row mt-3">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h6 class="mb-0">ข้อมูลระบบ</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p><strong>สถานะ:</strong>
                                                    <span
                                                        :class="['badge', selectedBusiness.status ? 'bg-success' : 'bg-danger']">
                                                        {{ selectedBusiness.status ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="col-md-4">
                                                <p><strong>ผู้สร้าง:</strong> {{ selectedBusiness.by_user_id }}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p><strong>วันที่สร้าง:</strong> {{
                                                    formatDate(selectedBusiness.created_at) }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p><strong>อัปเดตล่าสุด:</strong> {{
                                                    formatDate(selectedBusiness.updated_at) }}
                                                </p>
                                            </div>
                                            <div class="col-md-4">
                                                <p><strong>Service Type ID:</strong> {{ selectedBusiness.service_type_id
                                                    }}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p><strong>Business Type ID:</strong> {{
                                                    selectedBusiness.business_type_id }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </CustomModal>

        
    </div>
</template>

<script setup>
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import { ref, onMounted } from 'vue'
import { GetAll } from './api/business'
// import { Modal } from 'bootstrap'

// Reactive data
const businessData = ref([])
const loading = ref(false)
const error = ref(null)
const searchValue = ref('')
const selectedBusiness = ref(null)
const selectedLanguage = ref('th')
const detailModal = ref(false)

// Headers definition - แสดงทุกฟิลด์
const headers = ref([
    { text: "ชื่อธุรกิจ", value: "business_name", sortable: true, width: 200 },
    { text: "ผู้ติดต่อ", value: "business_person", sortable: true, width: 150 },
    { text: "ที่อยู่ธุรกิจ", value: "business_address", sortable: true, width: 250 },
    { text: "ติดต่อ", value: "business_contact", sortable: true, width: 150 },
    { text: "อีเมล", value: "business_email", sortable: true, width: 200 },
    { text: "ประเภทบริการ", value: "service_type", sortable: true, width: 150 },
    { text: "ประเภทธุรกิจ", value: "business_type", sortable: true, width: 150 },
    { text: "รูปแบบธุรกิจ", value: "business_model", sortable: true, width: 150 },
    { text: "ชื่อร้าน", value: "shop_name", sortable: true, width: 150 },
    { text: "ที่อยู่ร้าน", value: "shop_address", sortable: true, width: 250 },
    { text: "เวลาเปิด-ปิด", value: "shop_time", sortable: true, width: 120 },
    { text: "เบอร์โทรร้าน", value: "shop_phone", sortable: true, width: 120 },
    { text: "รายละเอียดร้าน", value: "shop_details", sortable: true, width: 300 },
    { text: "รูปปก", value: "image_cover", sortable: false, width: 80 },
    { text: "รูปโปรไฟล์", value: "image_profile", sortable: false, width: 80 },
    { text: "คะแนน", value: "star", sortable: true, width: 100 },
    { text: "จำนวนเข้าชม", value: "visit_count", sortable: true, width: 120 },
    { text: "ละติจูด", value: "latitude", sortable: true, width: 100 },
    { text: "ลองติจูด", value: "longitude", sortable: true, width: 100 },
    { text: "สถานะ", value: "status", sortable: true, width: 100 },
    { text: "ผู้สร้าง", value: "by_user_id", sortable: true, width: 80 },
    { text: "วันที่สร้าง", value: "created_at", sortable: true, width: 150 },
    { text: "อัปเดตล่าสุด", value: "updated_at", sortable: true, width: 150 },
    { text: "รายการสินค้า", value: "business_list_count", sortable: true, width: 120 },
    { text: "โซเชียลมีเดีย", value: "social_media_count", sortable: true, width: 120 },
    { text: "วันเปิดทำการ", value: "open_days_count", sortable: true, width: 120 },
    { text: "เอกสาร", value: "documents_count", sortable: true, width: 100 },
    { text: "จัดการ", value: "actions", sortable: false, width: 150 }
])

// Methods
const loadBusinessData = async () => {
    loading.value = true
    error.value = null

    try {
        const response = await GetAll()
        businessData.value = response.data.data || response
        console.log('Business data loaded:', businessData.value)
    } catch (err) {
        error.value = 'เกิดข้อผิดพลาดในการโหลดข้อมูล: ' + err.message
        console.error('Error loading business data:', err)
    } finally {
        loading.value = false
    }
}

const getI18nText = (i18nObject, lang = null) => {
    if (!i18nObject) return ''

    const currentLang = lang || selectedLanguage.value

    // Handle string JSON format
    if (typeof i18nObject === 'string') {
        try {
            const parsed = JSON.parse(i18nObject)
            return parsed[currentLang] || parsed.en || parsed.th || parsed.cn || ''
        } catch {
            return i18nObject
        }
    }

    // Handle object format
    if (typeof i18nObject === 'object') {
        return i18nObject[currentLang] || i18nObject.en || i18nObject.th || i18nObject.cn || ''
    }

    return i18nObject || ''
}

const formatDate = (dateString) => {
    if (!dateString) return ''

    const date = new Date(dateString)
    if (isNaN(date.getTime())) return dateString

    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

const viewDetails = (business) => {
    selectedBusiness.value = business
    detailModal.value = true
    //   const modal = new Modal(detailModal.value)
    //   modal.show()
}

const editBusiness = (business) => {
    alert(`แก้ไขธุรกิจ: ${getI18nText(business.business_name_i18n)}`)
    // Add edit logic here
}

const deleteBusiness = (business) => {
    if (confirm(`คุณต้องการลบธุรกิจ "${getI18nText(business.business_name_i18n)}" หรือไม่?`)) {
        // Add delete logic here
        alert('ลบธุรกิจเรียบร้อยแล้ว')
    }
}

const showImageModal = (imagePath) => {
    console.log('Show image:', imagePath)
    // Add image modal logic here
}

const handleImageError = (event) => {
    //   event.target.src =
    //     'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNSAyMEwyNSAxNUwzNSAyMFYzNUgxNVYyMFoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+'
}

onMounted(loadBusinessData)
</script>