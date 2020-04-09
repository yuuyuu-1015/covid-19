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
    usDate: function(u){
    const selectedLocation = ['United States'];
    const locationus = u.filter((v) => selectedLocation.includes(v.location));
    const usDateArray = [];
    locationus.map(x => usDateArray.push(x.date));
    return usDateArray;
    },
    usTotalDeath: function(u){
      const selectedLocation = ['United States'];
      const locationus = u.filter((v) => selectedLocation.includes(v.location));
      const usTotalDeathArray = [];
      locationus.map(x => usTotalDeathArray.push(x.total_deaths));
      return usTotalDeathArray;
    }
  },
  data () {
    return {
      data: {
        labels: this.usDate(Data),
        datasets: [
          {
            label: '死亡者数増加率',
            data: this.parcentage(this.usTotalDeath(Data)),
            backgroundColor: 
              'rgba(0, 255, 255, 0.2)',
              
            borderColor: 
              'rgba(0, 255, 255, 1)',
              
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