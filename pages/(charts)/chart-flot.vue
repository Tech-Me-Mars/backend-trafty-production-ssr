<script lang="ts" setup>
import CommonNavbar from "@/lib/CommonNavbar.vue";
import { flotBar1Chart, flotBar2Chart, flotLineChart, flotLineChart2, flotLineChart3, flotArea1, flotArea2 } from "@/lib/ChartsData";
import VueApexCharts from "vue3-apexcharts";
import RealTimeChart from "@/components/floatChart/RealTimeChart.vue";
</script>
<template>
  <ClientOnly>
    <CommonNavbar page="Charts" path="Flot" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Bar Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotBar1" class="flot-chart">
                    <VueApexCharts
                      type="bar"
                      height="219"
                      width="530px"
                      :options="flotBar1Chart.chartOptions"
                      :series="flotBar1Chart.series"
                    ></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Bar Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotBar2" class="flot-chart">
                    <VueApexCharts
                      type="bar"
                      height="219"
                      width="530px"
                      :options="flotBar2Chart.chartOptions"
                      :series="flotBar2Chart.series"
                    ></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Line Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotLine1" class="flot-chart">
                    <VueApexCharts type="line" height="219" :options="flotLineChart.chartOptions" :series="flotLineChart.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Line Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotLine2" class="flot-chart">
                    <VueApexCharts type="line" height="219" :options="flotLineChart2.chartOptions" :series="flotLineChart2.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Line Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotLine3" class="flot-chart">
                    <VueApexCharts type="line" height="219" :options="flotLineChart3.chartOptions" :series="flotLineChart3.series"></VueApexCharts>
                    <VueApexCharts type="line" height="219" :options="flotArea1.chartOptions" :series="flotArea1.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Area Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotArea1" class="flot-chart">
                    <VueApexCharts type="area" height="219" :options="flotArea1.chartOptions" :series="flotArea1.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Area Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotArea2" class="flot-chart">
                    <VueApexCharts type="area" height="219" :options="flotArea2.chartOptions" :series="flotArea2.series"></VueApexCharts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Realtime Chart</h4>
                </div>
                <div class="card-body">
                  <div id="flotRealtime1" class="flot-chart">
                    <RealTimeChart />
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
