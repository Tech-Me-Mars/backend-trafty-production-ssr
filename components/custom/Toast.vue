<template>
  <div>
    <!-- vue3-toastify ไม่ต้องมี component ใน template -->
  </div>
</template>

<script setup>
import { toast } from "vue3-toastify";
import { onUpdated, onMounted } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      color: "success", // success, error, warning, info
      title: "",
      msg: "",
      isError: false,
      dataError: null,
      position: "top-right", // top-right, bottom-right, etc.
      life: 3000 // 3000ms หรือ false สำหรับไม่ปิดอัตโนมัติ
    }),
  },
});

onMounted(() => showMessage());
onUpdated(() => showMessage());

const showMessage = () => {
  if (props.data.isError == false) {
    showToast(props.data.color, props.data.title, props.data.msg, props.data.life);
  } else {
    try {
      showToast('error', props.data.title, props.data.msg, props.data.life);
    } catch (error) {
      console.error(error);
    }
  }
};

const showToast = (severity, summary, detail, life) => {
  const options = {
    autoClose: life === false ? false : (life || 3000),
    position: getPosition(props.data.position || "top-right"),
  };

  switch (severity) {
    case "success":
      toast.success(`${summary}: ${detail}`, options);
      break;
    case "error":
      toast.error(`${summary}: ${detail}`, options);
      break;
    case "warning":
      toast.warning(`${summary}: ${detail}`, options);
      break;
    case "info":
      toast.info(`${summary}: ${detail}`, options);
      break;
    default:
      toast(`${summary}: ${detail}`, options);
      break;
  }
};

const getPosition = (position) => {
  switch (position) {
    case "top-right":
      return toast.POSITION.TOP_RIGHT;
    case "bottom-right":
      return toast.POSITION.BOTTOM_RIGHT;
    case "bottom-left":
      return toast.POSITION.BOTTOM_LEFT;
    case "top-left":
      return toast.POSITION.TOP_LEFT;
    case "top-center":
      return toast.POSITION.TOP_CENTER;
    case "bottom-center":
      return toast.POSITION.BOTTOM_CENTER;
    default:
      return toast.POSITION.TOP_RIGHT;
  }
};
</script>

<style scoped>
/* Custom styles if needed */
</style>