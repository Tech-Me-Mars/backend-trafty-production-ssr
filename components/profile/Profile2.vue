<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="card profile-overview">
    <div class="card-body d-flex">
      <div class="clearfix">
        <div class="d-inline-block position-relative me-sm-4 me-3 mb-3 mb-lg-0">
          <img src="../../assets/images/avatar/pic7.jpg" alt="" class="rounded-4 profile-avatar" />
          <span class="fa fa-circle border border-3 border-white text-success position-absolute bottom-0 end-0 rounded-circle"></span>
        </div>
      </div>
      <div class="clearfix d-xl-flex flex-grow-1">
        <div class="clearfix pe-md-5">
          <h3 class="fw-semibold mb-1">Atkinson <img src="../../assets/images/blue-tick.png" alt="Blue Tick" /></h3>
          <ul class="d-flex flex-wrap fs-6 align-items-center">
            <li class="me-3 d-inline-flex align-items-center"><i class="las la-user me-1 fs-18"></i>Web Designer</li>
            <li class="me-3 d-inline-flex align-items-center"><i class="las la-map-marker me-1 fs-18"></i>420 City Path, AU 123-456</li>
            <li class="me-3 d-inline-flex align-items-center"><i class="las la-envelope me-1 fs-18"></i>info@gmail.com</li>
          </ul>
          <div class="d-md-flex d-none flex-wrap">
            <div class="border outline-dashed rounded p-2 d-flex align-items-center me-3 mt-3">
              <div class="avatar avatar-md bg-primary-light text-primary rounded d-flex align-items-center justify-content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1V23" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="clearfix ms-2">
                <h3 class="mb-0 fw-semibold lh-1">$1,250</h3>
                <span class="fs-14">Total Earnings</span>
              </div>
            </div>
            <div class="border outline-dashed rounded p-2 d-flex align-items-center me-3 mt-3">
              <div class="avatar avatar-md bg-primary-light text-primary rounded d-flex align-items-center justify-content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="clearfix ms-2">
                <h3 class="mb-0 fw-semibold lh-1">125</h3>
                <span class="fs-14">New Referrals</span>
              </div>
            </div>
            <div class="border outline-dashed rounded p-2 d-flex align-items-center me-3 mt-3">
              <div class="avatar avatar-md bg-primary-light text-primary rounded d-flex align-items-center justify-content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="clearfix ms-2">
                <h3 class="mb-0 fw-semibold lh-1">25</h3>
                <span class="fs-14">New Deals</span>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix mt-3 mt-xl-0 ms-auto d-flex flex-column col-xl-3">
          <div class="clearfix mb-3 text-xl-end">
            <a href="javascript:void(0);" class="btn btn-light">Follow</a>
            <a href="javascript:void(0);" class="btn btn-primary ms-2">Hire Me</a>
          </div>
          <div class="mt-auto d-flex align-items-center" style="position: relative">
            <div class="clearfix me-3">
              <span class="fw-medium text-black d-block mb-1">Progress</span>
              <p class="mb-0 d-flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83334 14.1668L14.1667 5.8335" stroke="var(--bs-success)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M5.83334 5.8335H14.1667V14.1668" stroke="var(--bs-success)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="text-success me-1">+3.50%</span>
              </p>
            </div>
            <div id="chartProfileProgress" style="min-height: 100px">
              <div id="apexchartsyd948jrc" class="apexcharts-canvas apexchartsyd948jrc apexcharts-theme-light" style="width: 158px; height: 100px">
                <svg
                  id="SvgjsSvg1277"
                  width="158"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  class="apexcharts-svg"
                  xmlns:data="ApexChartsNS"
                  transform="translate(0, 0)"
                  style="background: transparent"
                >
                  <g id="SvgjsG1279" class="apexcharts-inner apexcharts-graphical" transform="translate(-1, 0)">
                    <defs id="SvgjsDefs1278">
                      <clipPath id="gridRectMaskyd948jrc">
                        <rect id="SvgjsRect1282" width="165" height="102" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                      </clipPath>
                      <clipPath id="gridRectMarkerMaskyd948jrc">
                        <rect id="SvgjsRect1283" width="163" height="104" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                      </clipPath>
                      <linearGradient id="SvgjsLinearGradient1288" x1="0" y1="0" x2="0" y2="1">
                        <stop id="SvgjsStop1289" stop-opacity="0.4" stop-color="var(--primary)" offset="0"></stop>
                        <stop id="SvgjsStop1290" stop-opacity="0.4" stop-color="var(--primary)" offset="0.006"></stop>
                        <stop id="SvgjsStop1291" stop-opacity="0" stop-color="white" offset="1"></stop>
                      </linearGradient>
                    </defs>
                    <g id="SvgjsG1294" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1295" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g>
                    <g id="SvgjsG1308" class="apexcharts-grid">
                      <g id="SvgjsG1309" class="apexcharts-gridlines-horizontal" style="display: none">
                        <line id="SvgjsLine1311" x1="0" y1="0" x2="159" y2="0" stroke="#eeeeee" stroke-dasharray="0" class="apexcharts-gridline"></line>
                        <line id="SvgjsLine1312" x1="0" y1="20" x2="159" y2="20" stroke="#eeeeee" stroke-dasharray="0" class="apexcharts-gridline"></line>
                        <line id="SvgjsLine1313" x1="0" y1="40" x2="159" y2="40" stroke="#eeeeee" stroke-dasharray="0" class="apexcharts-gridline"></line>
                        <line id="SvgjsLine1314" x1="0" y1="60" x2="159" y2="60" stroke="#eeeeee" stroke-dasharray="0" class="apexcharts-gridline"></line>
                        <line id="SvgjsLine1315" x1="0" y1="80" x2="159" y2="80" stroke="#eeeeee" stroke-dasharray="0" class="apexcharts-gridline"></line>
                        <line id="SvgjsLine1316" x1="0" y1="100" x2="159" y2="100" stroke="#eeeeee" stroke-dasharray="0" class="apexcharts-gridline"></line>
                      </g>
                      <g id="SvgjsG1310" class="apexcharts-gridlines-vertical" style="display: none"></g>
                      <line id="SvgjsLine1318" x1="0" y1="100" x2="159" y2="100" stroke="transparent" stroke-dasharray="0"></line>
                      <line id="SvgjsLine1317" x1="0" y1="1" x2="0" y2="100" stroke="transparent" stroke-dasharray="0"></line>
                    </g>
                    <g id="SvgjsG1284" class="apexcharts-area-series apexcharts-plot-series">
                      <g id="SvgjsG1285" class="apexcharts-series" seriesName="NetxProfit" data:longestSeries="true" rel="1" data:realIndex="0">
                        <path
                          id="SvgjsPath1292"
                          d="M 0 100L 0 86.66666666666666L 15.9 20L 31.8 53.33333333333333L 47.7 36.66666666666667L 63.6 53.33333333333333L 79.5 40L 95.4 60L 111.3 43.33333333333333L 127.2 53.33333333333333L 143.1 36.66666666666667L 159 20L 159 100M 159 20z"
                          fill="url(#SvgjsLinearGradient1288)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="butt"
                          stroke-width="0"
                          stroke-dasharray="0"
                          class="apexcharts-area"
                          index="0"
                          clip-path="url(#gridRectMaskyd948jrc)"
                          pathTo="M 0 100L 0 86.66666666666666L 15.9 20L 31.8 53.33333333333333L 47.7 36.66666666666667L 63.6 53.33333333333333L 79.5 40L 95.4 60L 111.3 43.33333333333333L 127.2 53.33333333333333L 143.1 36.66666666666667L 159 20L 159 100M 159 20z"
                          pathFrom="M -1 120L -1 120L 15.9 120L 31.8 120L 47.7 120L 63.6 120L 79.5 120L 95.4 120L 111.3 120L 127.2 120L 143.1 120L 159 120"
                        ></path>
                        <path
                          id="SvgjsPath1293"
                          d="M 0 86.66666666666666L 15.9 20L 31.8 53.33333333333333L 47.7 36.66666666666667L 63.6 53.33333333333333L 79.5 40L 95.4 60L 111.3 43.33333333333333L 127.2 53.33333333333333L 143.1 36.66666666666667L 159 20"
                          fill="none"
                          fill-opacity="1"
                          stroke="var(--primary)"
                          stroke-opacity="1"
                          stroke-linecap="butt"
                          stroke-width="2"
                          stroke-dasharray="0"
                          class="apexcharts-area"
                          index="0"
                          clip-path="url(#gridRectMaskyd948jrc)"
                          pathTo="M 0 86.66666666666666L 15.9 20L 31.8 53.33333333333333L 47.7 36.66666666666667L 63.6 53.33333333333333L 79.5 40L 95.4 60L 111.3 43.33333333333333L 127.2 53.33333333333333L 143.1 36.66666666666667L 159 20"
                          pathFrom="M -1 120L -1 120L 15.9 120L 31.8 120L 47.7 120L 63.6 120L 79.5 120L 95.4 120L 111.3 120L 127.2 120L 143.1 120L 159 120"
                        ></path>
                        <g id="SvgjsG1286" class="apexcharts-series-markers-wrap" data:realIndex="0">
                          <g class="apexcharts-series-markers">
                            <circle
                              id="SvgjsCircle1324"
                              r="0"
                              cx="0"
                              cy="0"
                              class="apexcharts-marker w23njgdtv no-pointer-events"
                              stroke="#ffffff"
                              fill="var(--primary)"
                              fill-opacity="1"
                              stroke-width="2"
                              stroke-opacity="0.9"
                              default-marker-size="0"
                            ></circle>
                          </g>
                        </g>
                      </g>
                      <g id="SvgjsG1287" class="apexcharts-datalabels" data:realIndex="0"></g>
                    </g>
                    <line id="SvgjsLine1319" x1="0" y1="0" x2="159" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line>
                    <line id="SvgjsLine1320" x1="0" y1="0" x2="159" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line>
                    <g id="SvgjsG1321" class="apexcharts-yaxis-annotations"></g>
                    <g id="SvgjsG1322" class="apexcharts-xaxis-annotations"></g>
                    <g id="SvgjsG1323" class="apexcharts-point-annotations"></g>
                  </g>
                  <g id="SvgjsG1307" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g>
                  <g id="SvgjsG1280" class="apexcharts-annotations"></g>
                </svg>
                <div class="apexcharts-legend" style="max-height: 50px"></div>
                <div class="apexcharts-tooltip apexcharts-theme-light">
                  <div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px"></div>
                  <div class="apexcharts-tooltip-series-group" style="order: 1">
                    <span class="apexcharts-tooltip-marker" style="background-color: var(--primary)"></span>
                    <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px">
                      <div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-label"></span><span class="apexcharts-tooltip-text-value"></span></div>
                      <div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div>
                    </div>
                  </div>
                </div>
                <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div>
              </div>
            </div>
            <div class="resize-triggers">
              <div class="expand-trigger"><div style="width: 240px; height: 101px"></div></div>
              <div class="contract-trigger"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer py-0 d-flex flex-wrap justify-content-between align-items-center">
      <ul class="nav nav-underline nav-underline-primary nav-underline-text-dark nav-underline-gap-x-0" id="tabMyProfileBottom" role="tablist">
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/overview" :class="`nav-link py-3 border-3 text-dark ${'Overview' == title ? 'active' : ''}`">Overview</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/settings" :class="`nav-link py-3 border-3 text-dark ${'Settings' == title ? 'active' : ''}`">Settings</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/security" :class="`nav-link py-3 border-3 text-dark ${'Security' == title ? 'active' : ''}`">Security</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/activity" :class="`nav-link py-3 border-3 text-dark ${'Activity' == title ? 'active' : ''}`">Activity</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/billing" :class="`nav-link py-3 border-3 text-dark ${'Billing' == title ? 'active' : ''}`">Billing</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/statements" :class="`nav-link py-3 border-3 text-dark ${'Statements' == title ? 'active' : ''}`">Statements</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/referrals" :class="`nav-link py-3 border-3 text-dark ${'Referrals' == title ? 'active' : ''}`">Referrals</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/api-keys" :class="`nav-link py-3 border-3 text-dark ${'API Keys' == title ? 'active' : ''}`">API Keys</NuxtLink>
        </li>
        <li class="nav-item ms-1" role="presentation">
          <NuxtLink to="/account/logs" :class="`nav-link py-3 border-3 text-dark ${'Logs' == title ? 'active' : ''}`">Logs</NuxtLink>
        </li>
      </ul>
      <ul class="d-xl-flex d-none py-2">
        <li class="px-1">
          <a class="btn btn-light btn-sharp" href="javascript:void(0);">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li class="px-1">
          <a class="btn btn-light btn-sharp" href="javascript:void(0);">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li class="px-1">
          <a class="btn btn-light btn-sharp" href="javascript:void(0);">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li class="px-1">
          <a class="btn btn-light btn-sharp" href="javascript:void(0);">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </li>
        <li class="px-1">
          <a class="btn btn-light btn-sharp" href="javascript:void(0);">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
