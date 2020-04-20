<template>
  <div class="MainPage">
    <page-header :title="title"></page-header>
    <h2>{{eventData.selectLocation}}</h2>
    
        <select v-model="eventData.selectLocation">
          <option
            v-for="location in selectLocations"
            :key="location"
            :value="location"
          >
            {{location}}
          </option>
        </select>
        <time-bar-chart-total-case
          class="chart"
          :location-select="eventData.selectLocation"
        ></time-bar-chart-total-case>
        <time-bar-chart-new-infection
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-new-infection>
        <time-bar-chart-infection-increase-rate
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-infection-increase-rate>
        <time-bar-chart-total-death
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-total-death>
        <time-bar-chart-new-death
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-new-death>
        <time-bar-chart-death-increase-rate
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-death-increase-rate>
      
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import TimeBarChartTotalCase from '@/components/TimeBarChartTotalCase.vue';
import TimeBarChartNewInfection from '@/components/TimeBarChartNewInfection.vue';
import TimeBarChartInfectionIncreaseRate from '@/components/TimeBarChartInfectionIncreaseRate.vue';
import TimeBarChartTotalDeath from '@/components/TimeBarChartTotalDeath.vue';
import TimeBarChartNewDeath from '@/components/TimeBarChartNewDeath.vue';
import TimeBarChartDeathIncreaseRate from '@/components/TimeBarChartDeathIncreaseRate.vue';
import allData from '@/data/AllData.json';

export default {
  components: {
    PageHeader,
    TimeBarChartTotalCase,
    TimeBarChartNewInfection,
    TimeBarChartInfectionIncreaseRate,
    TimeBarChartTotalDeath,
    TimeBarChartDeathIncreaseRate,
    TimeBarChartNewDeath
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