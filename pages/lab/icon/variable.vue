<template>
  <div>
    <div v-for="item in menuItems" :key="item.name" class="menu-item">
      <component :is="item.icon" class="icon" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/24/outline';

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon },
];
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>
