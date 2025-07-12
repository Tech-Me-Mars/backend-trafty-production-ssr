<template>
    <div class="authincation vh-100">
        <div class="text-center mb-4">
            <button type="button" class="btn btn-success btn-sm me-2" @click="testToasts">
                Test Toasts
            </button>
        </div>
    </div>
</template>

<script setup>
// Toast composable
const { showToast, success, error, warning, info } = useToast();

const testToasts = () => {
    showToast({
        color: "success",
        title: "ข้อมูลแบบเต็ม",
        msg: "นี่คือการใช้ showToast แบบเต็ม",
        isError: false,
        life: false // ไม่ปิดอัตโนมัติ
    });
};

// Page meta
definePageMeta({
    layout: "utility",
});
</script>
