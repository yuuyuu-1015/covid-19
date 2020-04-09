<script>
import { Bar } from 'vue-chartjs';
import Data from '@/data/AllData.json';

export default {
  extends: Bar,
  name: 'chart',
  methods: {
    newInfectionF: function (infectionsPerDays) {
        const newinfection = []; // 新規感染者
        for(let i = 0, l=infectionsPerDays.length-1 ; i < l ; i++){
          let n = infectionsPerDays[i + 1] - infectionsPerDays[i];
        newinfection.push(n);
        }
        return newinfection;
    },
    itDate: function(u){
      const selectedLocation = ['Italy'];
      const locationit = u.filter((v) => selectedLocation.includes(v.location));
      const itDateArray = [];
      locationit.map(x => itDateArray.push(x.date));
      return itDateArray;
    },
    itTotalDeath: function(u){
      const selectedLocation = ['Italy'];
      const locationit = u.filter((v) => selectedLocation.includes(v.location));
      const itTotalDeathArray = [];
      locationit.map(x => itTotalDeathArray.push(x.total_deaths));
      return itTotalDeathArray;
    }
  },
  data () {
    return {
      data: {
        labels: this.itDate(Data),
        datasets: [
          {
            label: '新規死亡者数推移',
            data: this.newInfectionF(this.itTotalDeath(Data)),
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
              stepSize: 100,
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