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
      <v-col></v-col>
      <v-col></v-col>
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

export default {
  components: {
    PageHeader,
    WhatsNew,
    TimeBarChart
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
