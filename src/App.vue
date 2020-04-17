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
// import Data from '@/data/AllData.json';

export default {
  components: {
    PageHeader,
    TimeBarChartAll, 
    // Data
  },
  data() {
    return{
      title: "コロナ分析グラフ",
      selectLocations: ["Japan", "Italy", "Spain"],
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