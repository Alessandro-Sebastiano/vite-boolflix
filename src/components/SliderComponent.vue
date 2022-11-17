<template>
    <div class="slider">
        <h2>{{ sliderTitle }}</h2>
        <CardComponent v-for="(card, index) in topRatedList" :title="card.title" :originalTitle="card.original_title"
            :lang="card.original_language" :vote="card.vote_average" :img="card.poster_path" :tName="card.name"
            :overview="card.overview" />
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardComponent from './CardComponent.vue';

export default {
    name: 'SliderComponent',

    components: {
        CardComponent,
    },

    props: ['sliderTitle'],


    data() {
        return {
            store,
            topRatedBaseUrl: 'https://api.themoviedb.org/3/movie/top_rated',
            topRatedList: [],
        }
    },


    methods: {
        getTopRated() {
            const topRatedCompleteUrl = this.topRatedBaseUrl + this.store.apiKey + '&language=it-IT&page=1';
            axios.get(topRatedCompleteUrl).then((response) => {
                this.topRatedList = { ...response.data.results };
            })
        }
    },


    created() {
        this.getTopRated()
    }

}
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    padding: 84px 0;
    overflow-x: scroll;
    position: relative;


    h2 {
        position: absolute;
        top: 0;
        padding: 26px;
    }
}

.card-box {
    min-width: calc((100% / 6) - 8px);
    margin: 0 4px;
}
</style>