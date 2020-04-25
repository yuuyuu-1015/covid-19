<template>
  <div class="MainPage">
    <page-header 
      class="pageHeader"
      :title="title"
    ></page-header>
    <label 
      for="location"
    >select location:</label>
        <select v-model="eventData.selectLocation">
          <option
            v-for="location in selectLocations"
            :key="location"
            :value="location"
          >
            {{location}}
          </option>
        </select>
      <v-row>
      <v-col>
        <time-bar-chart-total-case
          class="chart"
          :location-select="eventData.selectLocation"
        ></time-bar-chart-total-case>
      </v-col>
      <v-col>
        <time-bar-chart-new-infection
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-new-infection>
      </v-col>
      <v-col>
        <time-bar-chart-infection-increase-rate
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-infection-increase-rate>
      </v-col>
      <v-col>
        <time-bar-chart-total-death
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-total-death>
      </v-col>
      <v-col>
        <time-bar-chart-new-death
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-new-death>
      </v-col>
      <v-col>
        <time-bar-chart-death-increase-rate
          class="chart"
          :location-select="eventData.selectLocation"
        >
        </time-bar-chart-death-increase-rate>
      </v-col>
      </v-row>
      
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

<style lang="scss" scoped>
.MainPage{
  text-align: center;

  & .pageHeader{
    font-size: 2em;
    width: 400px;
    margin: 100px auto;
  }
  & > label{
    font-size: 2em;
  }
  & > select{
    font-size: 2em;
    border: solid 2px black;
    margin: 0 0 0 100px;
  }
  & .row{
    margin: 100px 0;
  }
}
</style>