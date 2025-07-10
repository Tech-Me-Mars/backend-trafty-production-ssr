<script lang="ts" setup>
import "vue3-toastify/dist/index.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "vue-select/dist/vue-select.css";
import "vue3-colorpicker/style.css";
import "lightgallery/css/lg-zoom.css";
import "~/assets/other/swiper/css/swiper-bundle.min.css";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import "~/assets/other/jquery-smartwizard/dist/css/smart_wizard.css";
import "~/assets/other/bootstrap-select/dist/css/bootstrap-select.min.css";
import ChatBox from "./lib/chatbox/ChatBox.vue";
import Header from "./lib/Header.vue";
import NavHeader from "./lib/NavHeader.vue";
import Sidebar from "./lib/Sidebar.vue";

import { Store } from "./stores/Store";
import AddNewTask from "./components/AddNewTask.vue";

const { iconHover, naveHeader } = Store;

const route = useRoute();
const theme = ref("light");
watch(
  () => route.fullPath,
  (from) => {
    //  && theme.value='dark';
    if (from == "/") {
      theme.value = "light";
    }
    if (from == "/index-2") {
      theme.value = "dark";
    }
  },
  { immediate: true }
);
useHead({
  link: [{ rel: "icon", type: "image/png", href: "_nuxt/public/favicon.ico" }],
  bodyAttrs: {
    "data-typography": "poppins",
    "data-theme-version": theme,
    "data-layout": "vertical",
    "data-nav-headerbg": "color_4",
    "data-headerbg": "color_4",
    "data-sidebar-style": "full",
    "data-sidebarbg": "color_1",
    "data-sidebar-position": "fixed",
    "data-header-position": "fixed",
    "data-container": "wide",
    "data-primary": "color_1",
    "data-secondary": "color_1",
  },
});

const contentHeight = ref<HTMLElement | null>(null);
const responSiveSize = () => {
  if (window.matchMedia("(max-width: 775px)").matches) {
    document.body.setAttribute("data-sidebar-style", "overlay");
  } else {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      document.body.setAttribute("data-sidebar-style", "mini");
    } else {
      document.body.setAttribute("data-sidebar-style", "full");
    }
  }
};
function MediaHandler() {
  responSiveSize();
  contentHeight.value?.setAttribute(
    "style",
    `min-height:${window.innerHeight - 60}px`
  );
}
watchEffect(() => {
  contentHeight.value?.setAttribute(
    "style",
    `min-height:${window.innerHeight - 60}px`
  );
});
onMounted(() => {
  responSiveSize();
  window.addEventListener("resize", MediaHandler);
});
</script>

<template>
  <NuxtLayout>
    <div
      id="main-wrapper"
      :class="`show ${naveHeader ? 'menu-toggle' : ''} ${
        iconHover ? 'iconhover-toggle' : ''
      }`"
    >
      <NavHeader />
      <ChatBox />
      <Header />
      <Sidebar />
      <div class="content-body" ref="contentHeight">
        <NuxtPage />
      </div>
      <div class="footer">
        <div class="copyright">
          <p>
            Copyright © Developed by
            <NuxtLink to="https://dexignzone.com/" target="_blank"
              >DexignZone</NuxtLink
            >
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
      <AddNewTask />
    </div>
  </NuxtLayout>
</template>
