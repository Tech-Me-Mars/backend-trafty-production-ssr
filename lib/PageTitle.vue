<script setup lang="ts">
import { SVGImage } from "@/constent/Theme";

defineProps<{
  title: string;
  name: string;
}>();
</script>

<template>
  <div class="page-titles">
    <ol class="breadcrumb">
      <li>
        <h5 class="bc-title">{{ title }}</h5>
      </li>
      <li class="breadcrumb-item">
        <a href="javascript:void(0)">
          <span v-html="SVGImage.homeIcon"></span>
          Home
        </a>
      </li>
      <li class="breadcrumb-item active">
        <a href="javascript:void(0)">{{ name }}</a>
      </li>
    </ol>
    <a class="text-primary fs-13" data-bs-toggle="offcanvas" href="#offcanvasExample1" role="button" aria-controls="offcanvasExample1">+ Add Task</a>
  </div>
</template>
