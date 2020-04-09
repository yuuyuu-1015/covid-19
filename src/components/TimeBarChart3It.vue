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
    itDate: function(u){
    const selectedLocation = ['Italy'];
    const locationit = u.filter((v) => selectedLocation.includes(v.location));
    const itDateArray = [];
    locationit.map(x => itDateArray.push(x.date));
    return itDateArray;
    },
    itTotalCase: function(u){
      const selectedLocation = ['Italy'];
      const locationit = u.filter((v) => selectedLocation.includes(v.location));
      const itTotalCaseArray = [];
      locationit.map(x => itTotalCaseArray.push(x.total_cases));
      return itTotalCaseArray;
    }
  },
  data () {
    return {
      data: {
        labels: this.itDate(Data),
        datasets: [
          {
            label: '感染者数増加率',
            data: this.parcentage(this.itTotalCase(Data)),
            backgroundColor: 
              'rgba(255, 207, 70, 0.2)',
              
            borderColor: 
              'rgba(255, 207, 70, 1)',
              
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