<template>
  <div class="MainPage">
    <page-header
      :title="title"
      :date="date"
    ></page-header>
    <whats-new :items="newsItems"></whats-new>
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
      <v-col></v-col>
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

export default {
  components: {
    PageHeader,
    WhatsNew,
    TimeBarChart,
    TimeBarChart2,
    TimeBarChart3
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
