<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import TodoItem from "~/elements/home/TodoItem.vue";
import { reactive } from "vue";
import CustomSelect from "~/elements/CustomSelect.vue";

const state = reactive({
  series: [17, 8, 8, 17, 17, 8, 25],
  options: {
    chart: {
      type: "donut",
      width: 320,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: "600",
              offsetY: -16,
            },
            total: {
              show: true,
              fontSize: "14px",
              color: "#888888",
              fontWeight: "500",
              label: "Total",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: string, b: string) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: [
      "var(--primary)",
      "var(--bs-success)",
      "var(--bs-danger)",
      "var(--bs-warning)",
      "var(--bs-purple)",
      "var(--bs-dark)",
      "var(--bs-secondary)",
    ],
    labels: ["Laptop", "Phone", "Keyboard", "Mouse", "Monitors", "Watch", "Earbuds"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: ["var(--bs-white)"],
    },
    responsive: [
      {
        breakpoint: 1480,
        options: {
          chart: {
            type: "donut",
            width: 250,
          },
        },
      },
    ],
  },
});
const state2 = reactive({
  series: [30, 40, 20, 10],
  options: {
    chart: {
      type: "donut",
      width: 250,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "Arial",
              fontWeight: "500",
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: "11px",
              fontWeight: "500",
              fontFamily: "Arial",
              label: "Total projects",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["#FF9F00", "var(--primary)", "#3AC977", "#FF5E5E"],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  },
});
</script>

<template>
  <div class="col-xl-6">
    <div class="row sticky-top z-0">
      <div class="col-xxl-6 col-xl-12 col-md-6">
        <div class="card">
          <div class="card-header pb-0 border-0">
            <div class="clearfix">
              <h4 class="card-title mb-0">Projects Contributions</h4>
              <small class="d-block">84 New Tasks &amp; 29 Guides</small>
            </div>
            <div class="clearfix ms-auto">
              <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center p-2 hover-bg-light rounded my-1">
              <div
                class="avatar avatar-md border border-secondary border-opacity-10 rounded d-flex align-items-center justify-content-center bg-white"
              >
                <img src="../../assets/images/logo/google.png" alt="" />
              </div>
              <div class="clearfix ms-3">
                <h6 class="fs-14 mb-0 fw-semibold">Piper Aerostar</h6>
                <span class="fs-13">piper-aircraft-class.jsp</span>
              </div>
              <div class="clearfix ms-auto">
                <span class="badge badge-sm badge-light">0</span>
              </div>
            </div>
            <div class="d-flex align-items-center p-2 hover-bg-light rounded my-1">
              <div
                class="avatar avatar-md border border-secondary border-opacity-10 rounded d-flex align-items-center justify-content-center bg-white"
              >
                <img src="../../assets/images/logo/figma.png" alt="" />
              </div>
              <div class="clearfix ms-3">
                <h6 class="fs-14 mb-0 fw-semibold">Cirrus SR22</h6>
                <span class="fs-13">cirrus-aircraft.jsp</span>
              </div>
              <div class="clearfix ms-auto">
                <span class="badge badge-sm badge-light">3</span>
              </div>
            </div>
            <div class="d-flex align-items-center p-2 hover-bg-light rounded my-1">
              <div
                class="avatar avatar-md border border-secondary border-opacity-10 rounded d-flex align-items-center justify-content-center bg-white"
              >
                <img src="../../assets/images/logo/slack.png" alt="" />
              </div>
              <div class="clearfix ms-3">
                <h6 class="fs-14 mb-0 fw-semibold">Beachcraft Baron</h6>
                <span class="fs-13">baron-class.pyt</span>
              </div>
              <div class="clearfix ms-auto">
                <span class="badge badge-sm badge-light">0</span>
              </div>
            </div>
            <div class="d-flex align-items-center p-2 hover-bg-light rounded my-1">
              <div
                class="avatar avatar-md border border-secondary border-opacity-10 rounded d-flex align-items-center justify-content-center bg-white"
              >
                <img src="../../assets/images/logo/html.png" alt="" />
              </div>
              <div class="clearfix ms-3">
                <h6 class="fs-14 mb-0 fw-semibold">Cessna SF150</h6>
                <span class="fs-13">cessna-aircraft-class.jsp</span>
              </div>
              <div class="clearfix ms-auto">
                <span class="badge badge-sm badge-light">0</span>
              </div>
            </div>
            <div class="alert alert-primary border-primary outline-dashed py-3 px-3 mt-4 mb-0 text-dark">
              <strong class="text-primary">Intive New .NET Collaborators</strong> to creating great outstanding business to business .jsp modutr class
              scripts
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-12 col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Activity</h4>
          </div>
          <div class="card-body">
            <div class="widget-timeline-status">
              <ul class="timeline">
                <li>
                  <span class="timeline-status">08:30</span>
                  <div class="timeline-badge border-dark"></div>
                  <div class="timeline-panel">
                    <span>Quisque a consequat ante Sit amet magna at volutapt.</span>
                  </div>
                </li>
                <li>
                  <span class="timeline-status">10:30</span>
                  <div class="timeline-badge border-success"></div>
                  <div class="timeline-panel">
                    <span class="text-secondary fs-14 fw-semibold">Video Sharing</span>
                  </div>
                </li>
                <li>
                  <span class="timeline-status">02:42</span>
                  <div class="timeline-badge border-danger"></div>
                  <div class="timeline-panel">
                    <span class="text-secondary fs-14 fw-semibold">john just buy your product Sell <span class="text-primary">$250</span></span>
                  </div>
                </li>
                <li>
                  <span class="timeline-status">15:40</span>
                  <div class="timeline-badge border-info"></div>
                  <div class="timeline-panel">
                    <span>Mashable, a news website and blog, goes live.</span>
                  </div>
                </li>
                <li>
                  <span class="timeline-status">23:12</span>
                  <div class="timeline-badge border-warning"></div>
                  <div class="timeline-panel">
                    <span class="text-secondary fs-14 fw-semibold">StumbleUpon is acquired by <span class="text-primary">eBay</span></span>
                  </div>
                </li>
                <li>
                  <span class="timeline-status">11:12</span>
                  <div class="timeline-badge border-primary"></div>
                  <div class="timeline-panel">
                    <span>shared this on my fb wall a few months back.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-12 col-xl-12 col-md-12">
        <div class="card">
          <div class="card-header pb-0 border-0">
            <div class="clearfix">
              <h4 class="card-title mb-0">Top Selling Categories</h4>
              <small class="d-block">7 Category</small>
            </div>
          </div>
          <div class="card-body pt-1">
            <div class="row align-items-center">
              <div class="col-sm-6 mb-3" style="position: relative">
                <div id="chartTopSelling" style="min-height: 243.317px">
                  <ClientOnly>
                    <VueApexCharts width="320" :series="state.series" :options="state.options" />
                  </ClientOnly>
                </div>
                <div class="resize-triggers">
                  <div class="expand-trigger"><div style="width: 390px; height: 244px"></div></div>
                  <div class="contract-trigger"></div>
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-primary me-1"></i> Laptop</div>
                  <span>20</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-success me-1"></i> Phone</div>
                  <span>05</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-danger me-1"></i> Keyboard</div>
                  <span>05</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-warning me-1"></i> Mouse</div>
                  <span>20</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-purple me-1"></i> Monitors</div>
                  <span>21</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-dark me-1"></i> Watch</div>
                  <span>04</span>
                </div>
                <div class="d-flex justify-content-between mb-3">
                  <div class="text-black"><i class="fa-solid fa-square text-secondary me-1"></i> Earbuds</div>
                  <span>25</span>
                </div>
              </div>
            </div>
            <div class="alert alert-outline-light outline-dashed p-3 d-sm-flex align-items-center justify-content-between mb-0">
              <p class="mb-0">Category report for a company's quarterly sales performance</p>
              <div class="clearfix w-100 ms-auto text-sm-end mt-2 mt-sm-0">
                <a href="javascript:void(0);" class="btn btn-primary">Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-7 col-xl-12 col-md-6">
        <TodoItem />
      </div>

      <div class="col-xxl-5 col-xl-12 col-md-6">
        <div class="card">
          <div class="card-header pb-0 border-0">
            <h4 class="heading mb-0">Projects Status</h4>
            <div class="dropdown bootstrap-select default-select status-select normal-select">
              <CustomSelect :options="[{ title: 'Today' }, { title: 'Week' }, { title: 'Month' }]" />
            </div>
          </div>
          <div class="card-body" style="position: relative">
            <div id="chartProjectChart" class="project-chart" style="min-height: 187.033px">
              <ClientOnly>
                <VueApexCharts width="250px" :series="state2.series" :options="state2.options" />
              </ClientOnly>
            </div>
            <div class="clearfix mt-3">
              <div class="d-flex justify-content-between mb-3">
                <div class="text-black"><i class="fa-solid fa-square text-primary me-1"></i> Completed Projects</div>
                <span>40 Projects</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="text-black"><i class="fa-solid fa-square text-success me-1"></i> Progress Projects</div>
                <span>20 Projects</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="text-black"><i class="fa-solid fa-square text-danger me-1"></i> Cancelled</div>
                <span>10 Projects</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <div class="text-black"><i class="fa-solid fa-square text-warning me-1"></i> Yet to Start</div>
                <span>30 Projects</span>
              </div>
            </div>
            <div class="resize-triggers">
              <div class="expand-trigger"><div style="width: 316px; height: 392px"></div></div>
              <div class="contract-trigger"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
