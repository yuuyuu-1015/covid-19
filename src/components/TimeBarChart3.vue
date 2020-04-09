<script>
import { Bar } from 'vue-chartjs';
import Data from '@/data/AllData.json';

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
    },
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
            label: '感染者数増加率',
            data: this.parcentage(this.jpTotalCase(Data)),
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