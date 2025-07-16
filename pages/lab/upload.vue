<template>
  <div class="container-fluid p-4">
    <div class="row g-4">

      <!-- Multiple File Upload -->
      <div class="col-lg-6">
        <div class="file-upload-container">
              <!-- Upload Button -->
              <div class="d-flex align-items-center flex-wrap gap-2">
                <input ref="fileInputMultiple" type="file" multiple @change="handleUploadMultiple" class="d-none"
                  id="multipleUpload" accept="*" />
                <label for="multipleUpload" class="btn btn-sm btn-primary">
                  <i class="fas fa-upload me-1"></i>
                  Select Files
                </label>
                <button v-if="fileListMultiple.length > 0" @click="clearAllMultiple"
                  class="btn btn-sm btn-outline-danger">
                  <i class="fas fa-trash me-1"></i>
                  Clear All
                </button>
              </div>

              <!-- File List -->
              <div v-if="fileListMultiple.length > 0" class="mt-3">
                <div class="border rounded bg-light">
                  <div class="px-3 py-2 border-bottom bg-white" style="border-radius: 0.375rem 0.375rem 0 0;">
                    <small class="text-muted">Selected Files ({{ fileListMultiple.length }})</small>
                  </div>
                  <div class="file-items" style="max-height: 200px; overflow-y: auto;">
                    <div v-for="(file, index) in fileListMultiple" :key="index"
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
                      <button @click="removeFileMultiple(index)" class="btn btn-sm btn-outline-danger"
                        style="padding: 0.25rem 0.5rem; font-size: 0.75rem; line-height: 1; opacity: 0.7; transition: opacity 0.2s ease;"
                       
                        title="Remove file">
                        <i class="fas fa-times" style="font-size: 0.75rem;"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <!-- Single File Upload -->
      <div class="col-lg-6">
        <div>
              <!-- Upload Button -->
              <div class="d-flex align-items-center flex-wrap gap-2">
                <input ref="fileInputSingle" type="file" @change="handleUploadSingle" class="d-none" id="singleUpload"
                  accept="*" />
                <label for="singleUpload" class="btn btn-sm btn-success">
                  <i class="fas fa-upload me-1"></i>
                  Select File
                </label>
                <button v-if="fileListSingle.length > 0" @click="removeFileSingle"
                  class="btn btn-sm btn-outline-danger">
                  <i class="fas fa-trash me-1"></i>
                  Remove
                </button>
              </div>

              <!-- File Display -->
              <div v-if="fileListSingle.length > 0" class="mt-3">
                <div class="border rounded bg-light">
                  <div class="px-3 py-2 border-bottom bg-white" style="border-radius: 0.375rem 0.375rem 0 0;">
                    <small class="text-muted">Selected File</small>
                  </div>
                  <div class="px-3 py-2 bg-white" style="border-radius: 0 0 0.375rem 0.375rem;">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center flex-grow-1" style="min-width: 0;">
                        <i class="fas fa-file text-success me-2"></i>
                        <span class="fw-medium text-dark me-2"
                          style="font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px;">
                          {{ fileListSingle[0].name }}
                        </span>
                        <small class="text-muted" style="font-size: 0.75rem; white-space: nowrap;">
                          ({{ formatFileSize(fileListSingle[0].size) }})
                        </small>
                      </div>
                      <button @click="removeFileSingle" class="btn btn-sm btn-outline-danger"
                        style="padding: 0.25rem 0.5rem; font-size: 0.75rem; line-height: 1; opacity: 0.7; transition: opacity 0.2s ease;"
                      
                        title="Remove file">
                        <i class="fas fa-times" style="font-size: 0.75rem;"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>

    <button class="btn btn-primary" @click="console.log('fileListMultiple', fileListMultiple)">โชวตัวแปร multile</button>
    <button class="btn btn-primary" @click="console.log('fileListMultiple', fileListSingle)">โชวตัวแปร single</button>

    <!-- Upload Actions -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1">Upload Summary</h6>
                <small class="text-muted">
                  Multiple: {{ fileListMultiple.length }} files |
                  Single: {{ fileListSingle.length }} file
                </small>
              </div>
              <button class="btn btn-primary" :disabled="fileListMultiple.length === 0 && fileListSingle.length === 0"
                @click="uploadFiles">
                <i class="fas fa-cloud-upload-alt me-1"></i>
                Upload All Files
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// Define emits for parent component communication
const emit = defineEmits(['upload', 'files-changed'])

// Refs
const fileInputMultiple = ref(null)
const fileInputSingle = ref(null)

// State
const fileListMultiple = ref([])
const fileListSingle = ref([])

// Format file size
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Handle Multiple Upload
const handleUploadMultiple = (event) => {
  const target = event.target
  const files = target.files
  if (files) {
    fileListMultiple.value.push(...Array.from(files))
    emitFilesChanged()
  }
}

// Handle Single Upload
const handleUploadSingle = (event) => {
  const target = event.target
  const file = target.files?.[0]
  if (file) {
    fileListSingle.value = [file]
    emitFilesChanged()
  }
}

// Remove from multiple
const removeFileMultiple = (index) => {
  fileListMultiple.value.splice(index, 1)
  emitFilesChanged()
}

// Remove single file
const removeFileSingle = () => {
  fileListSingle.value = []
  if (fileInputSingle.value) fileInputSingle.value.value = ''
  emitFilesChanged()
}

// Clear all multiple
const clearAllMultiple = () => {
  fileListMultiple.value = []
  if (fileInputMultiple.value) fileInputMultiple.value.value = ''
  emitFilesChanged()
}

// Emit files changed event
const emitFilesChanged = () => {
  emit('files-changed', {
    multiple: fileListMultiple.value,
    single: fileListSingle.value,
    total: fileListMultiple.value.length + fileListSingle.value.length
  })
}

// Upload simulation
const uploadFiles = () => {
  const allFiles = [...fileListMultiple.value, ...fileListSingle.value]
  if (allFiles.length === 0) {
    alert('Please select files to upload')
    return
  }

  // Emit to parent component
  emit('upload', {
    files: allFiles,
    multiple: fileListMultiple.value,
    single: fileListSingle.value
  })

  alert(`Uploading ${allFiles.length} file(s)...`)
  console.log('Files to upload:', allFiles)
}

// Expose methods to parent component
defineExpose({
  clearAll: () => {
    clearAllMultiple()
    removeFileSingle()
  },
  getFiles: () => ({
    multiple: fileListMultiple.value,
    single: fileListSingle.value,
    all: [...fileListMultiple.value, ...fileListSingle.value]
  })
})
</script>

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