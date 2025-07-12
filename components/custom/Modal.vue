<template>
  <Teleport to="body">
    <div
      class="modal fade show"
      tabindex="-1"
      :style="{ display: modelValue ? 'block' : 'none' }"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
  <slot name="title">{{ title || 'Modal Title' }}</slot>
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="$emit('update:modelValue', false)"
            ></button>
          </div>
          <div class="modal-body">
            <slot ></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <!-- <button
                type="button"
                class="btn btn-secondary"
                @click="$emit('update:modelValue', false)"
              >
                Close
              </button> -->
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal-backdrop fade show"
      v-if="modelValue"
      @click="$emit('update:modelValue', false)"
    ></div>
  </Teleport>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
