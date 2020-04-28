<script>
import { Bar } from "vue-chartjs";
import allData from "@/data/AllData.json";

export default {
  extends: Bar,
  name: "chart",
  props: {
    locationSelect: {
      type: String
    }
    // yParamsSelect: {
    //     type: ,
    //     default:
    // }
  },
  methods: {
    newInfectionF(infectionsPerDays) {
      const newinfection = []; // 新規感染者
      for (let i = 0, l = infectionsPerDays.length - 1; i < l; i++) {
        let n = infectionsPerDays[i + 1] - infectionsPerDays[i];
        newinfection.push(n);
      }
      return newinfection;
    },
    parcentage(infectionsPerDays) {
      const increasePerDays = []; // 日々の感染者数の増加率
      for (let i = 0, l = infectionsPerDays.length - 1; i < l; i++) {
        let n = infectionsPerDays[i + 1] - infectionsPerDays[i];
        let m = (n / infectionsPerDays[i]) * 100;
        increasePerDays.push(m);
      }
      return increasePerDays;
    },
    /**
     * 現在指定されている国の死者数累積値を日毎に取得する
     * @returns {Array<number>}
     */
    getTotalDeath() {
      return allData
        .filter(record => record.location === this.locationSelect)
        .map(record => record.total_deaths);
    },
    /**
     * 現在指定されている国のデータ上に存在する日付の一覧を取得する
     * @returns {Array<string>}
     */
    getLocationDate() {
      return allData
        .filter(record => record.location === this.locationSelect)
        .map(record => record.date);
    },
    /**
     * 現在指定されている国の感染者数累積値を日毎に取得する
     * @returns {Array<number>}
     */
    getTotalCase() {
      return allData
        .filter(record => record.location === this.locationSelect)
        .map(record => record.total_cases);
    }
  },
  watch: {
    locationSelect() {
      // チャートに表示するデータを更新する
      this.chartData.labels = this.getLocationDate();
      this.chartData.datasets[0].data = this.parcentage(this.getTotalDeath());

      // チャートの描画を更新する
      this.$data._chart.update();
    }
  },
  data() {
    return {
      chartData: {
        labels: this.getLocationDate(),
        datasets: [
          {
            label: "死亡者数増加率",
            data: this.parcentage(this.getTotalDeath()),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "日付(月日)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 200
              },
              scaleLabel: {
                display: true,
                labelString: "増加率"
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
