// composables/useHeroIcons.js
import { defineAsyncComponent } from 'vue';

export const useHeroIcon = (iconName) => {
  return defineAsyncComponent(async () => {
    try {
      // ลอง import ไอคอนจาก outline ก่อน
      const outlineModule = await import('@heroicons/vue/24/outline');
      if (outlineModule[iconName]) {
        return outlineModule[iconName];
      }

      // หากไม่พบ ให้ fallback ไปที่ solid icons
      const solidModule = await import('@heroicons/vue/24/solid');
      if (solidModule[iconName]) {
        return solidModule[iconName];
      }

      // Fallback สุดท้าย
      return outlineModule.HomeIcon;
    } catch (error) {
      console.warn(`Icon ${iconName} not found`);
      const fallbackModule = await import('@heroicons/vue/24/outline');
      return fallbackModule.HomeIcon;
    }
  });
};
