<template>
    <div class="result" v-if="store.films.length !== 0">
        <CardComponent v-for="(card, index) in store.films" :title="card.title" :originalTitle="card.original_title"
            :lang="card.original_language" :vote="card.vote_average" :img="card.poster_path" :tName="card.name" />
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
.result {
    margin-top: 68px;
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    position: relative;
}
</style>