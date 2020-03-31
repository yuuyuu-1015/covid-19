<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="date">
            <span>最終更新 </span><time>{{ date }}</time>
        </div>
    </div>
</template>

<script>
export default {
props: ['title', 'date'],
}
</script>