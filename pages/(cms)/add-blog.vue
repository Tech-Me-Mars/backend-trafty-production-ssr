<script lang="ts" setup>
import AddContentData from "../../components/cmsData/AddContentData.vue";
import CommonNavbar from "../../lib/CommonNavbar.vue";
</script>

<template>
  <CommonNavbar page="CMS" path="Add Blog" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div>
          <NuxtLink to="/add-email" class="btn btn-primary mb-3 me-1">Blog List</NuxtLink>
          <NuxtLink to="/blog-category" class="btn btn-primary mb-3 me-1">Blog Category</NuxtLink>
          <NuxtLink to="/blog-category" class="btn btn-primary mb-3 me-1">Add Blog Category</NuxtLink>
          <button type="button" class="btn btn-primary mb-3 open" data-bs-toggle="collapse" data-bs-target="#CheckBoxes" aria-controls="CheckBoxes" aria-expanded="false">
            Screen Option
          </button>
        </div>
        <AddContentData />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
