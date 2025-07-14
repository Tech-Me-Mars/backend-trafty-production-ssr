<template>
<CustomBreadcrumb :items="[
    { label: 'Home', icon: 'HomeIcon', to: '/' },
    { label: 'Manage Users ', icon: 'UsersIcon', to: '/users' }
  ]" title="Manage Users" />
  <div class="container-fluid " >
      
    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap">
      <div class="dataTables_filter d-flex align-items-center mb-2 mb-md-0">
        <label class="mb-0 me-2">Search:</label>
        <input type="search" v-model="searchValue" class="form-control table-data-base-search" placeholder="ค้นหา..." />
      </div>
      <a class="btn btn-primary btn-sm dz-menu-btn" @click="onAddUser"><i class="fa fa-plus me-1"></i> เพิ่มผู้ใช้</a>
    </div>

    <div class="my-users-table">
      <EasyDataTable :loading="loading" :headers="headers" border-cell :items="resUsers"
        :rows-items="[5, 10, 20, 50, 100]" :rows-per-page="10" show-index :search-field="searchFields"
        :search-value="searchValue">

        <template #item-status="{ status }">
          <span class="badge" :class="status ? 'bg-success' : 'bg-danger'">
            {{ status ? 'ใช้งาน' : 'ปิดใช้งาน' }}
          </span>
        </template>

        <template #item-action="{ id }">
          <button class="btn btn-sm btn-primary me-1" @click="onEdit(id)">
            <i class="fa fa-edit"></i>
          </button>
          <button class="btn btn-sm btn-danger" @click="onDelete(id)">
            <i class="fa fa-trash"></i>
          </button>
        </template>
      </EasyDataTable>

      <!-- Modal Delete -->
      <CustomModal v-model="showModalDelete" title="ยืนยันการลบผู้ใช้">
        <div>คุณต้องการลบผู้ใช้นี้ใช่หรือไม่ ?</div>
        <template #footer>
          <button class="btn btn-secondary" @click="showModalDelete = false">ยกเลิก</button>
          <button class="btn btn-danger" @click="confirmDelete">ลบเลย</button>
        </template>
      </CustomModal>

      <!-- Modal Create/Edit -->
      <CustomModal v-model="showModalForm" :title="isEdit ? 'แก้ไขผู้ใช้' : 'เพิ่มผู้ใช้ใหม่'">dd
        <Form @submit="onSubmit">
          <div class="mb-3">
            <label class="form-label">ชื่อ *</label>
            <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" />
            <div class="invalid-feedback">{{ errors.name }}</div>
          </div>
          <div class="mb-3">
            <label class="form-label">อีเมลล์ *</label>
            <input v-model="email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" />
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="mb-3" v-if="!isEdit">
            <label class="form-label">ชื่อผู้ใช้ *</label>
            <input v-model="username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="mb-3" v-if="!isEdit">
            <label class="form-label">รหัสผ่าน *</label>
            <input v-model="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="mb-3">
            <label class="form-label">เบอร์โทร</label>
            <input v-model="phone" type="text" class="form-control" :class="{ 'is-invalid': errors.phone }" />
          </div>
          <div class="form-check form-switch mb-3">
            <input class="form-check-input" type="checkbox" v-model="status" />
            <label class="form-check-label">สถานะ</label>
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-secondary me-2" @click="showModalForm = false">ยกเลิก</button>
            <button type="submit" class="btn btn-primary">{{ isEdit ? 'บันทึกการแก้ไข' : 'สร้างผู้ใช้' }}</button>
          </div>
        </Form>
      </CustomModal>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import * as dataApi from './api/data.js'
import { useField, useForm, Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

const { showToast } = useToast()

const requireValue = 'กรุณาระบุข้อมูล'

const validationSchema = toTypedSchema(
  zod.object({
    name: zod.string().nonempty(requireValue).default(""),
    email: zod.string().nonempty(requireValue).email('รูปแบบอีเมลไม่ถูกต้อง').default(""),
    username: zod.string().nonempty(requireValue).default(""),
    password: zod.string().nonempty(requireValue).default(""),
    phone: zod.string().nonempty(requireValue).default(""),
    status: zod.boolean().default(true),
  })
)

const { handleSubmit, errors, resetForm: handleReset } = useForm({
  validationSchema
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: username } = useField('username')
const { value: password } = useField('password')
const { value: phone } = useField('phone')
const { value: status } = useField('status', undefined, { initialValue: true })

const resUsers = ref([])
const loading = ref(true)
const searchValue = ref('')
const searchFields = ['id', 'name', 'email', 'status', 'role.name']

const headers = [
  { text: 'ID', value: 'id', sortable: true },
  { text: 'ชื่อ', value: 'name', sortable: true },
  { text: 'อีเมลล์', value: 'email', sortable: true },
  { text: 'สิทธิ์', value: 'role.name', sortable: true },
  { text: 'สถานะ', value: 'status' },
  { text: 'Action', value: 'action' }
]

const showModalDelete = ref(false)
const showModalForm = ref(false)
const userToDeleteId = ref(null)
const isEdit = ref(false)

const onAddUser = () => {
  isEdit.value = false
  handleReset()
  showModalForm.value = true
}

const onEdit = async (id) => {
  try {
    const { data } = await dataApi.GetById(id)
    const user = data.data
    isEdit.value = true
    userToDeleteId.value = user.id
    name.value = user.name
    email.value = user.email
    username.value = user.username
    phone.value = user.phone
    status.value = user.status
    showModalForm.value = true
  } catch (error) {
    console.error('Error fetching user:', error)
  }
}

const onDelete = (id) => {
  userToDeleteId.value = id
  showModalDelete.value = true
}

const confirmDelete = async () => {
  if (!userToDeleteId.value) return
  try {
    await dataApi.Delete(userToDeleteId.value)
    showToast({ color: 'success', title: 'สำเร็จ', msg: 'ลบผู้ใช้แล้ว' })
    await loadUsers()
  } catch (err) {
    showToast({ color: 'error', title: 'ล้มเหลว', msg: 'ไม่สามารถลบผู้ใช้ได้' })
  } finally {
    showModalDelete.value = false
    userToDeleteId.value = null
  }
}

const onSubmit = handleSubmit(async (values) => {
  try {
    if (isEdit.value) {
      await dataApi.Update(userToDeleteId.value, values)
      showToast({ color: 'success', title: 'สำเร็จ', msg: 'อัปเดตผู้ใช้สำเร็จ' })
    } else {
      await dataApi.Create(values)
      showToast({ color: 'success', title: 'สำเร็จ', msg: 'สร้างผู้ใช้สำเร็จ' })
    }
    showModalForm.value = false
    await loadUsers()
  } catch (err) {
    showToast({ color: 'error', title: 'ล้มเหลว', msg: 'บันทึกข้อมูลไม่สำเร็จ' })
  }
})

const loadUsers = async () => {
  loading.value = true
  try {
    const res = await dataApi.GetAll()
    resUsers.value = res.data.data.data
  } catch (error) {
    showToast({ color: 'error', title: 'ล้มเหลว', msg: 'โหลดข้อมูลไม่สำเร็จ' })
  } finally {
    loading.value = false
  }
}

onMounted(loadUsers)
</script>

<style scoped>
.table-data-base-search {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.invalid-feedback {
  display: block;
}
</style>
