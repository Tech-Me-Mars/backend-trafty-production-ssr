<script lang="ts" setup>
import { SVGImage } from "@/constent/Theme";
import VueApexCharts from "vue3-apexcharts";
import { reactive } from "vue";
const doughtnutChart = reactive({
  series: [30, 40, 20, 10],
  chartOption: {
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
    colors: ["#FF9F00", "var(--primary)", "#3AC977", "#FF5E5E"],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  },
});

const projectStatusData = [
  { img: SVGImage.color1, title: "Completed Projects" },
  { img: SVGImage.color2, title: "Progress Projects" },
  { img: SVGImage.color3, title: "Cancelled" },
  { img: SVGImage.color4, title: "Yet to Start" },
];
</script>

<template>
  <ClientOnly>
    <div class="card-body">
      <div id="projectChart" class="project-chart">
        <VueApexCharts width="250px" :options="doughtnutChart.chartOption" :series="doughtnutChart.series" />
      </div>
      <div class="project-date">
        <div class="project-media" v-for="({ img, title }, ind) in projectStatusData" :key="ind">
          <p class="mb-0">
            <span v-html="img"></span>
            {{ title }}
          </p>
          <span>125 Projects</span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
