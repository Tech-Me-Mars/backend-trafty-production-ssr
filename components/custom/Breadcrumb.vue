<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// ประกาศ Props
const props = defineProps<{
  title: string
  items: Array<{
    label: string
    icon?: string
    to?: string
  }>
}>()

// Dynamic import สำหรับ Heroicons
</script>

<template>
  <div class="page-titles">
    <ol class="breadcrumb align-items-center">
      <li>
        <h5 class="bc-title">{{ title }}</h5>
      </li>
      <li v-for="(crumb, index) in items" :key="index" class="breadcrumb-item" :class="{ active: index === items.length - 1 }">
        <component
          v-if="crumb.icon"
          :is="useHeroIcon(crumb.icon)"
          class="icon me-1"
        />
        
        <NuxtLink v-if="crumb.to && index !== items.length - 1" :to="crumb.to">
          {{ crumb.label }}
        </NuxtLink>
        <span v-else>{{ crumb.label }}</span>
      </li>
    </ol>

    <a
      class="text-primary fs-13"
      data-bs-toggle="offcanvas"
      href="#offcanvasExample1"
      role="button"
      aria-controls="offcanvasExample1"
    >
      + Add Task
    </a>
  </div>
</template>
