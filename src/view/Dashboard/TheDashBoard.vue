<template>
  <div class="dashboard">
    <div class="header">
      <div class="header-item doctors">
        <div class="header-item__left">
          <i class="fa-solid fa-user-doctor"></i>
        </div>
        <div class="header-item__right">
          <span>400</span>
          <div class="header-item__title">Doctors</div>
        </div>
      </div>
      <div class="header-item patients">
        <div class="header-item__left">
          <i class="fa-regular fa-user"></i>
        </div>
        <div class="header-item__right">
          <span>430</span>
          <div class="header-item__title">Patients</div>
        </div>
      </div>
      <div class="header-item hospital">
        <div class="header-item__left">
          <i class="fa-regular fa-hospital"></i>
        </div>
        <div class="header-item__right">
          <span>448</span>
          <div class="header-item__title">Hospital</div>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body-chart">
        <ApexCharts
          type="bar"
          :height="500"
          :options="barChartOptions"
          :series="series"
        />
      </div>
      <div class="body-chart">
        <ApexCharts
          type="pie"
          :height="500"
          :options="pieChartOptions"
          :series="pieChartSeries"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "vue3-apexcharts";
export default {
  name: "TheDashboard",
  components: { ApexCharts },
  data() {
    return {
      barChartOptions: {
        xaxis: {
          categories: ["Bác sĩ", "Bệnh nhân", "Bệnh viện"],
        },
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            barHeight: "40px",
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        tooltip: {
          theme: "dark",
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
      series: [
        {
          data: [400, 430, 448],
        },
      ],
      pieChartOptions: {
        labels: ["Bác sĩ", "Bệnh nhân", "Bệnh viện"],
      },
      pieChartSeries: [400, 430, 448],
    };
  },
};
</script>

<style scoped>
.iframe {
  margin-top: 20px;
  margin-left: -5px;
  width: 100%;
  height: 800px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.dashboard .header {
  direction: ltr;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}

.dashboard .header-item {
  height: 105px;
  width: 386px;
  padding: 20px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
}

.dashboard .header-item .header-item__left {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
}

.dashboard .header-item .header-item__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.dashboard .header-item .header-item__right span {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 14px;
  line-height: 20px;
}

.dashboard .header-item .header-item__right .header-item__title {
  font-size: 13px;
  border-radius: 4px;
  padding: 5px 10px;
  color: #fff;
  display: flex;
  align-items: center;
}
.dashboard .doctors .header-item__left {
  background-color: #009efb;
}

.dashboard .doctors .header-item__right .header-item__title {
  background-color: #009efb;
}

.dashboard .patients .header-item__left {
  background-color: rgba(0, 227, 150, 0.85);
}

.dashboard .patients .header-item__right .header-item__title {
  background-color: rgba(0, 227, 150, 0.85);
}

.dashboard .hospital .header-item__left {
  background-color: rgba(254, 176, 25, 0.85);
}

.dashboard .hospital .header-item__right .header-item__title {
  background-color: rgba(254, 176, 25, 0.85);
}

.dashboard .body {
  direction: ltr;
  width: 100%;
  display: flex;
  margin-top: 32px;
}

.dashboard .body-chart {
  width: 50%;
}
</style>