<script>
import { Bar } from 'vue-chartjs';
import Data from '@/data/data.json';

export default {
  extends: Bar,
  name: 'chart',
  data () {
    return {
      data: {
        labels: Data.patients_summary.date,
        datasets: [
          {
            label: 'コロナ感染者数推移',
            data: Data.patients_summary.data,
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
              labelString: 'Date'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 100,
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