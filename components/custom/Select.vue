<script lang="ts" setup>
import { ref, watch, computed } from "vue";

// รับ props ที่ flexible
interface optionType {
  [key: string]: any; // ยอมรับทุก field
}

interface Props {
  options: optionType[];
  modelValue?: string | number;
  labelField?: string;
  valueField?: string;
  placeholder?: string; // เพิ่มตรงนี้
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  labelField: "title",
  valueField: "value",
  placeholder: "", // Default placeholder
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>();

const addActive = ref(-1);

// function สำหรับดึง label/value ของ option
const getLabel = (option: optionType) => {
  return option[props.labelField] ?? option.title ?? "";
};

const getValue = (option: optionType) => {
  return option[props.valueField] ?? option.value ?? getLabel(option);
};

// หาว่า modelValue ตรงกับ option ไหน (index)
const findActiveIndex = () => {
  const index = props.options.findIndex(option => getValue(option) === props.modelValue);
  return index; // -1 ถ้าไม่เจอ
};

watch(() => props.modelValue, () => {
  addActive.value = findActiveIndex();
}, { immediate: true });

const selectOption = (index: number) => {
  addActive.value = index;
  const selectedOption = props.options[index];
  emit('update:modelValue', getValue(selectedOption));
};

// computed สำหรับใช้ใน template
const currentLabel = computed(() => {
  if (addActive.value === -1) return props.placeholder;
  return getLabel(props.options[addActive.value]);
});
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
      :title="currentLabel"
      style="width: 100%; justify-content: start"
    >
      <div class="filter-option">
        <div class="filter-option-inner">
          <div class="filter-option-inner-inner">{{ currentLabel }}</div>
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
          <li 
            :class="addActive == ind ? 'selected active' : ''" 
            v-for="(option, ind) in options" 
            :key="ind" 
            @click="selectOption(ind)"
          >
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
            >
              <span class="text">{{ getLabel(option) }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>