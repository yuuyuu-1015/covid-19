<template>
  <div class="MainPage">
    <page-header :title="title"></page-header>
    <h2>Japan</h2>
    
        <time-bar-chartAll
          class="chart"
          :location-select="eventData.selectLocation"
        ></time-bar-chartAll>
        <select v-model="eventData.selectLocation">
          <option
            v-for="location in selectLocations"
            :key="location"
            :value="location"
          >
            {{location}}
          </option>
        </select>
        <p>{{eventData.selectLocation}}</p>
      
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import TimeBarChartAll from '@/components/TimeBarChartAll.vue';
import allData from '@/data/AllData.json';

export default {
  components: {
    PageHeader,
    TimeBarChartAll
    
  },
  methods: {
    getTotalLocations(){
      return allData
      .map(record => record.location)
      .filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
    }
  },
  data() {
    return{
      title: "コロナ分析グラフ",
      selectLocations: this.getTotalLocations(),
      eventData: {
        selectLocation: "Japan"
      }
    }
  }
}
</script>

<style>

.chart{
  display: block;
  width: 800px;
  margin: 0 auto;
}

</style>