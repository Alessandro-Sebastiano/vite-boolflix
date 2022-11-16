<template>
    <div class="result">
        <div class="card" v-for="(card, index) in store.films">
            <h2>{{ (card.title) ? card.title : card.name }}</h2>
            <span>{{ card.original_title }}</span>
            <span>{{ card.original_language }}</span>
            <span>{{ card.vote_average }}</span>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {

    name: 'SearchResult',

    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
.result {
    padding-top: 68px;
    display: flex;
    flex-wrap: wrap;
}

.card {
    border: 1px solid red;
    padding: 6px;

    span {
        display: block;
    }
}
</style>