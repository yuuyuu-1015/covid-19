<script>
import {Bar, mixins} from 'vue-chartjs';
import Datas from '@/data/AllData.json';

export default {
  extends: Bar,
  mixins: [mixins.reactiveData],
  name: 'chart',
  props: {
      locationSelect: {
          type: String,
      },
      // yParamsSelect: {
      //     type: ,
      //     default: 
      // }
  },
  watch: {
    locationSelect:function(){ 
      this.renderChart(this.data, this.options)
    }
  },
  methods: {
    newInfectionF: function (infectionsPerDays) {
        const newinfection = []; // 新規感染者
        for(let i = 0, l=infectionsPerDays.length-1 ; i < l ; i++){
          let n = infectionsPerDays[i + 1] - infectionsPerDays[i];
        newinfection.push(n);
        }
        return newinfection;
    },
    parcentage: function parcentage(infectionsPerDays) {
      const increasePerDays = []; // 日々の感染者数の増加率
      for(let i = 0, l=infectionsPerDays.length-1 ; i < l ; i++){
        let n = infectionsPerDays[i + 1] - infectionsPerDays[i];
        let m = n / infectionsPerDays[i] * 100;
      increasePerDays.push(m);
      }
      return increasePerDays;
    },
    LocationDate: function(){
      const selectedLocation = [this.locationSelect];
      const locationselect = Datas.filter((v) => selectedLocation.includes(v.location));
      const dateArray = [];
      locationselect.map(x => dateArray.push(x.date));
      return dateArray;
    },
    TotalCase: function(){
      const selectedLocation = [this.locationSelect];
      const locationselect = Datas.filter((v) => selectedLocation.includes(v.location));
      const totalCaseArray = [];
      locationselect.map(x => totalCaseArray.push(x.total_cases));
      return totalCaseArray;
    },
    TotalDeath: function(d){
      const selectedLocation = [this.locationSelect];
      const locationselect = d.filter((v) => selectedLocation.includes(v.location));
      const TotalDeathArray = [];
      locationselect.map(x => TotalDeathArray.push(x.total_deaths));
      return TotalDeathArray;
    }
  },
  data () {
    return {
      data: {
        labels: this.LocationDate(),
        datasets: [
          {
            label: '感染者数推移',
            data: this.TotalCase(),
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