<script>
import { Bar } from 'vue-chartjs';
import Data from '@/data/AllData.json';

export default {
  extends: Bar,
  name: 'chart',
  methods: {
    jpDate: function(u){
      const selectedLocation = ['Japan'];
      const locationJp = u.filter((v) => selectedLocation.includes(v.location));
      const jpDateArray = [];
      locationJp.map(x => jpDateArray.push(x.date));
      return jpDateArray;
    },
    jpTotalCase: function(u){
      const selectedLocation = ['Japan'];
      const locationJp = u.filter((v) => selectedLocation.includes(v.location));
      const jpTotalCaseArray = [];
      locationJp.map(x => jpTotalCaseArray.push(x.total_cases));
      return jpTotalCaseArray;
    }
  },
  data () {
    return {
      data: {
        labels: this.jpDate(Data),
        datasets: [
          {
            label: '感染者数推移',
            data: this.jpTotalCase(Data),
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
              stepSize: 200,
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