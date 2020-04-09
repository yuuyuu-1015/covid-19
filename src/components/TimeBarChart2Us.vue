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
    usDate: function(u){
      const selectedLocation = ['United States'];
      const locationus = u.filter((v) => selectedLocation.includes(v.location));
      const usDateArray = [];
      locationus.map(x => usDateArray.push(x.date));
      return usDateArray;
    },
    usTotalCase: function(u){
      const selectedLocation = ['United States'];
      const locationus = u.filter((v) => selectedLocation.includes(v.location));
      const usTotalCaseArray = [];
      locationus.map(x => usTotalCaseArray.push(x.total_cases));
      return usTotalCaseArray;
    }
  },
  data () {
    return {
      data: {
        labels: this.usDate(Data),
        datasets: [
          {
            label: '新規感染者',
            data: this.newInfectionF(this.usTotalCase(Data)),
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