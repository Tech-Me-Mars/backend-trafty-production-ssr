<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import Profile2 from "~/components/profile/Profile2.vue";
import CustomSelect from "~/elements/CustomSelect.vue";
import PageTitle from "~/lib/PageTitle.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import handlePagination from "~/lib/HandlePaginatin";
import { Store } from "~/stores/Store";

const tableData = ref([
  { badgeColor: "badge-success", status: "License", optator: "Samsung LDE : Workstation 45", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-success", status: "License", optator: "RamenLC: Workstation 2", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "none" },
  { badgeColor: "badge-success", status: "License", optator: "Swedline: Workstation 21", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-success", status: "License", optator: "ReXe: Workstation 7", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-success", status: "License", optator: "Nest Five: Workstation 86", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-success", status: "License", optator: "DSI: Workstation 320", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-success", status: "License", optator: "Konami: Workstation 4", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-warning", status: "To be Paid", optator: "Swedline: Workstation 54", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "fftt456765gjkkjhi83093985" },
  { badgeColor: "badge-danger", status: "Unknown", optator: "Konami: Workstation 4", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "none" },
  { badgeColor: "badge-danger", status: "Unknown", optator: "DSI: Workstation 3", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "none" },
  { badgeColor: "badge-danger", status: "Unknown", optator: "ReXe: Workstation 29", ipAdress: "236.125.56.78", created: "2 mins ago", apiKey: "none" },
]);
const state = reactive({
  series: [
    {
      name: "Net Profit",
      data: [700, 650, 680, 590, 720, 610, 760, 530, 610],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 280,
      // width: chartWidth + 55,
      toolbar: {
        show: false,
      },
      offsetX: -45,
      zoom: {
        enabled: false,
      },
    },
    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "straight",
      colors: ["var(--primary)"],
    },
    grid: {
      show: true,
      borderColor: "#eee",

      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      min: 0,
      max: 800,
      labels: {
        offsetX: 50,
      },
    },
    xaxis: {
      categories: ["May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      overwriteCategories: undefined,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        offsetX: 25,

        style: {
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 0.5,
      colors: "var(--primary)",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0.6,
            color: "var(--primary)",
            opacity: 0.2,
          },
          {
            offset: 0.6,
            color: "var(--primary)",
            opacity: 0.15,
          },
          {
            offset: 100,
            color: "var(--primary)",
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: string) {
          return "$" + val + "";
        },
      },
    },
  },
});
const { paginationLength } = Store;
const { addActive, backPage, data, goToPage, nextPage, page, paginatedData, perPage, searchData, sortingArr } = handlePagination(tableData.value, 10);
</script>

<template>
  <PageTitle name="Security" title="Dashboard" />
  <div class="container-fluid">
    <Profile2 title="Security" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h4 class="heading mb-0">Security Summary</h4>
            </div>
            <div class="card-body pb-0">
              <div class="row mb-2">
                <div class="col-sm-4 col-6 mb-3">
                  <div class="bg-success-light rounded px-3 py-2 text-center">
                    <span class="fs-14 text-success">User Sign-in</span>
                    <h3 class="mb-0 fw-semibold">36,899</h3>
                  </div>
                </div>
                <div class="col-sm-4 col-6 mb-3">
                  <div class="bg-primary-light rounded px-3 py-2 text-center">
                    <span class="fs-14 text-primary">Admin Sign-in</span>
                    <h3 class="mb-0 fw-semibold">72</h3>
                  </div>
                </div>
                <div class="col-sm-4 col-6 mb-3">
                  <div class="bg-danger-light rounded px-3 py-2 text-center">
                    <span class="fs-14 text-danger">Failed Attempts</span>
                    <h3 class="mb-0 fw-semibold">291</h3>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <h4 class="heading mb-0">Activity Chart</h4>
                <ul class="nav chart-summary-tab nav-pills" role="tablist">
                  <li class="nav-item ms-1">
                    <a class="nav-link btn btn-light text-secondary active" data-series="agents" data-bs-toggle="tab" href="#summaryAgents" role="tab">Agents</a>
                  </li>
                  <li class="nav-item ms-1">
                    <a class="nav-link btn btn-light text-secondary" data-series="clients" data-bs-toggle="tab" href="#summaryClients" role="tab">Clients</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clearfix overflow-hidden">
              <div id="lineChartSecuritySummary">
                <ClientOnly>
                  <VueApexCharts height="280" :series="state.series" :options="state.options" />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body p-4">
                  <Swiper class="owl-carousel owl-theme card-carousel card-carousel-dots p-2 pt-3 overflow-hidden" :slides-per-view="1" :modules="[Autoplay]" :autoplay="{ delay: 1500 }" :speed="1500">
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Recent Alerts</span>
                      <h6 class="mb-2">Login Attempt Failed</h6>
                      <p class="mb-4">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <div class="d-flex justify-content-between pt-1">
                        <span class="badge badge-sm border-0 badge-primary light">2 mins ago</span>
                        <span class="badge badge-sm border-0 badge-light">Details</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Recent Alerts</span>
                      <h6 class="mb-2">Login Attempt Failed</h6>
                      <p class="mb-4">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <div class="d-flex justify-content-between pt-1">
                        <span class="badge badge-sm border-0 badge-primary light">2 mins ago</span>
                        <span class="badge badge-sm border-0 badge-light">Details</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Recent Alerts</span>
                      <h6 class="mb-2">Login Attempt Failed</h6>
                      <p class="mb-4">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <div class="d-flex justify-content-between pt-1">
                        <span class="badge badge-sm border-0 badge-primary light">2 mins ago</span>
                        <span class="badge badge-sm border-0 badge-light">Details</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Recent Alerts</span>
                      <h6 class="mb-2">Login Attempt Failed</h6>
                      <p class="mb-4">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <div class="d-flex justify-content-between pt-1">
                        <span class="badge badge-sm border-0 badge-primary light">2 mins ago</span>
                        <span class="badge badge-sm border-0 badge-light">Details</span>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Swiper class="owl-carousel owl-theme card-carousel card-carousel-dots p-2 pt-3" :autoplay="{ delay: 1200 }" :speed="1200" :modules="[Autoplay]">
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Security Guidelines</span>
                      <h6 class="mb-2">Get Start Your Security</h6>
                      <p class="mb-4 pb-1">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <a href="javascript:void(0);" class="btn btn-primary light">Get Started</a>
                    </SwiperSlide>
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Security Guidelines</span>
                      <h6 class="mb-2">Get Start Your Security</h6>
                      <p class="mb-4 pb-1">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <a href="javascript:void(0);" class="btn btn-primary light">Get Started</a>
                    </SwiperSlide>
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Security Guidelines</span>
                      <h6 class="mb-2">Get Start Your Security</h6>
                      <p class="mb-4 pb-1">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <a href="javascript:void(0);" class="btn btn-primary light">Get Started</a>
                    </SwiperSlide>
                    <SwiperSlide class="item">
                      <span class="fs-14 mb-4 d-block">Security Guidelines</span>
                      <h6 class="mb-2">Get Start Your Security</h6>
                      <p class="mb-4 pb-1">To start a blog, think of a topic about good awesome first brainstorm details</p>
                      <a href="javascript:void(0);" class="btn btn-primary light">Get Started</a>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6">
          <div class="card">
            <div class="card-body text-center p-3 pb-1">
              <div class="clearfix">
                <h4>
                  Upgrade to Pro <br />
                  Create Limitless Deals
                </h4>
                <p>Craft a headline that is both informative and will capture creating an outline, and checking facts</p>
                <a href="javascript:void(0);" class="btn btn-primary">Upgrade Now</a>
              </div>
              <img class="view-light w-100" src="../../assets/images/upgrade-light.png" alt="" />
              <img class="view-dark w-100" src="../../assets/images/upgrade-dark.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="card">
            <div class="card-header border-0 py-3">
              <h4 class="heading mb-0">License Usage</h4>
              <div class="clearfix d-flex align-items-center">
                <div class="dropdown bootstrap-select default-select status-select normal-select">
                  <CustomSelect :options="[{ title: 'All Time' }, { title: 'Today' }, { title: 'Weekly' }, { title: 'Months' }]" />
                </div>
                <div id="licenseUsageExcelBTN"></div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table mb-1 table-striped-thead table-wide table-sm" id="tableLicenseUsage">
                  <thead>
                    <tr>
                      <th @click="sortingArr">Status</th>
                      <th @click="sortingArr">Operator</th>
                      <th>IP Address</th>
                      <th>Created</th>
                      <th @click="sortingArr">API Keys</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="({ status, optator, ipAdress, created, apiKey }, ind) in paginatedData" :key="ind">
                      <td>
                        <span class="badge badge-sm badge-success light border-0">{{ status }}</span>
                      </td>
                      <td>{{ optator }}</td>
                      <td>{{ ipAdress }}</td>
                      <td>{{ created }}</td>
                      <td>
                        <div class="select-text-wrap d-flex justify-content-between">
                          <div class="text-select-copy">{{ apiKey }}</div>
                          <button class="btn-select-text btn p-0 border-0 ms-4"><i class="las la-copy fs-4"></i></button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="dataTables_info p-3">
                    Showing
                    {{ paginationLength - 9 == -1 ? 1 : paginationLength - 9 }} to {{ paginationLength }} of {{ tableData.length }}
                    entries
                  </div>
                  <div class="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                    <a class="paginate_button previous" id="empoloyees-tblwrapper_previous" @click="backPage"><i class="fa-solid fa-angle-left"></i></a
                    ><span>
                      <a
                        class="paginate_button"
                        v-for="item in Math.ceil(data.length / perPage)"
                        :key="item"
                        :style="`background-color:${addActive == item ? 'var(--primary);' : ''};color:${addActive == item ? '#fff !important' : ''}`"
                        @click="() => goToPage(item)"
                        >{{ item }}</a
                      >
                    </span>
                    <a class="paginate_button next" @click="nextPage" aria-controls="empoloyees-tblwrapper" data-dt-idx="3" tabindex="0" id="empoloyees-tblwrapper_next"
                      ><i class="fa-solid fa-angle-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.paginate_button {
  height: 24px;
  width: 24px;
  padding: 0;
  margin-left: 0rem;
  margin: 0 0.125rem;
  line-height: 25px;
  text-align: center;
  font-size: 13px;
  border-radius: 0.375rem;
  border: 0;
  color: #0d99ff !important;
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  display: inline-block;
}

.paginate_button:hover {
  color: var(--primary);
  background: var(--rgba-primary-1);
}

#user-tbl_filter {
  color: #888888;
  border-radius: 1rem;
  margin-bottom: 0.35rem;
  padding-top: 1rem;
}
</style>
