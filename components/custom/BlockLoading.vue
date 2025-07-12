<template>
  <div class="block-loading-overlay">
    <div class="text-center">
      <div class="spinner-border text-primary mb-3" role="status" aria-label="กำลังโหลด">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="loading-text text-primary fw-medium animate-bounce">กำลังโหลด...</div>
    </div>
  </div>
</template>

<script setup>
// ไม่มี logic ภายใน
</script>

<style scoped>
.block-loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
}

.loading-text {
  font-size: 1.1rem;
}

/* เพิ่มอนิเมชัน bounce เบา ๆ */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-bounce {
  animation: bounce 1.2s infinite ease-in-out;
}
</style>
