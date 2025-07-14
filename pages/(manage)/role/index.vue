<template>
    <CustomBreadcrumb :items="[
        { label: 'Home', icon: 'HomeIcon', to: '/' },
        { label: 'Manage Roles', icon: 'ShieldCheckIcon', to: '/roles' }
    ]" title="Manage Roles" />

    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap">
            <div class="dataTables_filter d-flex align-items-center mb-2 mb-md-0">
                <label class="mb-0 me-2">Search:</label>
                <input type="search" v-model="searchValue" class="form-control table-data-base-search"
                    placeholder="ค้นหา..." />
            </div>
            <a class="btn btn-primary btn-sm dz-menu-btn" @click="onAdd"><i class="fa fa-plus me-1"></i> เพิ่มบทบาท</a>
        </div>

        <EasyDataTable :loading="loading" :headers="headers" border-cell :items="resRoles"
            :rows-items="[5, 10, 20, 50, 100]" :rows-per-page="10" show-index :search-field="searchFields"
            :search-value="searchValue">
            <template #item-status="item">
                <span class="badge" :class="item.status ? 'bg-success' : 'bg-danger'">
                    {{ item.status ? 'ใช้งาน' : 'ปิดใช้งาน' }}
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

        <CustomModal v-model="showModalDelete" title="ยืนยันการลบบทบาท">
            <div>คุณต้องการลบบทบาทนี้ใช่หรือไม่ ?</div>
            <template #footer>
                <button class="btn btn-secondary" @click="showModalDelete = false">ยกเลิก</button>
                <button class="btn btn-danger" @click="confirmDelete">ลบเลย</button>
            </template>
        </CustomModal>

        <CustomModal v-model="showModalForm" :title="isEdit ? 'แก้ไขบทบาท' : 'เพิ่มบทบาทใหม่'">
            <Form @submit="onSubmit">
                <div class="mb-3">
                    <label class="form-label">ชื่อบทบาท *</label>
                    <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" />
                    <div class="invalid-feedback">{{ errors.name }}</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">คำอธิบาย</label>
                    <input v-model="description" type="text" class="form-control" />
                    <div class="invalid-feedback">{{ errors.description }}</div>

                </div>
                <div class="mb-3">
                    <label class="form-label">Text Color</label>
                    <input v-model="text_color" type="color" class="form-control form-control-color" />
                    <div class="invalid-feedback">{{ errors.text_color }}</div>

                </div>
                <div class="mb-3">
                    <label class="form-label">Background Color</label>
                    <input v-model="bg_color" type="color" class="form-control form-control-color" />
                    <div class="invalid-feedback">{{ errors.bg_color }}</div>

                </div>
                <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" v-model="status" />
                    <label class="form-check-label">สถานะ</label>
                    <div class="invalid-feedback">{{ errors.status }}</div>

                </div>
                <div class="text-end">
                    <button type="button" class="btn btn-secondary me-2" @click="showModalForm = false">ยกเลิก</button>
                    <button type="submit" class="btn btn-primary">{{ isEdit ? 'บันทึกการแก้ไข' : 'สร้างบทบาท'
                        }}</button>
                </div>
            </Form>
        </CustomModal>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import { useField, useForm, Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'
import * as dataApi from './api/role.js'

const { showToast } = useToast()
const searchValue = ref('')
const loading = ref(true)
const showModalForm = ref(false)
const showModalDelete = ref(false)
const resRoles = ref([])
const roleId = ref(null)
const isEdit = ref(false)
const searchFields = ['id', 'name', 'description']

const headers = [
    { text: 'ID', value: 'id' },
    { text: 'ชื่อบทบาท', value: 'name', sortable: true },
    { text: 'คำอธิบาย', value: 'description' },
    { text: 'สถานะ', value: 'status' },
    { text: 'Action', value: 'action' }
]

const requireValue = "กรุณาระบุข้อมูล";

const validationSchema = toTypedSchema(zod.object({
    name: zod.string().nonempty(requireValue).default(""),
    description: zod.string().nonempty(requireValue).default(""),
    text_color: zod.string().nonempty(requireValue).default(""),
    bg_color: zod.string().nonempty(requireValue).default(""),
    status: zod.boolean().default(true),
}))

const { handleSubmit, errors, resetForm } = useForm({ validationSchema })
const { value: name } = useField('name')
const { value: description } = useField('description')
const { value: text_color } = useField('text_color')
const { value: bg_color } = useField('bg_color')
const { value: status } = useField('status', undefined, { initialValue: true })

const onAdd = () => {
    isEdit.value = false
    resetForm()
    showModalForm.value = true
}

const onEdit = async (id) => {
    const { data } = await dataApi.GetById(id)
    const r = data.data
    isEdit.value = true
    roleId.value = id
    name.value = r.name
    description.value = r.description
    text_color.value = r.text_color
    bg_color.value = r.bg_color
    status.value = r.status
    showModalForm.value = true
}

const onDelete = (id) => {
    roleId.value = id
    showModalDelete.value = true
}

const confirmDelete = async () => {
    try {
        await dataApi.Delete(roleId.value)
        showToast({ color: 'success', title: 'สำเร็จ', msg: 'ลบบทบาทแล้ว' })
        await loadRoles()
    } catch (err) {
        showToast({ color: 'error', title: 'ล้มเหลว', msg: 'ไม่สามารถลบได้' })
    } finally {
        showModalDelete.value = false
        roleId.value = null
    }
}

const onSubmit = handleSubmit(async (values) => {
    try {
        if (isEdit.value) {
            await dataApi.Update(roleId.value, values)
            showToast({ color: 'success', title: 'สำเร็จ', msg: 'อัปเดตบทบาทสำเร็จ' })
        } else {
            await dataApi.Create(values)
            showToast({ color: 'success', title: 'สำเร็จ', msg: 'สร้างบทบาทสำเร็จ' })
        }
        showModalForm.value = false
        await loadRoles()
    } catch (err) {
        showToast({ color: 'error', title: 'ล้มเหลว', msg: 'บันทึกข้อมูลไม่สำเร็จ' })
    }
})

const loadRoles = async () => {
    loading.value = true
    try {
        const res = await dataApi.GetAll()
        resRoles.value = res.data.data
    } catch (err) {
        showToast({ color: 'error', title: 'ล้มเหลว', msg: 'โหลดข้อมูลล้มเหลว' })
    } finally {
        loading.value = false
    }
}

onMounted(loadRoles)
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
