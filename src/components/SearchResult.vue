<template>
    <div class="result-box">
        <div class="result">
            <CardComponent v-for="(card, index) in store.films" :title="card.title" :originalTitle="card.original_title"
                :lang="card.original_language" :vote="card.vote_average" :img="card.poster_path" :tName="card.name"
                :overview="card.overview" />
        </div>
    </div>
</template>

<script>
import { store } from '../store'
import CardComponent from './CardComponent.vue'

export default {

    name: 'SearchResult',

    components: {
        CardComponent,
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.result-box {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0px;
    z-index: 999;
    background-color: $background;
}

.result {
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 24px;
    padding-top: 68px;
}
</style>