import { ref } from "vue";

const earningChartRef = ref<HTMLDivElement | null>(null);
const naveHeader = ref<boolean>(false);
const iconHover = ref<boolean>(false);
const paginationLength = ref();
const openChatbox = ref();
const emaiComposeMenuToggle = ref(false);
export const Store = {
  openChatbox,
  seriesType: "week",
  earningChartRef,
  naveHeader,
  iconHover,
  paginationLength,
  emaiComposeMenuToggle,
};
