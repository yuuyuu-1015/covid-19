<script>
import { Bar } from 'vue-chartjs';
import Data from '@/data/data.json';

export default {
  extends: Bar,
  name: 'chart',
  methods: {
      dateNewCase(n){
          n.splice(0, 9);
          return n;
      }
  },
  data () {
    return {
      data: {
        labels: Data.patients_summary.date,
        datasets: [
          {
            label: '新規感染者',
            data: Data.patients_summary.data_new_case,
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
              labelString: '感染者'
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