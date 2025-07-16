<!-- CustomUpload -->
<script setup>
import { ref, watch, computed } from "vue";

// Props
const props = defineProps({
  modelValue: { type: Array, default: () => [] }, // Always array
  multiple: { type: Boolean, default: false },
  label: { type: String, default: "Select File(s)" },
  accept: { type: String, default: "*" },
  maxFiles: { type: Number, default: 0 }, // 0 = unlimited
  clearable: { type: Boolean, default: true }
})
const emit = defineEmits(['update:modelValue', 'change'])
const uid = useId()
const random = Math.floor(Math.random() * 1000000)
const inputId = computed(() => `${uid}-${props.multiple ? 'multi' : 'single'}`)
// Refs
const fileInput = ref(null)

// Local file list sync
const fileList = ref([])

// Sync props.modelValue <-> fileList
watch(() => props.modelValue, val => {
  fileList.value = Array.isArray(val) ? val : []
}, { immediate: true })

// Emit on change
const updateFiles = (files) => {
  // Validate maxFiles
  let outFiles = props.multiple ? files : files.slice(0, 1)
  if (props.maxFiles > 0) outFiles = outFiles.slice(0, props.maxFiles)
  fileList.value = outFiles
  emit('update:modelValue', outFiles)
  emit('change', outFiles)
}

// Handle file input change
const handleUpload = (e) => {
  const files = Array.from(e.target.files)
  if (props.multiple) updateFiles([...fileList.value, ...files])
  else updateFiles(files)
}

// Remove file
const removeFile = (index) => {
  const arr = [...fileList.value]
  arr.splice(index, 1)
  updateFiles(arr)
}

// Remove all
const clearAll = () => {
  updateFiles([])
  if (fileInput.value) fileInput.value.value = ''
}

// Format size
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024, sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
</script>

<template>
  <div class="file-upload-container">
    <div class="d-flex align-items-start flex-wrap gap-2">
      <input
        ref="fileInput"
        :type="'file'"
        :multiple="multiple"
        :accept="accept"
        @change="handleUpload"
        class="d-none"
        :id="inputId"
      />
      <label :for="inputId" :class="['btn btn-sm', multiple ? 'btn-primary' : 'btn-success']">
        <i class="fas fa-upload me-1"></i>
        {{ label }}
      </label>
      <button v-if="clearable && fileList.length > 0" @click="clearAll" class="btn btn-sm btn-outline-danger">
        <i class="fas fa-trash me-1"></i>
        Clear All
      </button>
    </div>

    <!-- File List -->
    <div v-if="fileList.length > 0" class="mt-3">
      <div class="border rounded bg-light">
        <div class="px-3 py-2 border-bottom bg-white" style="border-radius: 0.375rem 0.375rem 0 0;">
          <small class="text-muted">{{ multiple ? `Selected Files (${fileList.length})` : 'Selected File' }}</small>
        </div>
        <div class="file-items" style="max-height: 200px; overflow-y: auto;">
          <div v-for="(file, index) in fileList" :key="index"
            class="d-flex align-items-center justify-content-between px-3 py-2 border-bottom bg-white"
            style="transition: background-color 0.2s ease;">
            <div class="d-flex align-items-center flex-grow-1" style="min-width: 0;">
              <i class="fas fa-file text-primary me-2"></i>
              <span class="fw-medium text-dark me-2"
                style="font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px;">
                {{ file.name }}
              </span>
              <small class="text-muted" style="font-size: 0.75rem; white-space: nowrap;">
                ({{ formatFileSize(file.size) }})
              </small>
            </div>
            <button @click="removeFile(index)" class="btn btn-sm btn-outline-danger"
              style="padding: 0.25rem 0.5rem; font-size: 0.75rem; line-height: 1; opacity: 0.7; transition: opacity 0.2s ease;"
              title="Remove file">
              <i class="fas fa-times" style="font-size: 0.75rem;"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-items::-webkit-scrollbar {
  width: 4px;
}
.file-items::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.file-items::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}
.file-items::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
@media (max-width: 576px) {
  .file-name {
    max-width: 120px !important;
  }
}
</style>
