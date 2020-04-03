<template>
  <div class="MainPage">
    <page-header
      :title="title"
      :date="date"
    ></page-header>
    <whats-new :items="newsItems"></whats-new>
    <h2>Japan</h2>
    <v-row>
      <v-col>
        <time-bar-chart></time-bar-chart>
      </v-col>
      <v-col>
        <time-bar-chart2></time-bar-chart2>
      </v-col>
      <v-col>
        <time-bar-chart3></time-bar-chart3>
      </v-col>
      <v-col>
        <time-bar-chart4></time-bar-chart4>
      </v-col>
      <v-col>
        <time-bar-chart5></time-bar-chart5>
      </v-col>
      <v-col>
        <time-bar-chart5></time-bar-chart5>
      </v-col>
    </v-row>
    <h2>United States</h2>
    <v-row>
      <v-col>
        <time-bar-chart-us></time-bar-chart-us>
      </v-col>
      <v-col>
        <time-bar-chart2-us></time-bar-chart2-us>
      </v-col>
      <v-col>
        <time-bar-chart3-us></time-bar-chart3-us>
      </v-col>
      <v-col>
        <time-bar-chart4-us></time-bar-chart4-us>
      </v-col>
      <v-col>
        <time-bar-chart5-us></time-bar-chart5-us>
      </v-col>
      <v-col>
        <time-bar-chart5-us></time-bar-chart5-us>
      </v-col>
    </v-row>
    <h2>Italy</h2>
    <v-row>
      <v-col>
        <time-bar-chart-it></time-bar-chart-it>
      </v-col>
      <v-col>
        <time-bar-chart2-it></time-bar-chart2-it>
      </v-col>
      <v-col>
        <time-bar-chart3-it></time-bar-chart3-it>
      </v-col>
      <v-col>
        <time-bar-chart4-it></time-bar-chart4-it>
      </v-col>
      <v-col>
        <time-bar-chart5-it></time-bar-chart5-it>
      </v-col>
      <v-col>
        <time-bar-chart5-it></time-bar-chart5-it>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import Data from '@/data/data.json';
import News from '@/data/news.json';
import WhatsNew from '@/components/WhatsNew.vue';
import TimeBarChart from '@/components/TimeBarChart.vue';
import TimeBarChart2 from '@/components/TimeBarChart2.vue';
import TimeBarChart3 from '@/components/TimeBarChart3.vue';
import TimeBarChart4 from '@/components/TimeBarChart4.vue';
import TimeBarChart5 from '@/components/TimeBarChart5.vue';
import TimeBarChartUs from '@/components/TimeBarChartUs.vue';
import TimeBarChart2Us from '@/components/TimeBarChart2Us.vue';
import TimeBarChart3Us from '@/components/TimeBarChart3Us.vue';
import TimeBarChart4Us from '@/components/TimeBarChart4Us.vue';
import TimeBarChart5Us from '@/components/TimeBarChart5Us.vue';
import TimeBarChartIt from '@/components/TimeBarChartIt.vue';
import TimeBarChart2It from '@/components/TimeBarChart2It.vue';
import TimeBarChart3It from '@/components/TimeBarChart3It.vue';
import TimeBarChart4It from '@/components/TimeBarChart4It.vue';
import TimeBarChart5It from '@/components/TimeBarChart5It.vue';

export default {
  components: {
    PageHeader,
    WhatsNew,
    TimeBarChart,
    TimeBarChart2,
    TimeBarChart3,
    TimeBarChart4,
    TimeBarChart5,
    TimeBarChartUs,
    TimeBarChart2Us,
    TimeBarChart3Us,
    TimeBarChart4Us,
    TimeBarChart5Us,
    TimeBarChartIt,
    TimeBarChart2It,
    TimeBarChart3It,
    TimeBarChart4It,
    TimeBarChart5It
  },
  data() {
    return{
      date: Data.lastUpdate,
      title: "現在の感染者（二週間後の検査結果）",
      newsItems: News.newsItems
    }
  }
}
</script>

<style>
</style>
