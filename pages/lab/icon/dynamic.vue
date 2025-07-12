<template>
  <div>
    <div v-for="item in menuItems" :key="item.name" class="menu-item">
      <!-- ใช้ composable เพื่อดึงไอคอน -->
      <component :is="getIcon(item.icon)" class="icon" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { useHeroIcon } from '@/composables/useHeroIcons'; // นำเข้า composable

const menuItems = [
  { name: 'Dashboard', icon: 'HomeIcon' },
  { name: 'Employees', icon: 'UsersIcon' },
  { name: 'Core HR', icon: 'CogIcon' },
  { name: 'Finance', icon: 'CurrencyDollarIcon' },
];

// เรียกใช้ composable เพื่อดึงไอคอน
const getIcon = (iconName) => {
  return useHeroIcon(iconName);  // เรียกใช้ composable
};
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #f3f4f6;
}


</style>
