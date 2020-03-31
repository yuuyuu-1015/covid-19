<template>
    <div>
        <h2>最新のお知らせ</h2>
        <div v-for="(item, i) in items" :key="i">
            <a class="WhatsNew-item" :href="item.url" target="_blank">
                <time class="WhatsNew-item-time px-2">{{ item.date }}</time>
                <span class="WhatsNew-item-link">{{ item.text }}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>