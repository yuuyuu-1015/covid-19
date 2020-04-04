<script>
import { Bar } from 'vue-chartjs';
import Data from '@/data/data.json';

export default {
  extends: Bar,
  name: 'chart',
  methods: {
      parcentage: function parcentage(infectionsPerDays) {
        const increasePerDays = []; // 日々の感染者数の増加率
        for(let i = 0, l=infectionsPerDays.length-1 ; i < l ; i++){
          let n = infectionsPerDays[i + 1] - infectionsPerDays[i];
          let m = n / infectionsPerDays[i] * 100;
        increasePerDays.push(m);
        }
        return increasePerDays;
      }
  },
  data () {
    return {
      data: {
        labels: Data.patients_summary.date,
        datasets: [
          {
            label: '感染者数増加率',
            data: this.parcentage(Data.patients_summary.data),
            backgroundColor: 
              'rgba(255, 99, 132, 0.2)',
              
            borderColor: 
              'rgba(255, 99, 132, 1)',
              
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: '日付(月日)'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            },
            scaleLabel: {
              display: true,
              labelString: '%'
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>