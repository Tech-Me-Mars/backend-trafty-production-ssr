<script lang="ts" setup>
import CommonNavbar from "@/lib/CommonNavbar.vue";
import VueApexCharts from "vue3-apexcharts";
import { morris_donught, morris_line, morris_bar, line_chart_2, morris_area, morris_bar_stalked } from "@/lib/ChartsData";
</script>

<template>
  <CommonNavbar page="Charts" path="Apax" />
  <ClientOnly>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Donught Chart</h4>
                </div>
                <div class="card-body">
                  <div id="morris_donught" class="morris_chart_height">
                    <VueApexCharts height="210" :options="morris_donught.chartOption" :series="morris_donught.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Line Chart</h4>
                </div>
                <div class="card-body p-0">
                  <div id="morris_line" class="morris_chart_height">
                    <VueApexCharts height="210" :options="morris_line.chartOptions" :series="morris_line.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Bar Chart</h4>
                </div>
                <div class="card-body">
                  <div id="morris_bar" class="morris_chart_height">
                    <VueApexCharts height="210" :options="morris_bar.chartOptions" :series="morris_bar.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Line Chart</h4>
                </div>
                <div class="card-body">
                  <div id="line_chart_2" class="morris_chart_height">
                    <VueApexCharts height="210" :options="line_chart_2.chartOptions" :series="line_chart_2.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Bar Chart</h4>
                </div>
                <div class="card-body">
                  <div id="morris_bar_stalked" class="morris_chart_height">
                    <VueApexCharts height="210" :options="morris_bar_stalked.chartOptions" :series="morris_bar_stalked.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Area Chart</h4>
                </div>
                <div class="card-body">
                  <div id="morris_area" class="morris_chart_height">
                    <VueApexCharts height="210" :options="morris_area.chartOptions" :series="morris_area.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
