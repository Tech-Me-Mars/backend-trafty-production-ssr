<script lang="ts" setup>
import Profile2 from "~/components/profile/Profile2.vue";
import CustomSelect from "~/elements/CustomSelect.vue";
import handlePagination from "~/lib/HandlePaginatin";
import PageTitle from "~/lib/PageTitle.vue";
import { Store } from "~/stores/Store";

const tableData = ref([
  { time: "20 mins ago", ipAdress: "236.125.56.54", device: "Firefox - Windows", name: "India", badge: "ERROR", badgeColor: "badge-danger" },
  { time: "2 mins ago", ipAdress: "236.125.56.78", device: "Chrome - Windows", name: "China", badge: "OK", badgeColor: "badge-success" },
  { time: "40 mins ago", ipAdress: "236.100.56.50", device: "iOS - iPhone Pro", name: "Indonesia", badge: "OK", badgeColor: "badge-success" },
  { time: "27 mins ago", ipAdress: "236.125.56.78", device: "Safari - Mac", name: "United States", badge: "ERROR", badgeColor: "badge-danger" },
  { time: "54 mins ago", ipAdress: "236.125.56.78", device: "Safari - Mac", name: "Brazil", badge: "ERROR", badgeColor: "badge-danger" },
  { time: "48 mins ago", ipAdress: "236.125.56.54", device: "Firefox - Windows", name: "Pakistan", badge: "OK", badgeColor: "badge-success" },
  { time: "40 mins ago", ipAdress: "236.100.56.50", device: "iOS - iPhone Pro", name: "Indonesia", badge: "OK", badgeColor: "badge-success" },
  { time: "48 mins ago", ipAdress: "236.125.56.54", device: "Firefox - Windows", name: "Pakistan", badge: "OK", badgeColor: "badge-success" },
  { time: "2 mins ago", ipAdress: "236.125.56.78", device: "Chrome - Windows", name: "China", badge: "OK", badgeColor: "badge-success" },
  { time: "20 mins ago", ipAdress: "236.125.56.54", device: "Firefox - Windows", name: "India", badge: "ERROR", badgeColor: "badge-danger" },
  { time: "27 mins ago", ipAdress: "236.125.56.78", device: "Safari - Mac", name: "United States", badge: "ERROR", badgeColor: "badge-danger" },
]);

const { paginationLength } = Store;
const { addActive, backPage, data, goToPage, nextPage, page, paginatedData, perPage, searchData, sortingArr } = handlePagination(tableData.value, 6);
</script>

<template>
  <PageTitle name="Logs" title="Dashboard" />
  <div class="container-fluid">
    <Profile2 title="Logs" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header border-0 py-3">
              <h4 class="heading mb-0">Logs</h4>
              <div class="d-flex align-items-center">
                <div class="dropdown bootstrap-select default-select status-select normal-select">
                  <CustomSelect :options="[{ title: 'All Time' }, { title: 'Week' }, { title: 'Month' }]" />
                </div>
                <button class="btn btn-sm btn-primary ms-2">View All</button>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>URL</th>
                      <th class="text-end">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="badge badge-sm badge-success light border-0">OK</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/not_found</a></td>
                      <td class="text-end">20 Dec 2024, 2:40 pm</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge-sm badge-danger light border-0">ERROR</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/invalid</a></td>
                      <td class="text-end">25 Jul 2024, 5:30 pm</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge-sm badge-danger light border-0">ERROR</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/payment</a></td>
                      <td class="text-end">20 Dec 2024, 2:40 pm</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge-sm badge-success light border-0">OK</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/not_found</a></td>
                      <td class="text-end">21 Feb 2024, 2:40 pm</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge-sm badge-success light border-0">OK</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/not_found</a></td>
                      <td class="text-end">25 Jul 2024, 5:30 pm</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge-sm badge-danger light border-0">ERROR</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/not_found</a></td>
                      <td class="text-end">20 Dec 2024, 2:40 pm</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge-sm badge-success light border-0">OK</span></td>
                      <td><a href="javascript:void(0);" class="text-primary">POST/project/w3crm/5482344/payment</a></td>
                      <td class="text-end">20 Dec 2024, 2:40 pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header border-0 py-3">
              <h4 class="heading mb-0">Login Sessions</h4>
              <div id="tableLogsExcelBTN"></div>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table id="tableLogs" class="table mb-1 table-striped-thead table-wide table-sm">
                  <thead>
                    <tr>
                      <th @click="sortingArr">Location</th>
                      <th @click="sortingArr">Status</th>
                      <th @click="sortingArr">Device</th>
                      <th @click="sortingArr">IP Address</th>
                      <th @click="sortingArr" class="text-end">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="({ time, ipAdress, device, name, badge, badgeColor }, ind) in paginatedData" :key="ind">
                      <td>{{ name }}</td>
                      <td>
                        <span :class="`badge badge-sm ${badgeColor}  light border-0`">{{ badge }}</span>
                      </td>
                      <td>
                        <a href="javascript:void(0);" class="text-primary">{{ device }}</a>
                      </td>
                      <td>{{ ipAdress }}</td>
                      <td class="text-end">{{ time }}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="dataTables_info p-3">
                    Showing
                    {{ paginationLength - 5 == -1 ? 1 : paginationLength - 5 }} to {{ paginationLength }} of {{ tableData.length }}
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
