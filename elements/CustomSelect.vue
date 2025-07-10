
<script lang="ts" setup>
import { ref, watch } from "vue";

const addActive = ref(0);

interface optionType {
  title: string;
  value?: string | number;
}

interface Props {
  options: optionType[];
  modelValue?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ""
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>();

// ค้นหา index ของ option ที่ตรงกับ modelValue
const findActiveIndex = () => {
  const index = props.options.findIndex(option => {
    const optionValue = option.value !== undefined ? option.value : option.title;
    return optionValue === props.modelValue;
  });
  return index >= 0 ? index : 0;
};

// ติดตาม modelValue เพื่อ update active index
watch(() => props.modelValue, () => {
  addActive.value = findActiveIndex();
}, { immediate: true });

// function สำหรับเลือก option
const selectOption = (index: number) => {
  addActive.value = index;
  const selectedOption = props.options[index];
  const valueToEmit = selectedOption.value !== undefined ? selectedOption.value : selectedOption.title;
  emit('update:modelValue', valueToEmit);
};
</script>

<template>
  <div class="dropdown bootstrap-select default-select wide form-control">
  <button
    type="button"
    tabindex="-1"
    class="btn dropdown-toggle btn-light"
    data-bs-toggle="dropdown"
    role="combobox"
    aria-owns="bs-select-2"
    aria-haspopup="listbox"
    aria-expanded="true"
    title="India"
    style="width: 100%; justify-content: start"
  >
    <div class="filter-option">
      <div class="filter-option-inner">
        <div class="filter-option-inner-inner">{{ options[addActive].title }}</div>
      </div>
    </div>
  </button>
  <div
    class="dropdown-menu"
    style="max-height: 239.031px; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 50px); width: 100%"
    data-popper-placement="bottom-start"
  >
    <div class="inner show" role="listbox" id="bs-select-2" tabindex="-1" aria-activedescendant="bs-select-2-0" style="max-height: 138.031px; overflow-y: auto; min-height: 100px">
      <ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px; width: 100%">
        <li :class="addActive == ind ? 'selected active' : ''" v-for="({ title }, ind) in options" :key="ind" @click="selectOption(ind)">
          <NuxtLink
            to="#"
            @click.prevent
            role="option"
            :class="`dropdown-item ${addActive == ind ? 'active selected' : ''}`"
            id="bs-select-2-0"
            tabindex="0"
            aria-setsize="4"
            aria-posinset="1"
            aria-selected="true"
            ><span class="text">{{ title }}</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>